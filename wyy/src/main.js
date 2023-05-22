import { createApp } from 'vue'
import App from './App.vue'
import './assets/color.less' //引入换肤css
// 导入公共文件
import '../public/flexible.js'
import '../public/bootstrap4.6.2/css/bootstrap.min.css'
import './assets/base.less'
import 'normalize.css'

import router from './router'
import Axios from 'axios'
import Vuex from './store'
import '../public/font/bootstrap-icons.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 挂载全局对象
const app = createApp(App)
Axios.defaults.baseURL = 'http://localhost:3000'
app.config.globalProperties.$http = Axios
app.use(router)
app.use(Vuex)
app.mount('#app')
