import DefaultTheme from 'vitepress/theme'
import MTypesToken from './components/types/Token.vue'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx)
		ctx.app.component('MTypesToken', MTypesToken)
	},
} as typeof DefaultTheme
