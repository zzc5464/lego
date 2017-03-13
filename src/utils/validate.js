'use strict';

function Validate (value, rules, label) {
    var ret, messages = [], 
        validators = rules || [];

    validators.forEach(function (validator) {
        ret = validator.validate(value);
        ret && messages.push(ret.replace('{label}', label));
    });

    return messages;
}

module.exports = Validate;