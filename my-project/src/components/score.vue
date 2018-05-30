<template xmlns:el="http://www.w3.org/1999/html">
  <div class="block">
    <span class="demonstration">请给我的网站打分</span>
    <el-rate
      v-model="value"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
    <el-button type="primary" plain v-on:click="open">确认</el-button>
  </div>
</template>

<script>
    export default {
        name: "score",
        data(){
          return {
           value: 1
          }
        },
      methods: {
        open() {
          this.$prompt('请输入您的qq，方便咨询您评分的理由', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '你的qq是: ' + value
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }
      }
    }
</script>

