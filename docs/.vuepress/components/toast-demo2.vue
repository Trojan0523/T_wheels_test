<template>
    <div style="padding: 16px;">
        <h2>设置toast信息</h2>
        <t-button @click="onClickButton">上方弹出</t-button>
    </div>
</template>

<script>
    import TButton from "@/button/button"
    import TToast from "../../../src/toast"
    import plugin from "../../../src/plugin";
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        components: {
            't-toast': TToast,
            't-button': TButton
        },
        methods: {
            onClickButton() {
                this.$toast('toast-Message',{
                    closeButton: {
                        text: '按钮信息',
                        callback:() => {
                            console.log('按钮触发后回调');
                        }
                    }
                })
            }
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
