<template>
  <div>
    <b-form
      @submit.prevent="handleSubmit"
    >
      <b-form-group
        label="Email address:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="formData.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Your Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="formData.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
      >
        Login
      </b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
      loginAccount: {}
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('handle-login', this.formData)
    }
  }
}
</script>
<style lang="scss">
  .hidden {
    visibility: hidden;
  }
</style>
