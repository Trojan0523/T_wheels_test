<template>
    <div style="padding-top: 16px">
        <h2>点击时触发</h2>
        <t-popover position="bottom">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="top">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="left">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="right">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
    </div>
</template>
<script>
    import Button from '@/button/button'
    import Popover from '../../../src/popover'
    export default {
        components:{
            't-button': Button,
            't-popover': Popover
        },
    }
</script>
