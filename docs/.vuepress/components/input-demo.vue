<template>
    <div>
        <t-input value="不可点击" disabled></t-input>
        <t-input value="只读" readonly></t-input>
        <t-input value="可编写"></t-input>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components:{
            't-input': Input,

        },
    }
</script>
