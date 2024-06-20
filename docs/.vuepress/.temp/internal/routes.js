export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"本站介绍"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/csharp/csharp01.html", { loader: () => import(/* webpackChunkName: "csharp_csharp01.html" */"D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/csharp/csharp01.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/%E5%AE%9E%E4%B9%A0/%E5%AE%9E%E4%B9%A001.html", { loader: () => import(/* webpackChunkName: "实习_实习01.html" */"D:/blogs/vuepress-starter/docs/.vuepress/.temp/pages/实习/实习01.html.js"), meta: {"title":"实习day01"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
