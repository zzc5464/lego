# lego
A UI components library

### 使用说明
  - grunt lego;
  - nginx => webroot;
  - npm install;

### 文件夹说明
  - example - 基于 GUM 框架的模块开发目录，用于实现 UI 组件的各种示例；TODO：要把 GUM 框架的一套编译机制复用；
  - lib - 库文件，gum.app.js / vuejs / ......
  - src - 源文件，可编译成 JS 库文件，直接用给模块使用；TODO：编写编译脚本; 
  - webroot - 网站根目录，将 nginx 配置到此处，可以用于测试 UI 组件的实际效果;
  - sass -  sudo npm install --save node-sass grunt-sass   