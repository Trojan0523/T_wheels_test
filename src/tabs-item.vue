<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                action: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;

            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        border: 1px solid green;
        display: flex;
        align-items: center;
        height: 100%;
        &:active {
            background: red;
        }
    }
</style>