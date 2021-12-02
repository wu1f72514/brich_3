import { createActionAndMutation } from '../utils'

const initialState = {
  appName: 'TodoList',
  userName: '',
}

const updateAppDataValue = (state, payload) => {
  state[payload.key] = payload.value
}

const { mutations, actions } = createActionAndMutation({ updateAppDataValue })

const getters = {
  getAppName: state => state.appName,
  getUserName: state => state.userName
}

export default {
  state: initialState,
  mutations,
  actions,
  getters
}