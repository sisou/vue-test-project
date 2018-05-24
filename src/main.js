import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import App from './App.vue'
import store from './store'

Vue.use(AsyncComputed)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')


// Demo code

const addresses = [
    'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
    'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
    'NQ91 GN8V XQV1 M779 8U1A VAKN 2YR9 XLAV FM53',
    'NQ06 1YLF KX34 E5DM 4Y7D 03JC 0PLE LRLQ 20UH',
    'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD'
]

import { ROOT } from './store/types'

setInterval(() => {
    const address = addresses.shift();
    store.commit(ROOT.UPDATE_ADDRESS, address);
    addresses.push(address);
}, 2000)
