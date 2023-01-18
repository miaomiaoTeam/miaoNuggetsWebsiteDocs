export default {
  title: "喵队仿掘金官网文档",
  description: "喵队仿掘金官网文档",
  base: "/miaoNuggetsWebsiteDocs/",
  themeConfig: {
    nav: [
      { text: '仿掘金项目', link: 'https://github.com/miaomiaoTeam/miaoNuggetsWebsite' }
    ],
    sidebar: {
      "/": [
        {
          text: "结构",
          // 是否可收缩
          collapsible: true,
          // 是否默认展开
          collapsed: false,
          items: [
            {
              text: "项目结构",
              link: "/structures/project-structrue.md",
            },
            { text: "API接口", link: "/structures/api.md" },
          ],
        },
        {
          text: "规范",
          // 是否可收缩
          collapsible: true,
          // 是否默认展开
          collapsed: false,
          items: [
            { text: "项目命名规范", link: "/standards/name.md" },
            { text: "Git提交规范", link: "/standards/git-commit.md" },
          ],
        },
      ],
    },
  },
};
