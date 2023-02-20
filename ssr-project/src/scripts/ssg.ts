import {loadSsrEntryModule,resolveTemplatePath, fetchData} from '../ssr-server/index';
import { renderToString } from 'react-dom/server';
import React from 'react';
import * as fs from 'fs';

async function ssg() {
  // 1. 加载服务端入口
  const { ServerEntry } = await loadSsrEntryModule(null);
  // 2. 数据预取
  const data = await fetchData();
  // 3. 组件渲染
  const appHtml = renderToString(React.createElement(ServerEntry, { data }));
  // 4. HTML 拼接
  const template = await resolveTemplatePath();
  const templateHtml = await fs.readFileSync(template, 'utf-8');
  const html = templateHtml
  .replace('<!-- SSR_APP -->', appHtml)
  .replace(
    '<!-- SSR_DATA -->',
    `<script>window.__SSR_DATA__=${JSON.stringify(data)}</script>`
  ); 
  // 最后，我们需要将 HTML 的内容写到磁盘中，将其作为构建产物
  fs.mkdirSync('./dist/client', { recursive: true });
  fs.writeFileSync('./dist/client/index.html', html);
}

ssg();
