<template>
    <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onclickClose()">
                {{closeButton.text}}
        </span>
    </div>
    </div>
</template>
<script>

    export default {
        name: 'TToast',
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 5,
                validator(value) {
                  return value === false || typeof value === 'number';
                }
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
               return  {
                   [`position-${this.position}`]: true
               }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        methods: {
            updateStyles () {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
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
                    this.closeButton.callback(this)
                }
            }
        },

    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg:  rgba(0, 0, 0, 0.75);
    $box-shadow: 0 0 3px rgba(0, 0, 0, 0.50);
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%)}
        100% {opacity: 1; transform: translateY(0%)}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%)}
        100% {opacity: 1; transform: translateY(0%)}
    }
    @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1; }
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        $animation-duration: 300ms;
        &.position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }
    .toast {
        color: white;
        background: $toast-bg;
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
    }
</style>