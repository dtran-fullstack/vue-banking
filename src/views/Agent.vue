<template>
  <div class="agent">
    <b-table striped hover :items="customers">
      <template v-slot:cell(accountNumber)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a :href="`/customer/${data.value}`">{{
          data.value
        }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'customers'
    ])
  }
}
</script>
