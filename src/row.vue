<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 +'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        created() {
            console.log('row created');
        },
        mounted() {
            console.log('row mounted');
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        margin: 0 -10px;
    }
</style>