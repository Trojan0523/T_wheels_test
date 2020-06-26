---
title: Collapse - 手风琴
sidebarDepth: 2
---
# 手风琴

<ClientOnly>
<collapse-demo></collapse-demo>  
</ClientOnly>

代码
```
<t-collapse :selected.sync="selectedTab">
        <t-collapse-item title="标题一" name="1">一</t-collapse-item>
        <t-collapse-item title="标题二" name="2">二</t-collapse-item>
        <t-collapse-item title="标题三" name="3">三</t-collapse-item>
    </t-collapse>
{{selectedTab}}
data() {
    return {
        selectedTab:['1','2']
    }
}
```

<ClientOnly>
<collapse-demo2></collapse-demo2>  
</ClientOnly>

代码
```
<t-collapse :selected.sync="selectedTab" single>
        <t-collapse-item title="标题一" name="1">一</t-collapse-item>
        <t-collapse-item title="标题二" name="2">二</t-collapse-item>
        <t-collapse-item title="标题三" name="3">三</t-collapse-item>
</t-collapse>
data(){
    return {
        selectedTab:['1']
    }
}
```
