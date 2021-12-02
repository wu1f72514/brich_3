import './inputAddTodo'
import './todoList'

Vue.component('todo-app', {
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  },
  template: '#todo-app'
})