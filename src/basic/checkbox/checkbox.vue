<template>
    <span v-on:mytap = "tapped" :checked="isChecked" class="_checkbox" :class="{_checkbox_active: isChecked}">
          <b-icon v-show="isChecked" name="check"color="white" size="16"></b-icon>
    </span>
</template>

<script>
    module.exports = {
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            callfn: {
                type: Function,
                default: function () {}
            }
        },
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tapped: function() {
                var _this = this;
                _this.isChecked = !_this.isChecked;
                _this.callfn(_this.isChecked);
            }
        }
    }
</script>