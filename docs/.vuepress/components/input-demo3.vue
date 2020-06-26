<template>
    <div>
        <h2>双向绑定</h2>
        <t-input value="hi" v-model="message"></t-input>
        <p>value: {{message}}</p>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components:{
            't-input': Input,
        },
        data() {
            return {
                message: 'message'
            }
        }
    }
</script>
