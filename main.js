import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl = 'http://192.168.1.222';  
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
