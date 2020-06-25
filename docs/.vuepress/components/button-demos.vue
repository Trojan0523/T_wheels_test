<template>
    <div>

        <t-button>默认按钮</t-button>
        <t-button icon="settings">默认按钮</t-button>
        <t-button :loading="true">默认按钮</t-button>
        <t-button disabled>默认按钮</t-button>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        data() {
            return {
                dynamicComponent: null
            }
        },
        components:{
            't-button': Button,
        },
    }
</script>
