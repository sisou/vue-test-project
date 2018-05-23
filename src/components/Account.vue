<template>
    <div class="account" v-on:click="$emit('account-selected', account.address)">
        <Identicon :address="account.address"/>
        <i class="icon material-icons" :class="iconClass"></i>
        <div class="info">
            <span class="label">{{ account.label }}</span>
            <Address :address="account.address"/>
            <div class="bottom">
                <Amount>{{ account.balance }}</Amount>
            </div>
        </div>
    </div>
</template>

<script>
import Identicon from './Identicon.vue'
import Address from './Address.vue'

export default {
    name: 'Account',
    props: ['account'],
    computed: {
        iconClass() {
            switch(this.account.type) {
                case 1: return 'secure-icon'
                case 3: return 'ledger-icon'
                case 4: return 'vesting-icon'
                default: return 'display-none'
            }
        }
    },
    components: {
        Identicon,
        Address
    }
}
</script>

<style>
    @import '../../lib/nimiq-style/material-icons/material-icons.css';

    .account {
        display: flex;
        max-width: 490px;
        padding: 8px 16px;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        cursor: pointer;
        position: relative;

        border-radius: 5px;
        box-shadow: 0 3px 18px -3px lightgray;
    }

    .account .identicon {
        width: 80px;
        min-width: 50px;
        height: 71px;
    }

    .account .icon {
        display: block;
        position: absolute;
        left: 70px;
        top: 48px;
        width: 1.4em;
        height: 1.4em;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 85%;
        background-color: white;
        padding: 12px;
        border: 0.5px solid lightgray;
        border-radius: 50%;
        font-size: 20px;
    }

    .account .icon::after {
        position: relative;
        left: -8.5px;
        top: -9px;
    }

    .account .secure-icon::after {
        content: 'check_circle';
        color: #2e7d32;
    }

    .account .vesting-icon::after {
        content: 'access_time';
    }

    .account .ledger-icon {
        background-image: url('data:image/svg+xml,<svg fill="%231d2029" height="24" viewBox="0 0 6.3500002 6.3500002" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.550738 4.79653v-.49514h.990264v.99028h-.990264zm-1.20764.42078c-.145904-.066-.259599-.17807-.328784-.32417-.0479-.10116-.05724-.15898-.05743-.35626l-.000237-.23549H1.922758v.96612l-.23549-.00055c-.184291-.00045-.25912-.0112-.344177-.0497zm2.825877-.43286v-.48306h.996723l-.01186.23549c-.01369.27202-.05417.38752-.182968.52218-.149108.1559-.290691.20795-.56641.20821l-.235491.00028zM.956653 3.17827v-.49515h.990265v.99029H.956653zm1.594085-.81033V1.06246l1.044608.007c1.005765.007 1.048731.009 1.155455.0585.141145.0653.240077.15912.312935.26464.07287.10552.08343.19131.08343.19131l.0072 1.04464.0072 1.04462H2.550675zM.937504 1.81709c.0131-.27199.06554-.4113.206264-.54797.142698-.13858.272292-.18633.540956-.19927l.23804-.0115v.99675H.926042z"/></svg>');
    }

    .account .info {
        text-align: left;
        width: 100%;
        padding-left: 16px;
        max-width: calc(100% - 88px);
    }

    .account .label {
        display: block;
        font-weight: bold;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .account .address {
        pointer-events: none;
        padding: 0;
        min-width: auto;
        font-weight: normal;
        opacity: 0.6;
    }

    .account .bottom {
        text-align: right;
        margin-top: 12px;
    }

    @media (max-width: 480px) {
        .account {
            padding: 8px 0;
        }

        .account .icon {
            left: 66px;
        }

        .account Amount {
            font-size: 1.2em;
        }
    }

    @media (max-width: 350px) {
        .account Amount {
            font-size: 1em;
        }
    }
</style>
