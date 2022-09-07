function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "none",
    duration
  })
}
//失败的提示
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "error",
    duration
  })
}
// 成功的提示
toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "success",
    duration
  })
}
// loding效果
toast.loding = function() {
  uni.showToast({
    title: '正在加载中',
    icon: "loading"
  })
}
export default toast
