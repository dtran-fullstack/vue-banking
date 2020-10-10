export default {
  appendNewAccount: (state, { account }) => {
    state.customers.push(account)
  }
}
