<template>
  <div class="customer">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4" offset="4">
          <login />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import login from '@/components/login'

export default {
  data () {
    return {
      inputEmail: '',
      inputPass: ''
    }
  },
  components: {
    login
  }

}
</script>
