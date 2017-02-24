# lego
A UI components library

### 使用说明

```
  # 安装 Sass
  sudo npm install –save node-sass grunt-sass

  # 安装依赖
  npm install

  # 编译命令
  grunt lego
```


### 文件夹说明

 - **examples** - 基于 GUM 框架的模块开发目录，用于实现 UI 组件的各种示例
 - **lib** - 库文件，gum.app.js / vuejs / ......
 - **src** - 源文件，可编译成 JS 库文件，直接用给模块使用；
 - **webroot** - 网站根目录，将 nginx 配置到此处，可以用于测试 UI 组件的实际效果
