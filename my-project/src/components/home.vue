<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <el-row>
        <el-col :span="19">
          <div>
          <div>
            <h3>我的开源项目</h3>
          </div>
          <div>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/vue-demo">本项目的demo</a></el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/casdemo">Apereo CAS 单点登陆项目的部署</a>
              </el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/spring-security-demo">spring-security与springboot集成好的demo</a>
              </el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/reptile_py">python3.6 爬虫入门用例</a>
              </el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/fastdfsdemo">分布式文件系统的配置及与 java
                web集成</a></el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/boot_easyUi_demo1.3">使用easyui+springboot搭建的后台</a>
              </el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain><a href="https://github.com/jonedaniel/precloud">spring cloud使用demo</a>
              </el-button>
            </el-row>
          </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div align="center">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="有穷性 Finiteness" name="1">
                <div>算法的有穷性是指算法必须能在执行有限个步骤之后终止。</div>
              </el-collapse-item>
              <el-collapse-item title="确切性 Definiteness" name="2">
                <div>算法的每一步骤必须有确切的定义；</div>
              </el-collapse-item>
              <el-collapse-item title="输入项 input" name="3">
                <div>一个算法有0个或多个输入，以刻画运算对象的初始情况，所谓0个输入是指算法本身定出了初始条件；</div>
              </el-collapse-item>
              <el-collapse-item title="输出项 output" name="4">
                <div>一个算法有一个或多个输出，以反映对输入数据加工后的结果。没有输出的算法是毫无意义的；</div>
              </el-collapse-item>
              <el-collapse-item title="可行性 Effectiveness" name="5">
                <div>算法中执行的任何计算步骤都是可以被分解为基本的可执行的操作步，即每个计算步都可以在有限时间内完成（也称之为有效性）</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        activeName: '0'
      }
    },
    components: {}
  }
</script>

<style>
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }


</style>
