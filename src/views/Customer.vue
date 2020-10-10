<template>
  <div class="customer">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Login
            v-on:handle-login = "handleLogin"
            v-if="!success"
          />
          <br>
          <b-alert v-model="showWarning" variant="danger" dismissible>Incorrect Email or Password</b-alert>
        </b-col>
      </b-row>
    </b-container>
    <b-jumbotron v-if="success">
      <OneCustomer
        :selectedAccount = "selectedAccount"
        v-on:clear-session="clearSession"
      />
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/Login'
import OneCustomer from '@/components/OneCustomer'

export default {
  data () {
    return {
      selectedAccount: '',
      success: false,
      showWarning: false
    }
  },
  components: {
    Login,
    OneCustomer
  },
  computed: {
    ...mapGetters([
      'loginCustomer'
    ])
  },
  methods: {
    handleLogin (formData) {
      this.error = ''
      if (this.loginCustomer(formData)) {
        this.selectedAccount = this.loginCustomer(formData).accountNumber
        this.success = !this.success
      } else {
        this.showWarning = true
      }
    },
    clearSession () {
      this.selectedAccount = ''
      this.success = !this.success
    }
  }
}
</script>
