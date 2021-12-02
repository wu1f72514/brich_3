const parseToUppercase = (str) => str.replace(/([A-Z])/g, '_$1').toUpperCase()

const createMutations = (funcs) => {
  return Object.keys(funcs).reduce((result, actionName) => {
    const actionType = parseToUppercase(actionName)
    return { ...result, [actionType]: funcs[actionName] }
  }, {})
}

const createActions = (mutations) => {
  return Object.keys(mutations).reduce((result, actionType) => {
    const name = mutations[actionType].name
    const action = (context, payload) => context.commit(actionType, payload)
    return { ...result, [name]: action }
  }, {})
}

const createActionAndMutation = (funcs) => {
  const mutations = createMutations(funcs)
  return {
    mutations,
    actions: createActions(mutations)
  }
}

export {
  createActionAndMutation
}