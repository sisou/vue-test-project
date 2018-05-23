<template>
    <div id="app">
        <Identicon :address="address"/>
        <Address :address="address"/>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Identicon from './components/Identicon.vue'
import Address from './components/Address.vue'

import { mapState } from 'vuex'

export default {
    name: 'app',
    components: {
        HelloWorld,
        Identicon,
        Address
    },
    computed: mapState([
        'address'
    ])
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.identicon {
    margin: auto;
    width: 160px;
}

.address {
    margin: auto;
}
</style>
