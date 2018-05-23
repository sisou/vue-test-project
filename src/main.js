import Vue from 'vue'
import Vuex from 'vuex'
import AsyncComputed from 'vue-async-computed'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(AsyncComputed)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        msg: 'Welcome to your Vue.js App, Sören!',
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
        updateMsg (state, msg) {
            state.msg = msg
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')

setTimeout(() => store.commit('updateMsg', 'Welcome to your Vue.js App, everybody!'), 1000)
