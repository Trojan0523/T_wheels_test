<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="js">
    export default {
        name: 'TPopvoer',
        data() {
            return {visible: false}
        },
        methods: {
            xxx() {
                this.visible = !this.visible
                if (this.visible === true) {
                    setTimeout(() => {
                        let eventHandler = () => {
                            this.visible = false
                            console.log('document 隐藏了 popover');
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                } else {
                    console.log('vm 隐藏popover');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;

        .content-wrapper {
            position: relative;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    }
</style>