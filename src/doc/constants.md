# 常量列表
> 用于显示普通文本，可设置文本字体大小和颜色

## 字体大小
> 用于指定文本的大小，单位是视觉稿中的 px 像素，相当于 CSS 中的两倍

### 示例

```
<b-text size="30">文字</b-text>
```

### 字体大小对照表

 视觉稿 | CSS | REM 
--- | --- | ---
 22px | 11px | 0.578947 
 24px | 12px | 0.631579
 30px | 15px | 0.789474
 32px | 16px | 0.842105
 34px | 17px | 0.894737 
 36px | 18px | 0.947368

## 文本颜色
> 用于给文本添加渲染颜色，相当于 color 属性

### 示例

```
<b-text color="grey">灰色文字</b-text>
```

### 颜色列表

 颜色名 | 颜色值 | 示例 
--- | --- | ---
 white | #FFFFFF | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/fff.png) 
 black | #333333 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/333.png) 
 grey | #666666 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/666.png) 
 light | #999999 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 high | #D7AC62 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)  

## 背景颜色
> 用于给结构组件添加背景颜色，相当于 background-color 属性

### 示例

```
<s-cell bgcolor="lightgrey">
    <s-column width="300">
        <b-text>手机号码</b-text>
    </s-column>
    <s-flex-column>
        <b-tel-field></b-tel-field>
    </s-flex-column>
</s-cell>
```

### 颜色列表

 颜色名 | 颜色值 | 示例 
--- | --- | ---
 white | #FFFFFF | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/fff.png)  
 high | #D7AC62 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png) 
 high-tapping | #B38F47 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/B38F47.png) 
 lightgrey | #DCDCDC | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/DCDCDC.png) 
 gradient | xxxxxx | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/DCDCDC.png) 
 transparent | - | -

## 字体图标
> 使用 iconfont 定义的字体图标

### 示例
```
<b-icon name="flag"></b-icon>
```

### 图标名称
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)