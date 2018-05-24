<template>
    <div id="app" class="nimiq-dark">
        <Identicon :address="address"/>
        <Address :address="address"/>
        <Account :account="account"/>
        <div class="transactions-list">
            <Transaction :transaction="transaction"/>
        </div>
        <button v-on:click="toggleDecimals">Toggle decimals</button>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Identicon from './components/Identicon.vue'
import Address from './components/Address.vue'
import Account from './components/Account.vue'
import Transaction from './components/Transaction.vue'

import { mapState } from 'vuex'

import { SETTINGS } from './store/types'

export default {
    name: 'app',
    computed: {
        account() {
            return this.accounts.entries[this.address]
        },
        transaction() {
            return this.transactions.entries[this.hash]
        },
        ...mapState([
            'address',
            'hash',
            'accounts',
            'transactions'
        ])
    },
    methods: {
        toggleDecimals() {
            this.$store.dispatch(SETTINGS.TOGGLE_DECIMALS)
        }
    },
    components: {
        HelloWorld,
        Identicon,
        Address,
        Account,
        Transaction
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

.display-none {
    display: none !important;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.identicon {
    width: 160px;
}

.identicon,
.address,
.account,
.transactions-list {
    margin: auto;
}

.account,
.transactions-list {
    margin-top: 32px;
    margin-bottom: 32px;

    border-radius: 5px;
    box-shadow: 0 3px 18px -3px lightgray;
}

.transactions-list {
    display: table;
    width: 100%;
    max-width: 865px;
}

button {
    padding: 8px 16px;
    font-size: inherit;
}
</style>
