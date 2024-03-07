
import * as comps from './src/index'
// 导出所有组件供外部使用
export * from './src/index'
import type { App } from "vue";
// 导出一个install方法，该方法会循环注册所有组件的install方法
export default {
	install:(app:App)=>{
		for(let i in  comps ) {
			// 避免元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 的报错提醒 则转换为{ [key: string]: any }
			app.use((comps as { [key: string]: any })[i])
		}
	}
}
