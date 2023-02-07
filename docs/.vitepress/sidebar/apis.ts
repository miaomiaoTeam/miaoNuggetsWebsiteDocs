import { DefaultTheme } from 'vitepress'

const sidebar = [] as DefaultTheme.SidebarGroup[]

sidebar.push({
	text: '公用接口配置',
	collapsible: true,
	collapsed: false,
	items: [
		{ text: '服务器响应参数', link: '/apis/public/' },
		{ text: '业务码列表', link: '/apis/public/codes' },
	],
})

sidebar.push({
	text: '接口文档',
	collapsible: true,
	collapsed: false,
	items: [
		{ text: '模板', link: '/apis/interfaces/' },
		{
			text: '账户',
			link: '/apis/interfaces/auth/',
			items: [
				{ text: '管理员', link: '/apis/interfaces/auth/admin' },
				{ text: '用户', link: '/apis/interfaces/auth/user' },
			],
		},
		{
			text: '标签',
			link: '/apis/interfaces/label/',
			items: [
				{ text: '顶部选项卡', link: '/apis/interfaces/label/tabs' },
				{ text: '可关注标签', link: '/apis/interfaces/label/follow' },
			],
		},
	],
})

export default sidebar
