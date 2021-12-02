Vue.component('user-info', {
  props: ['username'],
  template: '#user-info'
})

Vue.component('user-form', {
  computed: {
    // todos: function () {
    //   return this.$store.getters.getTodos
    // },
    userName: {
      get () {
        return this.$store.state.appData.userName
      },
      set (value) {
        this.$store.dispatch('updateAppDataValue', { key: 'userName', value })
      }
    }
  },
  template: '#user-form'
})