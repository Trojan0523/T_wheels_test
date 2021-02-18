<template>
    <svg class="t-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i${name}`"></use>
    </svg>
</template>

<script>
    import './svg'

    export default {
        name:'TIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .t-icon {
        width: 1em;
        height: 1em;
    }
</style>
