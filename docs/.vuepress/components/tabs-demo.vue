<template>
    <div>
        <t-tabs :selected="selected">
            <t-tabs-head>
                <t-tabs-item name="1" >1</t-tabs-item>
                <t-tabs-item name="2">2</t-tabs-item>
                <t-tabs-item name="3" disabled>3</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
                <t-tabs-pane name="1">1</t-tabs-pane>
                <t-tabs-pane name="2">2</t-tabs-pane>
                <t-tabs-pane name="3">3</t-tabs-pane>
            </t-tabs-body>
        </t-tabs>
    </div>

</template>
<script>
    import Tabs from '@/tabs/tabs'
    import TabsHead from "@/tabs/tabs-head"
    import TabsItem from "@/tabs/tabs-item"
    import TabsBody from "@/tabs/tabs-body"
    import TabsPane from "@/tabs/tabs-pane"
    export default {
        components:{
            't-tabs': Tabs,
            't-tabs-head': TabsHead,
            't-tabs-item': TabsItem,
            't-tabs-body': TabsBody,
            't-tabs-pane': TabsPane
        },
        data() {
            return {
                selected:'1'
            }
        }
    }
</script>
