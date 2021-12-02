Vue.component('input-add-todo', {
  data: () => ({
    task: '',
    newId: Date.now()
  }),
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', {
        task: this.task,
        newId: this.newId
      })
      this.task = ''
    }
  },
  template: '#input-add-todo'
})