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
        address: 'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD',
        accounts: {
            hasAccounts: true,
            entries: {
                'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD': {
                    address: 'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD',
                    label: 'Activation Account',
                    balance: 276872,
                    type: 1
                },
                'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF': {
                    address: 'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
                    label: 'Vesting Account',
                    balance: 0,
                    type: 1
                },
                'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU': {
                    address: 'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
                    label: 'Vesting Contract 1',
                    balance: 1500000,
                    owner: 'NQ91 GN8V XQV1 M779 8U1A VAKN 2YR9 XLAV FM53',
                    start: 1,
                    stepAmount: 750000,
                    stepBlocks: 129600,
                    totalAmount: 1500000,
                    type: 4,
                    height: 11000
                },
                'NQ91 GN8V XQV1 M779 8U1A VAKN 2YR9 XLAV FM53': {
                    address: 'NQ91 GN8V XQV1 M779 8U1A VAKN 2YR9 XLAV FM53',
                    label: 'My Ledger',
                    balance: 1000000,
                    type: 3
                },
                'NQ06 1YLF KX34 E5DM 4Y7D 03JC 0PLE LRLQ 20UH': {
                    address: 'NQ06 1YLF KX34 E5DM 4Y7D 03JC 0PLE LRLQ 20UH',
                    label: 'Main Account',
                    balance: 238.12432,
                    type: 2
                }
            }
        },
        settings: {
            showAllDecimals: false
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
    'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
    'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
    'NQ91 GN8V XQV1 M779 8U1A VAKN 2YR9 XLAV FM53',
    'NQ06 1YLF KX34 E5DM 4Y7D 03JC 0PLE LRLQ 20UH',
    'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD'
]

setInterval(() => {
    const address = addresses.shift();
    store.commit('changeAddress', address);
    addresses.push(address);
}, 2000)
