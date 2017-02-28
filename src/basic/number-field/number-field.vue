<template>
    <input class="_input" :class="classObj" type="number" name="" :placeholder="placeholder" :max="6" :required="required" >
</template>

<script>
    module.exports = {
        props: ['size', 'placeholder', 'required'],
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