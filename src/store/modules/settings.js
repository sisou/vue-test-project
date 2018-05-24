import { SETTINGS } from '../types'

const state = {
    showAllDecimals: false
}

const getters = {}

const actions = {
    [SETTINGS.TOGGLE_DECIMALS] (context) {
        context.commit(SETTINGS.SHOW_ALL_DECIMALS, !context.state.showAllDecimals)
    }
}

const mutations = {
    [SETTINGS.SHOW_ALL_DECIMALS] (state, shouldShow) {
        state.showAllDecimals = !!shouldShow
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
