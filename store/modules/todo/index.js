import { createActionAndMutation } from '../utils'

let initailState = [
  {
    id: 0,
    task: "Buy food at the supermarket.",
    completed: false
  },
  {
    id: 1,
    task: "Organize the living room.",
    completed: true
  },
  {
    id: 2,
    task: "Read every class and tutorial on Sabe.io.",
    completed: false
  }
]

const addTodo = (state, payload) => {
  var newTask = {
    id: payload.newId,
    task: payload.task,
    completed: false
  }
  state.unshift(newTask)
}

const toggleTodo = (state, payload) => {
  var item = state.find(todo => todo.id === payload)
  item.completed = !item.completed
}

const deleteTodo = (state, payload) => {
  var index = state.findIndex(todo => todo.id === payload)
  state.splice(index, 1)
}

const { mutations, actions } = createActionAndMutation({
  addTodo,
  toggleTodo,
  deleteTodo
})

const getters = {
  getTodos: state => state
}

export default {
  state: initailState,
  mutations,
  actions,
  getters
}