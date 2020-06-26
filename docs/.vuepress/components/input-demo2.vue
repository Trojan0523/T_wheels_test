<template>
    <div class="box">
        <h2>Options</h2>
        <t-input value="错误" error="错误信息"></t-input>
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
