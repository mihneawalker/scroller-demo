import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)  
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
