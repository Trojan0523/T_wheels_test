---
title: Input - 输入框
sidebarDepth: 2
---
# 输入框

简单用法

<ClientOnly>
<input-demo></input-demo> 
</ClientOnly>

代码
```
   <t-input value="不可点击" disabled></t-input>
   <t-input value="只读" readonly></t-input>
   <t-input value="可编写"></t-input>
```


错误信息提示

<ClientOnly>
<input-demo2></input-demo2> 
</ClientOnly>

代码
```
 <div class="box">
        <t-input value="出错" error="错误信息"></t-input>
    </div>
```

<ClientOnly>
<input-demo3></input-demo3> 
</ClientOnly>

代码
```
data() {
   return {
       message: 'message'
   }
}
   <t-input value="hi" v-model="message"></t-input>
   <p>value: {{message}}</p>
```