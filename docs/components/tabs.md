---
title: Tabs - 标签
---

# 标签
<p>
    <strong>预览</strong>
</p>   

<ClientOnly>
<tabs-demo></tabs-demo>  
</ClientOnly>

```
<t-tabs :selected="selected">
            <t-tabs-head>
                <t-tabs-item name="1" >1</t-tabs-item>
                <t-tabs-item name="2">2</t-tabs-item>
                <t-tabs-item name="3" disabled>3</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
                <t-tabs-pane name="1">1</t-tabs-pane>
                <t-tabs-pane name="2">2</t-tabs-pane>
                <t-tabs-pane name="3">3</t-tabs-pane>
            </t-tabs-body>
        </t-tabs>
```