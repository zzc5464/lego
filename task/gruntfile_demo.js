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
            },
            'demo-assemble': {
                src: './src/demo/assemble/views/*.html',
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
            legolib: {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    alias: {
                        "lego": "./src/utils/gum.vue.manager.js"
                    },
                    external: [
                        'fcontroller'
                    ]
                },
                src: [],
                dest: './webroot/js/lego.js'
            },
            'demo-index': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego'
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
                        'fcontroller', 'lego'
                    ]
                },
                src: ['./src/demo/basic/controller/basic.controller.js'],
                dest: './webroot/modules/demo/basic/basic.js'
            },
            'demo-assemble': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego'
                    ]
                },
                src: ['./src/demo/assemble/controller/assemble.controller.js'],
                dest: './webroot/modules/demo/assemble/assemble.js'
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
            'demo-assemble': {
                files: [
                    {
                        src: "./src/demo/assemble/css/demo.assemble.css",
                        dest: "./webroot/css/demo.assemble.css"
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

        "browserify:legolib", 

        "tmod:demo-index", 
        "browserify:demo-index", 
        "copy:demo-index", 

        "tmod:demo-basic", 
        "browserify:demo-basic", 
        "copy:demo-basic", 

        "tmod:demo-assemble", 
        "browserify:demo-assemble", 
        "copy:demo-assemble", 

        "clean:lego" 
    ]
}