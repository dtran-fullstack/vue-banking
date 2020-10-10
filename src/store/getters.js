// import state from './state'

export default {
  getCustomers: (state) => {
    return state.customers
  },
  getCustomer: (state) => (accountNumber) => {
    return state.customers.find(customer => customer.accountNumber === accountNumber)
  },
  loginCustomer: (state) => (formData) => {
    return state.customers.find(customer => customer.email === formData.email)
  }
}
