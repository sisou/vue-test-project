import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import transactions from './modules/transactions'
import settings from './modules/settings'

import { ROOT } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        accounts,
        transactions,
        settings
    },
    state: {
        msg: 'Welcome to your Vue.js App!',
        address: 'NQ02 2Q42 7BVN F9NN RJE7 JLMP FKVC B00J THFD',
        hash: 'hash_03'
    },
    mutations: {
        [ROOT.UPDATE_ADDRESS] (state, address) {
            state.address = address
        },
        [ROOT.UPDATE_HASH] (state, hash) {
            state.hash = hash
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})
