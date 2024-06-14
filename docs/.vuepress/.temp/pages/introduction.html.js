import comp from "D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/introduction.html\",\"title\":\"本站介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"短期目标\",\"slug\":\"短期目标\",\"link\":\"#短期目标\",\"children\":[]},{\"level\":2,\"title\":\"长期目标\",\"slug\":\"长期目标\",\"link\":\"#长期目标\",\"children\":[]},{\"level\":2,\"title\":\"菜鸟的我\",\"slug\":\"菜鸟的我\",\"link\":\"#菜鸟的我\",\"children\":[{\"level\":3,\"title\":\"技术栈\",\"slug\":\"技术栈\",\"link\":\"#技术栈\",\"children\":[]},{\"level\":3,\"title\":\"个人信息\",\"slug\":\"个人信息\",\"link\":\"#个人信息\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718372730000,\"contributors\":[{\"name\":\"杀死一只知更鸟\",\"email\":\"robindebug@163.com\",\"commits\":1}]},\"filePathRelative\":\"introduction.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
