# my-project

> A Vue.js project

## 引入element-ui
1. 在@/build/webpack.base.conf.js 下添加
```
{
  test: /\\\\\\\\.css$/,
  loader: "style!css"
},
{
  test: /\\\\\\\\.(eot|woff|woff2|ttf)([\\\\\\\\?]?.*)$/,
  loader: "file"
}

```
2. 在App.vue 的js文件中引入 ElementUI 与 index.css文件
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
```

3. 通过二级路由使Home.vue成为父组件
