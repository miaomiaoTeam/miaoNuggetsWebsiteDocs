import { DefaultTheme } from 'vitepress'

const sidebar = [] as DefaultTheme.SidebarGroup[]

sidebar.push({
	text: '结构',
	// 是否可收缩
	collapsible: true,
	// 是否默认展开
	collapsed: false,
	items: [
		{ text: '项目结构', link: '/docs/structures/' },
		{ text: '组件目录结构', link: '/docs/structures/components' },
		{ text: 'Hooks目录结构', link: '/docs/structures/hooks' },
		{ text: '布局目录结构', link: '/docs/structures/layouts' },
		{ text: '工具函数目录结构', link: '/docs/structures/utils' },
		{ text: 'API接口', link: '/docs/structures/apis' },
	],
})

sidebar.push({
	text: '规范',
	// 是否可收缩
	collapsible: true,
	// 是否默认展开
	collapsed: false,
	items: [
		{ text: '项目规范', link: '/docs/standards/' },
		{ text: '命名规范', link: '/docs/standards/name' },
		{ text: 'Git提交规范', link: '/docs/standards/git-commit' },
		{ text: 'Git分支规范', link: '/docs/standards/git-branch' },
	],
})

sidebar.push({
	text: '杂项',
	// 是否可收缩
	collapsible: true,
	// 是否默认展开
	collapsed: false,
	items: [{ text: '参考文档', link: '/docs/others/reference' }],
})

export default sidebar
