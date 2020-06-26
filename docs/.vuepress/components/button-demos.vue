<template>
    <div>
        <t-button>按钮</t-button>
        <t-button icon="settings">按钮</t-button>
        <t-button :loading="true">按钮</t-button>
        <t-button disabled>按钮</t-button>
        <hr />
        <div style="padding-top:10px;">
            <div style="padding: 10px 0">按钮组</div>
            <t-button-group>
                <t-button icon="left">上一页</t-button>
                <t-button>更多</t-button>
                <t-button icon="right" icon-position="right">下一页</t-button>
            </t-button-group>
        </div>

    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components:{
            't-button': Button,
            't-button-group': ButtonGroup
        },
    }
</script>
