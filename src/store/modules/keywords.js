const state = {
  keywords: '',
}

const getters = {
  getKeywords: (state) => {
    return state.keywords
  }
}

const actions = {
  setKeywords: ({state, commit}, {keywords}) => {
    commit('SET_KEYWORDS', {keywords})
  }
}

const mutations = {
  SET_KEYWORDS: (state, {keywords}) => {
    state.keywords = keywords
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
