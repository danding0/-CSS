window.onload = function () {
  // 轮播图初始化
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    speed: 1500,
    autoplayDisableOnInteraction: false,
    // 分页器
    pagination: '.swiper-pagination',
  })

  // 视口变化时,自适应窗口
  window.onresize = function () {
    viewport()
  }
  // 根据视口大小设置rem值
  function viewport() {
    let html = document.querySelector('html');
    let width = html.getBoundingClientRect().width;
    let rem = width / 20;
    html.style.fontSize = rem + "px";
  }
  viewport()
}