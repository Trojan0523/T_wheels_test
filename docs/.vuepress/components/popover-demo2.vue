<template>
    <div style="padding-top: 16px">
        <h2>hover时触发</h2>
        <t-popover position="bottom" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="top" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="left" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="right" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'
    export default {
        components:{
            't-button': Button,
            't-popover': Popover
        },
    }
</script>
