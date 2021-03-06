# s-cell 多列行
> 用于描述页面中的一整行，在页面中，每个块都认为是占满所有宽度的一整行，行内再由定宽的列和不定宽的列来确定布局

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表
> 所有高度只写数字部份即可，均以 rem 为单位，如: '2.473684'

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
height | 高度 | number | 固定高度，若不固定高度可以不写
min-height | 最小高度| number | 当高度不固定的时候，设置最小高度值
border | 是否存在边线 | true / false | 下边线
bgcolor | 背景颜色 | 参见“常量列表” | 


### 子节点
> &lt;s-column&gl;&nbsp;&lt;s-flex-column&gl;&nbsp;&lt;s-multiline&gl;&nbsp;任意数量、任意组合

### 示例
```
<s-cell min-height='2.473684' border='true'>
    <s-flex-column></s-flex-column>
    <s-column width='4.871795' align='left'>
        <b-text size='30' color='light'>{{ label }}</b-text>
    </s-column>
    <s-column width='13.157895' align='left'>
        <b-text size='30' color='black'><slot></slot></b-text>
    </s-column>
    <s-flex-column></s-flex-column>
</s-cell>
```

### &nbsp;