import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入阿里图标库
import '@/assets/inconfont/iconfont.css'
import '@/assets/inconfont/iconfont.js'
import "@/assets/css/reset.css"

Vue.config.productionTip = false
import 'github-markdown-css/github-markdown.css'
//导入代码高亮文件
import hljs from 'highlight.js' 
//导入代码高亮样式
import 'highlight.js/styles/xcode.css' 
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
