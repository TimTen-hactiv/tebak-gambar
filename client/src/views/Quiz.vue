<template>
  <div class="quiz">
    <h1>This is Quiz page</h1>
    {{ nickname }}
  </div>
</template>
<script>
export default {
  name: 'Quiz',
  computed: {
    nickname () {
      return this.$store.state.players
    }
  }
}
</script>
<style>
</style>
