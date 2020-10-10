export default {
  openNewAccount: ({ commit }, payload) => {
    commit('appendNewAccount', payload)
  }
}
