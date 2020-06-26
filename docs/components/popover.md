---
title: Popover - 弹出层
---

# 气泡卡片

<p>
    <strong>预览</strong>
</p>   

<ClientOnly>
<popover-demo></popover-demo>  
</ClientOnly>

代码
```
<t-popover position="bottom">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover>
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="left">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="right">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
```

<ClientOnly>
<popover-demo2></popover-demo2>  
</ClientOnly>

代码
```
<t-popover position="bottom" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="top" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="left" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
        <t-popover position="right" trigger="hover">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <t-button>点我</t-button>
        </t-popover>
```