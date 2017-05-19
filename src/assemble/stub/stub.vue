<template>
    <s-single-cell height='0.368421' :border='border' bgcolor='transparent'></s-single-cell>
</template>
<script>
    module.exports = {
        props: {
            border: {
                type: String,
                default: 'true'
            }
        }, 
        data: function () {
            return {
               
            };
        }
    }
</script>