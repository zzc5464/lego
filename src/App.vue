<template>
  <div id="app">
    <!-- 主页面的内容放置在 p-main 标签里 -->
    <p-main bgcolor='offwhite'>
        <stub></stub>
        <a-table bgcolor='white'>
            <text-row label='姓名'>李乐乐</text-row>
            <text-row label='姓名'>李乐乐</text-row>
            <text-row label='公司名称'>平安养老保险股份有限公司平安养老保险股份有限公司平安养老保险股份有限公司</text-row>
        </a-table>
    </p-main>
  </div>
</template>

<script>
import { pMain } from './page/main';
import { stub } from './assemble/stub';
import { aTable} from './assemble/table';
import { textRow } from './assemble/text-row';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
