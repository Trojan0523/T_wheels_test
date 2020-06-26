---
title: Button - 按钮
sidebarDepth: 2
---

# 按钮

预览

<ClientOnly>
<button-demos></button-demos>  
</ClientOnly>

使用方法

```
     <t-button>默认按钮</t-button>
     <t-button icon="settings">默认按钮</t-button>
     <t-button :loading="true">默认按钮</t-button>
     <t-button disabled>默认按钮</t-button>

     <t-button-group>
       <t-button icon="left">上一页</t-button>
       <t-button>更多</t-button>
       <t-button icon="right" icon-position="right">下一页</t-button>
    </t-button-group>
```

## 选项
 1. icon: 引入icon,目前支持 info, loading, left, right, thumbs-up, download, settings, down等Icon
 2. loading： 按钮icon是否进入等待
 3. disabled: 是否可以被点击
 4. icon-position: icon位置,支持icon放置左右
 