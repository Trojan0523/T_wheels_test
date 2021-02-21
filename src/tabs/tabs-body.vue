<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TTabsBody',
        inject: ['eventBus'],
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-body {

    }
</style>