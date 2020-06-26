---
title: Grid - 网格
sidebarDepth: 2
---
# 网格

简单用法

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

代码
```
<t-row class="demoRow">
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
        </t-row>
```

<ClientOnly>
<grid-demo2></grid-demo2>
</ClientOnly>

代码
```
<t-row class="demoRow" gutter="10">
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
        </t-row>
CSS 
 * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
```

<ClientOnly>
<grid-demo3></grid-demo3>
</ClientOnly>

代码
```
<t-row class="demoRow" gutter="10">
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8" offset="8">
                <div class="demoCol">8</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="6" offset="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6" offset="6">
                <div class="demoCol">6</div>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4" offset="4">
                <span class="demoCol">4</span>
            </t-col>
            <t-col span="4" offset="8">
                <span class="demoCol">4</span>
            </t-col>
        </t-row>
        <t-row class="demoRow" gutter="10">
            <t-col span="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2" offset="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2" offset="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2" offset="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2">
                <span class="demoCol">2</span>
            </t-col>
            <t-col span="2" offset="2">
                <span class="demoCol">2</span>
            </t-col>
        </t-row>
CSS
* {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
```