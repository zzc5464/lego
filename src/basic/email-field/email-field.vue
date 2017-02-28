<template>
    <input class="_input" :class="classObj" type="email" name="" :placeholder="placeholder" maxlength="max" :required="required" >
</template>

<script>
    module.exports = {
        props: ['size', 'max', 'placeholder', 'required'],
        data: function() {
            var obj = {}, list = [];
            this.size && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj
            }
        }
    }
</script>