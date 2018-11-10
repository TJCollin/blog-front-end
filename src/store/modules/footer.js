const state = {
  footerFixed: false,
}

const getters = {
  getFooterFixed: (state) => {
    return state.footerFixed
  }
}

const actions = {
  setFooterFixed: ({state, commit}, {footerFixed}) => {
    commit('SET_FOOTER_FIXED', {footerFixed})
  }
}

const mutations = {
  SET_FOOTER_FIXED: (state, {footerFixed}) => {
    state.footerFixed = footerFixed
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
