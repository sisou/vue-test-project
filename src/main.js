import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        msg: 'Welcome to your Vue.js App, Sören!'
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

setTimeout(() => store.commit('updateMsg', 'And you, Max!'), 1000)
