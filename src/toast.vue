<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose()" v-html="closeButton.text">
        </span>
    </div>
</template>
<script>
    export default {
        name: 'TToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top','bottom','middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
               return  {[`position-${this.position}`]: true }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onclickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        },

    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $box-shadow: 0 0 3px;
    @keyframes fade-in {
        0% {opacity: 0; transform: translateY(100%)}
        100% {opacity: 1; transform: translateY(0%)}
    }
    .toast {
        animation: fade_in 4s;
        color: white;
        background: $toast-bg;
        position: fixed;
        left: 50%;
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        box-shadow: $box-shadow;
        padding: 0 16px;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%,-50%);
        }
    }


</style>