import { TRANSACTIONS } from '../types'

const state = {
    hasTransactions: true,
    entries: {
        'hash_01': {
            recipient: 'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
            recipientLabel: 'Green Mustaccio',
            sender: 'NQ73 B5F1 4FYR MG1K 3NF4 N1QS L32A EANM 537H',
            senderLabel: 'Pilz-Hotline',
            type: 'transfer',
            value: 438.12,
            fee: 0,
            blockHeight: 34045,
            timestamp: 1521111029,
            hash: 'hash_01',
            currentHeight: 35422,
        },
        'hash_02': {
            recipient: 'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
            recipientLabel: 'Green Mustaccio',
            sender: 'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
            senderLabel: 'NQ77 X5GR VCE5...',
            type: 'incoming',
            expired: true,
            value: 238.12,
            fee: 0,
            blockHeight: 34321,
            timestamp: 1521211029,
            hash: 'hash_02',
            currentHeight: 35422,
        },
        'hash_03': {
            sender: 'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
            senderLabel: 'Green Mustaccio',
            recipient: 'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
            recipientLabel: 'NQ77 X5GR VCE5...',
            type: 'outgoing',
            value: 238.12,
            fee: 0.01,
            blockHeight: 34521,
            timestamp: 1521411029,
            hash: 'hash_03',
            currentHeight: 35422,
        },
        'hash_04': {
            recipient: 'NQ57 2CTN 72AK GR4K P6FC 46HS SRPU MTF3 0AXF',
            recipientLabel: 'Green Mustaccio',
            sender: 'NQ77 X5GR VCE5 AQYB J3YJ VE7V 15L2 8EXY ECYU',
            senderLabel: 'NQ77 X5GR VCE5...',
            type: 'incoming',
            value: 238.12,
            fee: 0,
            hash: 'hash_04',
            currentHeight: 35422,
        }
    }
}

const getters = {}

const actions = {}

const mutations = {
    /* eslint-disable */
    [TRANSACTIONS.ADD_TRANSACTIONS] (state, transactions) {},
    [TRANSACTIONS.MARK_REMOVED] (state, hashes) {},
    [TRANSACTIONS.REMOVE_TRANSACTIONS] (state, hashes) {},
    [TRANSACTIONS.UPDATE_BLOCK_HEIGHT] (state, {hash, blockHeight}) {}
}

export default {
    state,
    getters,
    actions,
    mutations
}
