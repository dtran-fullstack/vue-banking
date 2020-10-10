<template>
  <div>
    <h1>New Account</h1>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="First Name:" label-for="fname">
        <b-form-input
          id="fname"
          v-model="formData.fName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Last Name:" label-for="lname">
        <b-form-input
          id="lname"
          v-model="formData.lName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="formData.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Phone Number:" label-for="phone">
        <b-form-input
          id="phone"
          v-model="formData.phone"
          required
          placeholder="xxx-xxx-xxxx"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Account Type:" label-for="account-type">
        <b-form-select
          id="account-type"
          v-model="formData.type"
          :options="['Individual', 'Business']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Your Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="formData.password"
          required
          type="password"
          placeholder="Enter Password"
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Password and Confirm Password don't match
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Confirm Your Password:" label-for="confirm-password">
        <b-form-input
          id="confirm-pass"
          v-model="formData.confirmPass"
          required
          type="password"
          placeholder="Confirm Password"
          :state="validation"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      formData: {
        fName: '',
        lName: '',
        email: '',
        phone: '',
        type: '',
        password: '',
        confirmPass: ''
      }
      // error: ''
    }
  },
  computed: {
    validation () {
      return this.formData.password === this.formData.confirmPass
    }
  },
  methods: {
    ...mapActions(['openNewAccount']),
    handleSubmit () {
      const newId = uuid.v4()
      // if (this.formData.password === this.formData.confirmPass){
      const payload = {
        account: {
          accountNumber: newId,
          pass: this.formData.password,
          firstName: this.formData.fName,
          lastName: this.formData.lName,
          email: this.formData.email,
          phone: this.formData.phone,
          type: this.formData.type,
          accountBalance: 0
        }
      }
      this.openNewAccount(payload)

      // reset form
      this.formData = {
        fName: '',
        lName: '',
        email: '',
        phone: '',
        type: '',
        password: '',
        confirmPass: ''
      }
      // } else {
      //   this.error = "Password and Confirm Password don't match"
      // }
    }
  }
}
</script>
