# text-row 纯文本行
> 在文字表格中，展示纯文本的“键-值”成对信息

### DEMO
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 标签文本 | 字符串 | 左侧文字


### 子节点
> 字符串，即右侧文字。文字可以很长，自动换行，左对齐。

### 示例
```
<a-table bgcolor='white'>

    <text-row label='姓名'>
        李乐乐
    </text-row>

    <text-row label='公司名称'>
        平安养老保险股份有限公司平安养老保险股份有限公司平安养老保险股份有限公司
    </text-row>
    
</a-table>
```

### &nbsp;