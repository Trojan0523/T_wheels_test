---
title: Toast - 信息框弹出
---

# Toast
<p>
    <strong>预览</strong>
</p>   

<ClientOnly>
<toast-demo></toast-demo>  
</ClientOnly>

代码
```
<t-button @click="$toast('点击弹出提示',{position: 'top'})">上方弹出</t-button>
<t-button @click="$toast('点击弹出提示',{position: 'middle'})">中间弹出</t-button>
<t-button @click="$toast('点击弹出提示',{position: 'bottom'})">下方弹出</t-button>

<style>
    .wrapper {
      z-index: 30;
    }
  </style>
```
<ClientOnly>
<toast-demo2></toast-demo2>  
</ClientOnly>

代码
```
<t-button @click="">上方弹出</t-button>
methods: {
            onClickButton() {
                this.$toast('toast-Message',{
                    closeButton: {
                        text: '按钮信息',
                        callback:() => {
                            console.log('按钮触发后回调');
                        }
                    }
                })
            }
        }

<style>
.wrapper{
    z-index: 30;
}
</style>
```