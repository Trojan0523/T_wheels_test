<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'TToast',
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,0.75);
    $box-shadow: 0 0 3px;
    .toast {
        color: white;
        background: $toast-bg;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        align-items: center;
        box-shadow: $box-shadow;
        padding: 0 16px;
    }
</style>