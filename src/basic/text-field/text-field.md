# b-tel-field 普通文本输入框
> 用于文本输入，可设置文本字体大小和颜色等

### DEMO
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)

### 属性列表
> 注意：文字大小是按 UI 视觉稿上的标注来定的，比如 22px 等

 属性         | 说明    | 备注 
 ---         | ---     | ---
 size        | 文字大小 | 单位为视觉稿中的 px 像素 
 color       | 文字颜色 | 不可填写颜色值，目前可选的颜色有：lightgrey、grey、black、highlight 等
 max         | 输入字段中的字符的最大长度  |
 placeholder | 用户填写输入字段的提示      |
 required    | 是否做必填项验证        | 
 value       | 输入默认值 | 不填写即为空值    |

### 子节点
>  无

### 示例
```
<b-text-field size="30" color='black' max=11 placeholder="请输入" value='文本输入' required ='true' ></b-text-field>
```
