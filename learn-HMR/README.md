# HMR-API
1. 模块更新时逻辑: hot.accept
   * 接受自身更新
   * 接受依赖模块的更新
   * 接受多个子模块的更新
2. 模块销毁时逻辑: hot.dispose
3. 共享数据: hot.data 属性
4. 此模块不可热更新: hot.decline
5. 强制刷新页面: hot.invalidate
6. 自定义事件: hot.on
