<template>
    <div>
        <h2>默认展示一项，其他收起状态</h2>
        <t-collapse :selected.sync="selectedTab" single>
            <t-collapse-item title="标题一" name="1">一</t-collapse-item>
            <t-collapse-item title="标题二" name="2">二</t-collapse-item>
            <t-collapse-item title="标题三" name="3">三</t-collapse-item>
        </t-collapse>
    </div>
</template>
<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        components:{
            't-collapse': Collapse,
            't-collapse-item': CollapseItem
        },
        data() {
            return {
                selectedTab: ['1']
            }
        }
    }
</script>
