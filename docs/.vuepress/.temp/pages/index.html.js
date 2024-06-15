import comp from "D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/avatar.png\",\"actions\":[{\"text\":\"本站介绍\",\"link\":\"/introduction.html\",\"type\":\"primary\"},{\"text\":\"博客🐳\",\"link\":\"https://www.robindeblog.cn\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"学习 📚\",\"details\":\"书山有路勤为径，学海无涯苦作舟。\"},{\"title\":\"总结 📔\",\"details\":\"前事不忘，后事之师。\"},{\"title\":\"探索 🔍\",\"details\":\"路漫漫其修远兮，吾将上下而求索。\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present waitpy.online\"},\"headers\":[],\"git\":{\"updatedTime\":1718372730000,\"contributors\":[{\"name\":\"杀死一只知更鸟\",\"email\":\"robindebug@163.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
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
