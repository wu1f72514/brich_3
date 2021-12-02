import store from './store'
import './style.css'
import './components/todoApp'
import './components/userInfo'

const App = new Vue({
  store: store,
  el: '#app'
})