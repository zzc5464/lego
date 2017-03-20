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


### 文档说明

```
  # 安装依赖的库 marked
  sudo npm install marked

  # 执行文档生成脚本
  node Createdocs.js 
```


安装过程记录：

1. 安装 Homebrew
 - ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. 安装 nginx
 - brew install nginx

3. 安装 NodeJS
 - Visit https://nodejs.org/en/download/releases/
 - Find "node-v4.8.0.pkg" package, download and install it

4. 安装 Grunt 及相应组件
 - npm install grunt --save-dev
 - npm install -g grunt-cli
 - npm install
 - npm install vueify --save-dev
 - npm install --save-dev grunt-vueify

5. 修改 nginx 配置文件
 - vi /usr/local/etc/nginx/nginx.conf
 - 指定 lego 项目地址
    location / {
        root  /Users/wangweiqi/Documents/workspace/lego-project;
        index  index.html index.htm;
    }
- nginx -s reload
