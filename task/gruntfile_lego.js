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
                        'fcontroller'
                    ]
                },
                src: ['./examples/components/basic/controller/basic.controller.js'],
                dest: './webroot/modules/components/basic/basic.js'
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
    taskList: ["vueify:lego", "tmod:lego", "browserify:lego", "copy:lego"]
}