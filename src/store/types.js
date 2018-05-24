export const ROOT = {
    UPDATE_ADDRESS: 'update-address',
    UPDATE_HASH: 'update-hash'
}

export const ACCOUNTS = {
    // Mutations
    SET_ACCOUNTS: 'accounts/set-accounts',
    ADD_ACCOUNT: 'accounts/add-account',
    UPDATE_BALANCES: 'accounts/update-balances',
    UPDATE_LABEL: 'accounts/update-label'
}

export const TRANSACTIONS = {
    // Mutations
    ADD_TRANSACTIONS: 'transactions/add-transactions',
    MARK_REMOVED: 'transactions/mark-removed',
    REMOVE_TRANSACTIONS: 'transactions/remove-transactions',
    UPDATE_BLOCK_HEIGHT: 'transactions/update-block-height'
}

export const SETTINGS = {
    // Actions
    TOGGLE_DECIMALS: 'settings/toggle-decimals',
    // Mutations
    SHOW_ALL_DECIMALS: 'settings/show-all-decimals'
}
