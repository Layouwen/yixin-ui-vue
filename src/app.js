import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import './svg'

Vue.component('g-button', Button) // 重命名
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})