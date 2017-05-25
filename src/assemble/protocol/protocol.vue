<template>
    <div class='_protocol'>
        <div>
            <b-checkbox :checked='isChecked'></b-checkbox>
        </div>
        <div>
            <span><slot></slot></span>
        </div>
    </div>
</template>

<script>


    module.exports = {
        props: [ 'checked'],
        data: function() {

            return {
                isChecked: this.checked,
                show: true
            };
        }
    }
</script>