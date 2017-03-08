/*
 * 名称或别名可作为grunt命令的参数，例如：
 * grunt home
 */

module.exports = function(name) {
    /* 任务别名 */
    var alias = {
        fam: 'familyrisk'
    };
    if (alias[name]) {
        name = alias[name];
    }

    console.log('task/gruntfile_' + name + '.js');
    /* 默认直接使用名称查找任务文件 */
    return 'task/gruntfile_' + name + '.js';
}
