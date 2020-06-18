<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        components: {Icon},
        name: 'TInput',
        props: {
            value: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666666;
    $border-radius: 4px;
    $font-size: 12px;
    $red: #F1453D;
    $box-shadow-color: rgb(0, 0, 0, 0.5);
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            padding: 0 8px;
            border-radius: $border-radius;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                background-color: #F8F8FF;
                color: #bbb;
                cursor: not-allowed;
            }

            &[readonly] {
                cursor: not-allowed;
            }

        }
    }
</style>