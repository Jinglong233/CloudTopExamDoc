import {defineUserConfig} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
  base:'/CloudTopExamDoc/',
  title: 'CloudTopExam',
  description: '当前文档还在完善中...',
  theme: hopeTheme({
    logo: "/logo.png",
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "https://github.com/Jinglong233/CloudTopExam",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,

    navbar: ["/about.md", "/常见问题.md",{
      text: "QQ群",
      link: "https://qm.qq.com/cgi-bin/qm/qr?k=qlkryuwTsGzMNjsuLEkM9vR39Uj88a6m&jump_from=webapi&authKey=ZGLibVs0ayEkICfYUr99hQbuJJUilO5VGyzodRnvHkhojj5nrqWJluO90QCvqkPU",
    },],
    sidebar:[
      {
        text: '系统截图列表',
        link: 'pageShow/系统截图展示.md',
      },
      {
        text: '系统功能列表',
        prefix: 'functionList/',
        collapsible: true,
        children: [
          // 字符串 - 页面文件路径
          '管理员、教师功能.md',
          '学生功能.md',
          '待做功能.md'
        ],
      },
      {
        text: '项目的启动+技术栈',
        prefix: 'devEnv/',
        collapsible: true,
        children: [
          // 字符串 - 页面文件路径
          '项目的启动.md',
          '技术栈.md',
        ],
      },
      {
        text: '项目相关配置',
        prefix: 'projectConfig/',
        collapsible: true,
        children: [
          // 字符串 - 页面文件路径
          '配置QQ邮箱邮件服务.md',
          '阿里云OSS配置.md'
        ],
      },
      {
        text: '数据库设计',
        prefix: 'sqlDesign/',
        collapsible: true,
        children: [
          // 字符串 - 页面文件路径
          '数据库设计.md',
          '如何获取SQL文件.md',
        ],
      },
      {
        text: '接口文档',
        prefix: 'interfaceDoc/',
        collapsible: true,
        children: [
          // 字符串 - 页面文件路径
          '管理OR教师端接口文档.md',
          '学生端接口文档.md',
          '公共接口文档.md',
        ],
      },
      // 字符串 - 页面文件路径
      'about.md',
      '常见问题.md',
      'qq群.md',
    ],

  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
