<template>
    <div>
        <h2>可展示多项内容</h2>
        <t-collapse :selected.sync="selectedTab">
            <t-collapse-item title="标题一" name="1">一</t-collapse-item>
            <t-collapse-item title="标题二" name="2">二</t-collapse-item>
            <t-collapse-item title="标题三" name="3">三</t-collapse-item>
        </t-collapse>
    </div>
</template>
<script>
    import Collapse from '@/collapse/collapse'
    import CollapseItem from '@/collapse/collapse-item'
    export default {
        components:{
            't-collapse': Collapse,
            't-collapse-item': CollapseItem
        },
        data() {
            return {
                selectedTab: ['1','2']
            }
        }
    }
</script>
