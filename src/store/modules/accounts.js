import { ACCOUNTS } from '../types'

const state = {
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
}

const getters = {}

const actions = {}

const mutations = {
    /* eslint-disable */
    [ACCOUNTS.SET_ACCOUNTS] (state, accounts) {},
    [ACCOUNTS.ADD_ACCOUNT] (state, account) {},
    [ACCOUNTS.UPDATE_BALANCES] (state, balances) {},
    [ACCOUNTS.UPDATE_LABEL] (state, {address, label}) {}
}

export default {
    state,
    getters,
    actions,
    mutations
}
