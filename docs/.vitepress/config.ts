import { defineConfig } from 'vitepress'

import sidebar from './sidebar'

export default defineConfig({
	title: '喵队仿掘金官网文档',
	description: '喵队仿掘金官网文档',
	lang: 'zh-CN',
	base: '/miaoNuggetsWebsiteDocs/',
	lastUpdated: true,
	themeConfig: {
		nav: [
			{ text: '文档', link: '/docs/', activeMatch: '/docs/' },
			{ text: '接口', link: '/apis/', activeMatch: '/apis/' },
			{
				text: 'ApiFox',
				link: 'https://www.apifox.cn/apidoc/shared-d9128b38-16bd-4893-a883-78e4d3456b46',
			},
			{
				text: '项目',
				link: 'https://github.com/miaomiaoTeam/miaoNuggetsWebsite',
			},
		],
		sidebar,
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/miaomiaoTeam/miaoNuggetsWebsiteDocs',
			},
		],
		editLink: {
			pattern:
				'https://github.com/miaomiaoTeam/miaoNuggetsWebsiteDocs/tree/main/docs/:path',
			text: '在Github上编辑此页面',
		},
	},
})
