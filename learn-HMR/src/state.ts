let timer: number | undefined;

// 初始化 count
if (!import.meta.hot.data.count) {
  import.meta.hot.data.count = 0;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  })
}

// 负责记录当前的页面状态
export function initState() {
  const getAndIncCount = () => {
    const data = import.meta.hot?.data || {
      count: 0
    };
    data.count = data.count + 1;
    return data.count;
  };    
  timer = setInterval(() => {
    let countEle = document.getElementById('count');
    countEle!.innerText =  getAndIncCount() + '';
  }, 1000);
}
