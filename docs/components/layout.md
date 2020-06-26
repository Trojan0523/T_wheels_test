---
title: Layout - 布局
sidebarDepth: 2
---

# 布局

<ClientOnly>
<layout-demo></layout-demo>  
</ClientOnly>

代码
```
<t-layout style="height: 200px;color: beige;margin-bottom: 50px">
   <t-layout>
       <t-header style="height: 50px; background:lightskyblue;">
            header
        </t-header>
       <t-content style="height: 100px; background:deepskyblue;">
            content
        </t-content>
       <t-footer style="height: 100px; background:deepskyblue;">
            footer
        </t-footer>
    </t-layout>
</t-layout>
```

<ClientOnly>
<layout-demo2></layout-demo2>  
</ClientOnly>

代码
```
<t-layout style="height: 200px;color: beige;margin-bottom: 50px">
        <t-sider style="background: #ddd;width: 200px;color:black;">
            sider
        </t-sider>
    <t-layout>
        <t-header style="height: 50px; background:lightskyblue;">
            header
        </t-header>
        <t-content style="height: 100px; background:deepskyblue;">
            content
        </t-content>
        <t-footer style="height: 100px; background:deepskyblue;">
            footer
        </t-footer>
    </t-layout>
</t-layout>
```

<ClientOnly>
<layout-demo3></layout-demo3>  
</ClientOnly>

代码
```
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
```