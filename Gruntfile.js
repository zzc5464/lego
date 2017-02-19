'use strict';
module.exports = function(grunt) {
    //按需加载npm tasks模块,加速loading
    require('jit-grunt')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    console.log("..grunt运行中");
    // Load grunt tasks automatically
    //require('load-grunt-tasks')(grunt);

    /* 当前上下文路径 */
    var basedir = process.cwd();
    /* 加载模块配置文件 */
    var getTaskConfig = require(basedir + "/task/taskconfig.js");
    /* 从输入参数中获取要执行的任务名称(模块名称) */
    var taskName = process.argv[2];
    /* 根据模块名称加载模块配置 */
    var tasks = require(basedir + "/" + getTaskConfig(taskName));
    setTasks(tasks);
    // Define the configuration for all the tasks
    tasks.taskList.concat(["concat", "uglify", "clean"]);
    /* 初始化配置 */
    grunt.initConfig(tasks.config);
    /* 初始化任务 */
    grunt.registerTask(taskName, tasks.taskList);
};

function setTasks(tasks) {
    var cfg = getCommonConfig();

    //通用的模块后处理,如:删除views下面的js文件
    if (tasks.cleanTmod) { //如果指定了cleanTmod属性,则自动移除tmod生成的js文件
        var commonProcess = {
            clean: {
                cleanTmod: {
                    src: getTModDest(tasks.config)
                }
            }
        };
        gruntExtend(cfg, commonProcess);
        tasks.taskList.push('clean:cleanTmod');
    }

    //如果参数中没有"-r"或"-release",则不执行uglify和cssmin,用于加速调试
    var isRelease;
    for (var i = 0; i < process.argv.length; i++) {
        if (process.argv[i] == '-r' || process.argv[i] == "-release") {
            isRelease = true;
        }
    }
    if (!isRelease) {
        tasks.taskList = tasks.taskList.filter(function(name) {
            name = name.substr(0, 6);
            return name != "uglify" && name != "cssmin" && name != 'jsdoc:';
        })
    }

    gruntExtend(tasks.config, cfg);
}

function getTModDest(config) {
    var keys = Object.keys(config.tmod);
    return keys.map(function(i) {
        //if(typeof i=="stirng")
        return config.tmod[i].src.replace(/\/\*\.\w+$/, "/*.js");
    })
}

/*
 * 各个模块都可能用到的配置
 */
function getCommonConfig() {
    return {
        sass: {
            options: {
                /* sass0.9版本不再支持 banner : "<%= banner %>", */
                style: "expanded",
                unixNewlines: true,
                sourcemap: 'inline'
            },
            dist: {
                files: {
                    "gum.ui.sass/dist/css/gum.css": "gum.ui.sass/gum.scss"
                }
            }
        },
        jshint: {
            all: ['client/**/*.js', 'wechat/**/*.js'],
            options: {
                browser: true,
                devel: true
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "gum.ui.sass",
                    src: ["gum.css", "!*.min.css"],
                    dest: "gum.ui.sass/dist/css",
                    ext: ".min.css"
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "wechat/modules/insurance/css/",
                    src: ["*.css", "!*.min.css"],
                    dest: "wechat/modules/insurance/css/",
                    ext: ".min.css"
                }, {
                    expand: true,
                    cwd: "wechat/modules/policy/css",
                    src: ["*.css", "!*.min.css"],
                    dest: "wechat/modules/policy/css",
                    ext: ".min.css"
                }]
            }
        },

        copy: {
            gum_css: {
                files: [{
                    '../insurance_release_src/gum/css/gum.css': './gum.ui.sass/dist/css/gum.css',
                }]
            },
            gum_assets_css: {
                files: [{
                    './client/assets/css/gum.css': './gum.ui.sass/dist/css/gum.css',
                }]
            },
            gum_src_assets_css: {
                files: [{
                    '../insurance_release_src/assets/css/gum.css': './gum.ui.sass/dist/css/gum.css',
                }]
            },
            iconfont: {
                files: [{
                    expand: true,
                    flatten: true,
                    filter: 'isFile',
                    src: ['./gum.ui.sass/fonts/iconfont/*.*'],
                    dest: '../insurance_release_src/gum/css/iconfront'
                }]
            },
            iconfont_assets: {
                files: [{
                    expand: true,
                    flatten: true,
                    filter: 'isFile',
                    src: ['./gum.ui.sass/fonts/iconfont/*.*'],
                    dest: './client/assets/css/iconfront'
                }]
            }
        }
    }
}

function gruntExtend(target, obj) {
    Object.keys(obj).forEach(function(k) {
        if (target[k] && typeof target[k] == 'object')
            gruntExtend(target[k], obj[k]);
        else
            target[k] = obj[k];
    })
}
module.exports.extend = gruntExtend;
