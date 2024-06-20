export const themeData = JSON.parse("{\"logo\":\"/images/avatar.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"本站介绍\",\"link\":\"/introduction\"},{\"text\":\"前端技术\",\"children\":[{\"text\":\"vue\",\"link\":\"vue01.md\"},{\"text\":\"react\",\"link\":\"react01.md\"}]},{\"text\":\"后端技术\",\"children\":[{\"text\":\"Java\",\"link\":\"Java01.md\"},{\"text\":\"C#\",\"link\":\"/csharp/csharp01.md\"}]},{\"text\":\"随想随记\",\"children\":[{\"text\":\"实习\",\"link\":\"/实习/实习01.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
