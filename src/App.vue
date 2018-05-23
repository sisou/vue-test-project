<template>
    <div id="app" class="nimiq-dark">
        <Identicon :address="address"/>
        <Address :address="address"/>
        <Account :account="account"/>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Identicon from './components/Identicon.vue'
import Address from './components/Address.vue'
import Account from './components/Account.vue'

import { mapState } from 'vuex'

export default {
    name: 'app',
    computed: {
        account() {
            return this.accounts.entries[this.address]
        },
        ...mapState([
            'address',
            'accounts'
        ])
    },
    components: {
        HelloWorld,
        Identicon,
        Address,
        Account
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
    margin: auto;
    width: 160px;
}

.address,
.account {
    margin: auto;
}

.account {
    margin-top: 32px;
    margin-bottom: 32px;
}
</style>
