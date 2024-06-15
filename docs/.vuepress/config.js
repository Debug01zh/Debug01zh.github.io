import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '一隅清欢',
  description: '一个小菜鸟的记录',
  // 仓库地址
  base: '/Debug01zh.github.io/',

  theme: defaultTheme({
    logo: '/images/avatar.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '本站介绍', link: '/introduction' },
      {
        text: '前端技术',
        children: [
          {text:'vue',link:'vue01.md'},
          {text:'react',link:'react01.md'},
        ],
      },
      {
        text: '后端技术',
        children: [
          {text:'Java',link:'Java01.md'},
          {text:'C#',link:'C#01.md'},
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
