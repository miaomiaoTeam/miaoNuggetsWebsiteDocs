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
				{ text: '登录', link: '/apis/interfaces/auth/signin' },
				{ text: '注册', link: '/apis/interfaces/auth/signup' },
				{ text: '登出', link: '/apis/interfaces/auth/signout' },
			],
		},
	],
})

export default sidebar
