<template>
    <div class='_main_wrp' :class='classObj'>
        <main class='_main'>
            <slot></slot>
        </main>
    </div>
</template>

<script>
    module.exports = {
        props: [ 
            'bgcolor'
        ],

        data: function () {
            var list = [];

            this.bgcolor && list.push(
                '_bgcolor_' + this.bgcolor
            );

            return {
                classObj: list
            }
        }
    }
</script>