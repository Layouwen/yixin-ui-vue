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
import Tabs from '../src/tabs'
import TabsHead from './tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-pane', TabsPane)

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
        showToast(position) {
            this.$toast(`我是弹框你知道吗？`, {
                position: 'bottom',
                enableHtml: false,
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log(`已确认`)
                    }
                },
                autoClose: 5,
            })
        }
    },
})