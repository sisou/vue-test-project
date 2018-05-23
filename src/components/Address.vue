<template>
    <div class="address" v-on:click.left="copy">
        {{ address }}
    </div>
</template>

<script>
export default {
    name: 'Address',
    props: ['address'],
    methods: {
        copy(event) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(event.target);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
        }
    }
}
</script>

<style>
    .address {
        width: 100%;
        min-width: 320px;
        max-width: 400px;
        box-sizing: border-box;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
        border-radius: 3px;
    }

    .address:hover {
        background: rgba(0, 0, 0, 0.2);
    }
</style>
