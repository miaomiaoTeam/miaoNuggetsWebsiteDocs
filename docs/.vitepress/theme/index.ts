import DefaultTheme from 'vitepress/theme'
import MTypesToken from './components/types/Token.vue'
import MTYPERecordTime from './components/types/RecordTime.vue'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx)
		ctx.app.component('MTypesToken', MTypesToken)
		ctx.app.component('MTYPERecordTime', MTYPERecordTime)
	},
} as typeof DefaultTheme
