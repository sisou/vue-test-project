<template>
    <div class="transaction" :class="transactionClasses" v-on:click="$emit('transaction-selected', transaction.hash)">
        <div class="timestamp" :title="timestampTitle">{{ timestamp }}</div>
        <Identicon :address="transaction.sender"/>
        <div class="label" sender>{{ transaction.senderLabel }}</div>
        <div><i class="material-icons">arrow_forward</i></div>
        <Identicon :address="transaction.recipient"/>
        <div class="label" recipient>{{ transaction.recipientLabel }}</div>
        <Amount :amount="transaction.value" :class="transaction.type"/>
    </div>
</template>

<script>
import Identicon from './Identicon.vue'
import Amount from './Amount.vue'

import moment from 'moment'

export default {
    name: 'Transaction',
    props: ['transaction'],
    computed: {
        timestamp() {
            if (!this.transaction.timestamp) return 'pending...'
            if (this.transaction.expired) return 'expired'
            if (this.transaction.removed) return 'removed'

            const dateTime = moment.unix(this.transaction.timestamp)

            if (dateTime.isSame(moment(), 'day')) {
                return dateTime.format('HH:mm')
            } else {
                return dateTime.format('DD MMM')
            }
        },
        timestampTitle() {
            if (!this.transaction.timestamp) return ''
            if (this.transaction.expired) return 'Transaction has expired'
            if (this.transaction.removed) return 'Transaction was removed'

            const dateTime = moment.unix(this.transaction.timestamp)
            return dateTime.toDate().toLocaleString()
        },
        transactionClasses() {
            return [
                this.transaction.type,
                this.transaction.expired ? 'expired' : '',
                this.transaction.removed ? 'removed' : ''
            ]
        }
    },
    components: {
        Identicon,
        Amount
    }
}
</script>

<style>
    @import '../../lib/nimiq-style/material-icons/material-icons.css';

    .transaction {
        display: table-row;
        padding: 8px 16px;
        cursor: pointer;
        text-align: left;
    }

    .transaction:last-child {
        border-bottom: 1px solid transparent;
    }

    .transaction > * {
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        display: table-cell;
        vertical-align: middle;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .transaction > *:first-child {
        padding-left: 8px;
    }

    .transaction > *:last-child {
        padding-right: 8px;
    }

    /* .transaction:last-child > * {
        border-bottom: none;
    } */


    .transaction:hover {
        background: rgba(0, 0, 0, 0.075);
    }

    .transaction.removed,
    .transaction.expired {
        background: #FFC400;
    }

    .transaction.removed .timestamp,
    .transaction.expired .timestamp {
        font-weight: bold;
    }

    .transaction .identicon {
        width: 66px;
        height: 50px;
        padding: 0 8px;
    }

    .transaction.incoming .label[recipient],
    .transaction.outgoing .label[sender],
    .transaction.transfer .label {
        font-weight: bold;
    }

    /* .transaction .timestamp {
        text-transform: uppercase;
    } */

    .transaction .amount {
        text-align: right;
        font-size: 1.4em;
    }

    .transaction.removed .currency-nim,
    .transaction.expired .currency-nim {
        text-decoration: line-through;
    }

    @media (max-width: 768px) {
        .transaction .amount {
            font-size: 1.2em;
        }

        .transaction .amount .rest-decimals {
            display: none;
        }

        .transaction .amount .ticker {
            display: block;
        }
    }

    @media (max-width: 600px) {
        .transaction .label {
            display: none !important;
        }
    }

    @media (max-width: 480px) {
        .transaction {
            padding: 8px 0;
        }

        .transaction .amount {
            font-size: 1.1em;
        }
    }

    @media (max-width: 350px) {
        .transaction .amount {
            font-size: 1em;
        }
    }
</style>
