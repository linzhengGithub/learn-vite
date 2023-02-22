import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from 'vite-plugin-imagemin';


export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    visualizer({
    // 打包完成后自动打开浏览器，显示产物体积报告
      open: true,
    }),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
],
  server: {
    // https 选项需要开启
    https: true,
  },
  build: {
    // <link rel="modulepreload" href="/src/app.js" />
    polyfillModulePreload: true,
    // 类型: boolean | 'esbuild' | 'terser'
    // 默认为 `esbuild`
    minify: 'esbuild',
    // 产物目标环境
    target: 'modules',
    // 如果 minify 为 terser，可以通过下面的参数配置具体行为
    // https://terser.org/docs/api-reference#minify-options
    terserOptions: {},
    // 设置 CSS 的目标环境
    cssTarget: ''
  }
});
