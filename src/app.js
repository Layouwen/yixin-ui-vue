import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button', Button) // 重命名
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
})