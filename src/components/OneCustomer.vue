<template>
    <div>
        <b-button
          variant="danger"
          class="logOut"
          @click="$emit('clear-session')"
        >
          Clear Session
        </b-button>
        <h1>{{ customer.firstName }} {{ customer.lastName }}</h1>
        <p>Balance: {{ customer.accountBalance }}</p>
        <b-form @submit.prevent="handleSubmit" inline>
          <b-form-group id="input-group-3" label="Activity:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.activity"
              :options="activities"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-2" label="Amount:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.amount"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-button
            type="submit"
            variant="primary"
          >
            Submit
          </b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    selectedAccount: String
  },
  data () {
    return {
      customer: {},
      form: {
        activity: '',
        amount: 0
      },
      activities: [{ text: 'Select One', value: null }, 'Deposit', 'Withdraw']
    }
  },
  watch: {
    selectedAccount: {
      immediate: true,
      handler () {
        console.log(this.selectedAccount)
        if (this.selectedAccount) {
          this.customer = this.getCustomer(this.selectedAccount)
        } else {
          this.customer = {}
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCustomer'
    ])
  },
  methods: {
    handleSubmit () {
      if (this.form.activity === 'Deposit') {
        this.customer.accountBalance += Number(this.form.amount)
      } else {
        this.customer.accountBalance -= Number(this.form.amount)
      }
      this.form = {
        activity: '',
        amount: 0
      }
    }
  }
}
</script>
<style scoped>
  .form-inline{
    justify-content: center;
  }
  .form-inline *{
    margin: 0 5px;
  }
  .logOut{
    margin-bottom: 20px;
  }
</style>
