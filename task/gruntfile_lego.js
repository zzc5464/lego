'use strict';
module.exports = {
    cleanTmod: true,
    config: {
        tmod: {
            lego: {
                src: './examples/components/basic/views/*.html',
                dest: './examples/',
                options: {
                    "base": './examples/',
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
            lego: {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego'
                    ]
                },
                src: ['./examples/components/basic/controller/basic.controller.js'],
                dest: './webroot/modules/components/basic/basic.js'
            },
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
            }
        },
        copy: {
            lego: {
                files: [
                    {
                        src: "./examples/components/basic/css/basic.css",
                        dest: "./webroot/css/basic.css"
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
    taskList: ["vueify:lego", "tmod:lego", "browserify:lego", "browserify:legolib", "sass:lego", "copy:lego", "copy:iconfont", "clean:lego"]
}