<template>
    <div style="padding-top: 16px;">
        <h2>设置gutter</h2>
        <t-row class="demoRow" gutter="10">
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
        </t-row>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import TRow from '../../../src/row'
    import TCol from '../../../src/col'
    export default {
        components: {
            't-row': TRow,
            't-col': TCol
        },
    }
</script>