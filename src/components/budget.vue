<template>
  <div class="budget">
    budget
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'budget',
  computed: {
    count () {
      return this.$store.state.article
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log(this.$store.state.article)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
