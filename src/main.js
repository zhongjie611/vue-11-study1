import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
 

$(function(){
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function () {
      return '#' + 'D97634'
    })
})

class Persson {
    static info = {name:'zl',age:18}
}
console.log(Persson.info)

import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)


import app from './app.vue'
import router from './router.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})