import comp from "D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/实习/实习01.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%AE%9E%E4%B9%A0/%E5%AE%9E%E4%B9%A001.html\",\"title\":\"实习day01\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"感叹：\",\"slug\":\"感叹\",\"link\":\"#感叹\",\"children\":[]},{\"level\":2,\"title\":\"今日份复盘：\",\"slug\":\"今日份复盘\",\"link\":\"#今日份复盘\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"实习/实习01.md\"}")
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
