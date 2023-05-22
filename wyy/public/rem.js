// 这个文件的功能是做rem适配，是我们页面的大小可以随着窗口的大小变化自适应

function remSize() {
  // 首先获取窗口的大小
  let deviceWide = document.documentElement.clientWidth

  // 如果窗口的大小,大于750px,则令其等于750
  if (deviceWide > 750) {
    deviceWide = 750
  }
  if (deviceWide < 320) {
    deviceWide = 320
  }

  // 通过设置根节点的fontSize来控制rem的大小，这里控制1rem=100px;
  document.documentElement.style.fontSize = deviceWide / 3.75 + 'px'
  // 设置根节点的字体大小，这里设置为30px,注意我们这里的获取的是整数，所以要加上"rem"
  document.body.style.fontSize = 0.16 + 'rem'
}

remSize()

// 当窗口大小再次变化时我们再次调整rem的大小
window.onresize = function () {
  remSize()
}
