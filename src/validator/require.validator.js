'use strict';

function RequireValidator () {

}

RequireValidator.prototype = {
    validate: function (value) {
        return value ? '' : '请输入{label}';
    }
}

module.exports = new RequireValidator();