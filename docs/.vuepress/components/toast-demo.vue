<template>
    <div style="padding: 16px;">
<t-button @click="$toast('点击弹出提示',{position: 'top'})">上方弹出</t-button>
<t-button @click="$toast('点击弹出提示',{position: 'middle'})">中间弹出</t-button>
<t-button @click="$toast('点击弹出提示',{position: 'bottom'})">下方弹出</t-button>
    </div>
</template>

<script>
    import TButton from "../../../src/button"
    import TToast from "../../../src/toast"
    import plugin from "../../../src/plugin";
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        components: {
            't-toast': TToast,
            't-button': TButton
        }
    }
</script>
<style>
    .wrapper {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>