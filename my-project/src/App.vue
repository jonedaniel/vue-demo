<template>
  <div class="outer-body">
    <el-container>
      <el-header>
        <div>
          <div style="display: inline-block;position: relative;left: 20%;right: 50%;width: 150px;">
            <h1 style="margin-top: 0px;">zmh的主页</h1>
          </div>
          <div v-for="item in links" style="display: inline-block;float: right;z-index: 2147483647">
            <el-button type="primary" plain><a @click="$goRoute(item.route)">{{item.text}}</a></el-button>
          </div>
        </div>
      </el-header>
      <el-main class="main-body">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div align="center">
          <a href="https://github.com/jonedaniel/precloud">我的github</a><br>
          email:623299342@qq.com
        </div>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        links: [
          {
            text: '打分',
            route: '/score'
          },
          {
            text: '水蜜桃',
            route: '/page02'
          },
          {
            text: '页面1',
            route: '/page01'
          },
          {
            text: '主页',
              route: '/home'
          }
        ]
      }
    }
  }
</script>

<style>
  .outer-body{
    width: 1000px;
    height: 600px;
    background-image: url("assets/image/1.jpg");
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    position: relative;
    left: 15%;
  }
  .main-body{
    width:1000px;
    height: 500px;
  }
</style>
