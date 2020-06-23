<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
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
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created () {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;

            })
        },
        methods: {
            onClick() {
                if(this.disabled) {return}
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
    }
</script>

<style lang="scss" scoped>
    $color: blue;
    $disabled-text-color: gray;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        &.active {
            color: $color;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
        }
    }
</style>