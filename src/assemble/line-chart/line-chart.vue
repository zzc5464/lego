<template> 
    <article class="svg-line" id="svg-line" v-html="svgHtml"></article>
</template>

<script>
    var lineChart = require('../../utils/line.chart');

    // lineChart(period, is7Rate, data)
    module.exports = {
        props: {
            period: {
                type: String,
                default: '0'
            },
            rate: {
                type: String,
                default: '0'
            },
            list: {
                type: Array,
                default: function () { return {}; }
            }
        },

        data: function () {
            var period = this.period,
                rate = parseInt(this.rate),
                list = this.list;
            return {
                svgHtml: lineChart(period, rate, list)
            }
        }
    }
</script>

<style scoped>
    .svg-line{
        height: 12em;
        background: #fff;
        text-align: center;
    }
</style>