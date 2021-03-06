# s-multiline 定宽多行单元
> 在一行当中，定义一个固定宽度的列，里面的文字有可能占据多行

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表
> 所有高度只写数字部份即可，均以 rem 为单位，如: '2.473684'

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
width | 宽度 | number | 固定宽度，必选
align | 对齐 | left / right / center | 内容的对齐方向


### 子节点
> 基本元素，任意数量，任意组合

### 示例
```
<s-cell min-height='2.473684' border='true'>
    <s-flex-column></s-flex-column>
    <s-multiline width='4.871795' align='left'>
        <b-text size='30' color='light'>{{ label }}</b-text>
    </s-multiline>
    <s-multiline width='13.157895' align='left'>
        <b-text size='30' color='black'><slot></slot></b-text>
    </s-multiline>
    <s-flex-column></s-flex-column>
</s-cell>
```

### &nbsp;