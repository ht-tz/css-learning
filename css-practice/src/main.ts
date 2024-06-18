import { createApp } from 'vue'
import App from './App.vue'
//引入elementPlus
import ElementPlus from 'element-plus'
//引入elementPlus样式
import 'element-plus/lib/theme-chalk/index.css'
//引入全局样式
import  './style/index.less'

createApp(App)
.use(ElementPlus,{size:'small'})
.mount('#app')
