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
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/get-started' },
      {
        text: '前端技术',
        prefix: '/group/',
        children: ['foo.md', 'bar.md'],
      },
      {
        text: 'Java',
        prefix: '/java',
        children: ['foo.md', 'bar.md'],
      },
      {
        text: 'C-sharp',
        prefix: '/C-sharp',
        children: ['foo.md', 'bar.md'],
      }
    ],
  }),

  bundler: viteBundler(),
})
