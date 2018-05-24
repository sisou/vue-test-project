<template>
    <div class="amount">
        <label v-if="label">{{ label }}</label>
        <span class="currency-nim">
            <span class="integers">{{ integers }}</span>.<span class="main-decimals">{{ mainDecimals }}</span>
            <span class="rest-decimals" v-if="showAllDecimals">{{ restDecimals }}</span>&nbsp;<span class="ticker">NIM</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Amount',
    props: ['label', 'amount'],
    computed: {
        splitAmount() {
            const value = Math.round((Number(this.amount) || 0) * 1e5) / 1e5

            const valueStr = value.toFixed(5)
            let [i, d] = valueStr.split('.')

            return {
                integers: this._formatThousands(i),
                mainDecimals: d.slice(0, 2),
                restDecimals: d.slice(2)
            }
        },
        integers() {
            return this.splitAmount.integers
        },
        mainDecimals() {
            return this.splitAmount.mainDecimals
        },
        restDecimals() {
            return this.splitAmount.restDecimals
        },
        showAllDecimals() {
            return this.$store.state.settings.showAllDecimals
        }
    },
    methods: {
        _formatThousands(number, separator = ' ') {
            let reversed = number.split('').reverse()
            for(let i = 3; i < reversed.length; i += 4) {
                reversed.splice(i, 0, separator)
            }
            return reversed.reverse().join('')
        }
    }
}
</script>

<style>
    .amount {
        display: inline;
        font-weight: 600;
        letter-spacing: 0.02em;

        /* https://twitter.com/wesbos/status/932644812582522880 */
        font-feature-settings: "tnum";
        font-variant-numeric: tabular-nums;
    }

    .amount.incoming .currency-nim {
        color: #2e7d32;
    }

    .amount.outgoing .currency-nim {
        color: #d32f2f;
    }

    .amount .integers::before {
        font-weight: 400;
    }

    .amount.incoming .integers::before {
        content: '+';
    }

    .amount.outgoing .integers::before {
        content: '-';
    }

    .amount label {
        display: block;
        font-size: 0.7em;
        font-weight: 300;
        text-transform: uppercase;
        /* letter-spacing: 0.12em; */
        /* opacity: 0.8; */
    }

    .amount .rest-decimals,
    .amount .ticker {
        font-weight: 700;
        font-size: 0.75em;
    }

    .amount .rest-decimals {
        margin-left: 0.05em;
    }

    .amount[display] .ticker,
    .amount[display] .rest-decimals,
    .amount[display] label {
        font-size: 0.5em;
    }

    @media (max-width: 480px) {
        .amount .rest-decimals {
            display: none;
        }
    }
</style>
