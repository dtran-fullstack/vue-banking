<template>
  <div class="agent">
    <!-- Display All Customers -->
    <b-table striped hover :items="getCustomers">
      <template v-slot:cell(accountNumber)="data">
        <b-button variant="primary" @click="selectAccount(data.value)">
          {{data.value}}
        </b-button>
      </template>
    </b-table>

    <!-- Add New Account -->
    <b-button variant="primary"
      @click="toggleNewForm"
    >
      Open New Account
    </b-button>
    <b-container v-if="openForm" id="newForm">
      <b-row>
        <b-col sm="6" offset="3">
          <NewAccount />
        </b-col>
      </b-row>
    </b-container>

    <!-- Open One Account -->
    <b-jumbotron :class="selectedAccount ? 'selectedCustomer' : 'noSelectedCustomer'">
    <OneCustomer
      :selectedAccount = "selectedAccount"
      v-on:clear-session="clearSession"
    />
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OneCustomer from '@/components/OneCustomer'
import NewAccount from '@/components/NewAccount'

export default {
  data () {
    return {
      selectedAccount: '',
      openForm: false
    }
  },
  components: {
    OneCustomer,
    NewAccount
  },
  computed: {
    ...mapGetters([
      'getCustomers'
    ])
  },
  methods: {
    selectAccount (accountNumber) {
      this.selectedAccount = accountNumber
      // console.log(typeof (this.selectedAccount))
    },
    clearSession () {
      this.selectedAccount = ''
    },
    toggleNewForm () {
      this.openForm = !this.openForm
    }
  }
}
</script>
<style scoped>
  .noSelectedCustomer{
    visibility: hidden;
  }
  .selectedCustomer{
    margin-top: 50px;
  }
  #newForm{
    margin-top: 20px;
  }
</style>
