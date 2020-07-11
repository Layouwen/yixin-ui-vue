import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button) // 重命名

new Vue({
    el: '#app',
})