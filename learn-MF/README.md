# Module Federation

## vite-plugin-federation:
1. Host模块: 即本地模块，用来消费远程模块。
  * 本地模块通过 remotes 注册远程模块地址
  * 本地通过import '远程模块名称/xxx'的方式来引入远程模块，实现运行时加载

2. Remote模块: 即远程模块，用来生产一些模块，并暴露运行时容器供本地模块消费。
   * 远程模块通过exposes 注册导出的模块

3. Shared依赖: 即共享依赖，用来在本地模块和远程模块中实现第三方依赖的共享（如设置'vue'，当它执行远程模块代码的时候，一旦遇到了引入vue的情况，会优先使用本地的 vue，而不是远端模块中的vue）