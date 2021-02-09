<template>
    <transition name="slide">
    <div class="sider" v-if="show">
        <slot></slot>
        <button @click="show= false">close</button>
    </div>
    </transition>
</template>

<script>
    import Vue from 'vue'
    import Button from '../button/button'
    Vue.component('t-button',Button)
    export default {
        name: 'TSider',
        data() {
            return {
                show: true
            }
        },
        methods: {},
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .3s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>
