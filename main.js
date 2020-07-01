import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api.js'
import { dateFormat,dateFormat2,priceFormat } from './util/filters.js'

Vue.prototype.$myRequest = myRequest
Vue.filter("dateFormat",dateFormat)
Vue.filter("dateFormat2",dateFormat2)
Vue.filter("priceFormat",priceFormat)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
