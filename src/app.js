import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from '../src/layout'
import Header from '../src/header'
import Footer from '../src/footer'
import Sider from '../src/sider'
import Content from '../src/content'
import Toast from '../src/toast'
import './svg'
import plugin from "../src/plugin";

Vue.component('g-button', Button) // 重命名
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)

Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    },
    methods: {
        inputChange(e){
            console.log(e.target.value)
        },
        showToast(){
            this.$toast('你好')
        }
    },
})