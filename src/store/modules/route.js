const state = {
  routeDirection: 'transitionLeft',
}

const getters = {
  getRouteName: (state) => {
    return state.routeDirection
  }
}

const actions = {
  setRouteName: ({state, commit}, {routeDirection}) => {
    commit('SET_ROUTE_NAME', {routeDirection})
  }
}

const mutations = {
  SET_ROUTE_NAME: (state, {routeDirection}) => {
    state.routeDirection = routeDirection
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
