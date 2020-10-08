<template>
    <div>
        <h1>{{ customer.firstName }} {{ customer.lastName }}</h1>
        <p>Balance: {{ customer.accountBalance }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      customer: {}
    }
  },
  computed: {
    ...mapState([
      'customers'
    ])
  },
  mounted () {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].accountNumber === Number(this.$route.params.id)) {
        this.customer = this.customers[i]
        i = this.customers.length
      }
    }
  }
}
</script>
