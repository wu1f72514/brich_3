Vue.component('todo-list', {
  props: ['todos'],
  methods: {
    toggleTodo: function (id) {
      this.$store.dispatch('toggleTodo', id)
    },
    deleteTodo: function (id) {
      this.$store.dispatch('deleteTodo', id)
    }
  },
  template: '#todo-list'
})