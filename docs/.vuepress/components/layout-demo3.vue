<template>
    <div>
    <h2>布局</h2>
        <t-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-header style="height: 50px; background:lightskyblue;">
                header
            </t-header>
            <t-layout>
                <t-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </t-sider>
                <t-content style="height: 100px; background:deepskyblue;">
                    content
                </t-content>
            </t-layout>
            <t-footer style="height: 50px; background:lightskyblue;">
                footer
            </t-footer>
        </t-layout>
    </div>
</template>
<script>
    import Layout from '@/layout/layout'
    import Header from "@/layout/header"
    import Content from "@/layout/content"
    import Sider from "@/layout/sider"
    import Footer from "@/layout/footer"
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
