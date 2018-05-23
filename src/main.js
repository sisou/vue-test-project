import Vue from 'vue'
import Vuex from 'vuex'
import AsyncComputed from 'vue-async-computed'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(AsyncComputed)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        msg: 'Welcome to your Vue.js App!',
        address: 'NQ46 6H5E CQUE B4RB J0RL FD0Q SDAV FV2T 80KG',
        accounts: {
            hasAccounts: true,
            entries: new Map().set('NQ21 6MVD 8URR ADXD 2R2C VAJR 649R A54X 22J7', {
                address: 'NQ21 6MVD 8URR ADXD 2R2C VAJR 649R A54X 22J7',
                balance: 96488.74608,
                label: 'Pilzkopf',
                type: 1
            })
        }
    },
    mutations: {
        changeAddress(state, address) {
            state.address = address
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')


// Demo code

const addresses = [
    'NQ15 6VRE BGBN 6HCM VBYD N9E4 5X63 4D3K F8DX',
    'NQ32 GBU4 GBAX 63RK A5T4 FB0S 1QDA QT18 S11M',
    'NQ92 0RGS 0YGB MRY8 5MHM MBL2 HSP5 7N0U Y5C6',
    'NQ73 CPNL VJSV LJSG X7YS BT8X 7JTS FS2K FHQH',
    'NQ36 P00L 1N6T S3QL KJY8 6FH4 5XN4 DXY0 L7C8',
    'NQ46 6H5E CQUE B4RB J0RL FD0Q SDAV FV2T 80KG'
]

setInterval(() => {
    const address = addresses.shift();
    store.commit('changeAddress', address);
    addresses.push(address);
}, 1000)
