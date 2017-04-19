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
 40px | 20px | 1.052632
 60px | 30px | 1.578947
 120px | 60px | 3.157895
 224px | 112px | 5.894739
 300px | 150px | 7.894737

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
 lightgrey | #c1c1c1 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 stonegrey | #dcdcdc | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 smokegrey | #e5e5e5 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 offwhite | #efefef | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 cream | #f6f6f7 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 

 high | #D7AC62 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)
 tapping | #b38f47 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 yellowish | #e0c89d | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 
 lightyellow | #fffce8 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/999.png) 

 grass | #58AF51 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)
 skyblue | #4475AC | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)
 powderblue | #50b1ab | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)   
 blackblue | #2e2516 | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)   
 coral | #e6654c | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)  

 transparent | transparent | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)

## 文字和背景颜色
> 用于给结构组件设置棕色渐变的背景色

 deepbrown | transparent | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)
 
 ## 文字和背景颜色
> 用于给结构组件设置0.9透明度的白色背景

 paper | transparent | ![DEMO](https://ohc0dpsgs.qnssl.com/lego/images/d7ac62.png)
   

## 文字和背景颜色
> 用于给结构组件设置文字颜色或添加背景颜色

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

## 字体图标
> 使用 iconfont 定义的字体图标

### 示例
```
<b-icon name="flag"></b-icon>
```

### 图标名称
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)