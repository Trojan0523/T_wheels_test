<template>
    <div>
    <h2>布局</h2>
    <t-layout style="height: 200px;color: beige;margin-bottom: 50px">
        <t-sider style="background: #ddd;width: 200px;color:black;">sider</t-sider>
        <t-layout>
            <t-header style="height: 50px; background:lightskyblue;">header</t-header>
            <t-content style="height: 100px; background:deepskyblue;">content</t-content>
            <t-footer style="height: 100px; background:deepskyblue;">footer</t-footer>
        </t-layout>
    </t-layout>
    </div>
</template>
<script>
    import Layout from '../../../src/layout'
    import Header from "../../../src/header"
    import Content from "../../../src/content"
    import Sider from "../../../src/sider"
    import Footer from "../../../src/footer"
    export default {
        components:{
            't-layout': Layout,
            't-content': Content,
            't-header': Header,
            't-sider': Sider,
            't-footer': Footer
        },
    }
</script>
