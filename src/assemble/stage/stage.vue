<template>
    <div class='_stage'>
        <div class='_stageheader'>{{ number }}</div>
        <span class='_text'><slot></slot></span>
    </div>
</template>

<script>
    module.exports = {
        props : [ 'number' ],
        data  : function() { return {}; }
    }
</script>