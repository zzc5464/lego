'use strict';
module.exports = {
    cleanTmod: true,
    config: {
        tmod: {
            'demo-index': {
                src: './src/demo/index/views/*.html',
                dest: './src/',
                options: {
                    "base": './src/',
                    "output": "./dest",
                    "charset": "utf-8",
                    "syntax": "native",
                    "helpers": null,
                    "escape": true,
                    "compress": true,
                    "type": "commonjs",
                    "runtime": "template.js",
                    "combo": true,
                    "minify": true,
                    "cache": false,
                    "alias": '../../../template'
                }
            },
            'demo-basic': {
                src: './src/demo/basic/views/*.html',
                dest: './src/',
                options: {
                    "base": './src/',
                    "output": "./dest",
                    "charset": "utf-8",
                    "syntax": "native",
                    "helpers": null,
                    "escape": true,
                    "compress": true,
                    "type": "commonjs",
                    "runtime": "template.js",
                    "combo": true,
                    "minify": true,
                    "cache": false,
                    "alias": '../../../template'
                }
            }
        },
        browserify: {
            'demo-index': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller'
                    ]
                },
                src: ['./src/demo/index/controller/index.controller.js'],
                dest: './webroot/modules/demo/index/index.js'
            },
            'demo-basic': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller'
                    ]
                },
                src: ['./src/demo/basic/controller/basic.controller.js'],
                dest: './webroot/modules/demo/basic/basic.js'
            }
        },
        copy: {
            'demo-index': {
                files: [
                    {
                        src: "./src/demo/index/css/demo.index.css",
                        dest: "./webroot/css/demo.index.css"
                    }
                ]
            },
            'demo-basic': {
                files: [
                    {
                        src: "./src/demo/basic/css/demo.basic.css",
                        dest: "./webroot/css/demo.basic.css"
                    }
                ]
            },
            iconfont: {
                files: [{
                    src: "./src/sass/iconfont/iconfont.eot",
                    dest: "./webroot/css/iconfont/iconfont.eot"
                }, {
                    src: "./src/sass/iconfont/iconfont.svg",
                    dest: "./webroot/css/iconfont/iconfont.svg"
                }, {
                    src: "./src/sass/iconfont/iconfont.ttf",
                    dest: "./webroot/css/iconfont/iconfont.ttf"
                }, {
                    src: "./src/sass/iconfont/iconfont.woff",
                    dest: "./webroot/css/iconfont/iconfont.woff"
                }]
            }
        },
        clean: {
            lego: {
                src: ['./src/**/*.vue.js']
            }
        },
        sass: {
            lego: {
                files: {
                    './webroot/css/lego.css': './src/sass/lego.scss'
                }
            }
        },
        vueify: {
            lego: {
                files: [{
                    expand: true,
                    src: './src/**/*.vue',
                    dest: './',
                    ext: '.vue.js'
                }]
            }
        }
    },
    taskList: [ 
        "vueify:lego", 
        "sass:lego", 
        "copy:iconfont", 

        "tmod:demo-index", 
        "browserify:demo-index", 
        "copy:demo-index", 

        "tmod:demo-basic", 
        "browserify:demo-basic", 
        "copy:demo-basic", 

        "clean:lego" 
    ]
}