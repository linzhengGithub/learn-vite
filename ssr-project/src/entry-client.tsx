// 客户端入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// @ts-ignore
const ssrData = window.__SSR_DATA__;

async function fetchData() {
  // 客户端获取数据
}

async function hydrate() {
  let data;
  if (ssrData) {
    data = ssrData;
  } else {
    // 降级逻辑 
    data = await fetchData();
  }
  // 也可简化为 const data = window.__SSR_DATA__ ?? await fetchData();
  return ReactDOM.hydrate(
    <React.StrictMode>
      <App data={ssrData}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

hydrate()
