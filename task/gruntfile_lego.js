'use strict';
module.exports = {
    cleanTmod: true,
    config: {
        tmod: {
            my_assets: {
                src: './client/modules/myAssets/myAssets/views/*.html',
                dest: './client/modules/',
                options: {
                    "base": './client/modules/',
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
                    "alias": 'template'
                }
            }
        },
        browserify: {
            my_assets: {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'common'
                    ]
                },
                src: ['./client/modules/myAssets/myAssets/controller/my.assets.controller.js'],
                dest: '../insurance_release_src/modules/myAssets/myAssets/myAssets.js'
            }
        },
        uglify: {
            my_assets: {
                files: {
                    "../insurance_release/modules/myAssets/myAssets/myAssets.js": ["../insurance_release_src/modules/myAssets/myAssets/myAssets.js"]
                }
            }
        },
        cssmin: {
            my_assets: {
                files: {
                    "../insurance_release/assets/css/my.assets.css": "../insurance_release_src/assets/css/my.assets.css"
                }
            }
        },
        copy: {
            my_assets: {
                files: [
                    {
                        src: "./client/modules/myAssets/myAssets/css/my.assets.css",
                        dest: "../insurance_release_src/assets/css/my.assets.css"
                    }
                ]
            }
        }
    },
    taskList: ["tmod:my_assets", "browserify:my_assets",
        "uglify:my_assets", "copy:my_assets", "cssmin:my_assets"]
}


