<template>
  <div class="quiz">
    <h1>This is Quiz page</h1>
    {{ nickname }}
    <div>
      <h3> ini bagian pertanyaan </h3>
      <Questions/>
    </div>
    <div>
      <h3> ini bagian result</h3>
      <Result/>
    </div>
  </div>
</template>
<script>
import Questions from '../components/Questions'
import Result from '../components/Result'

export default {
  name: 'Quiz',
  components: {
    Questions,
    Result
  },
  computed: {
    nickname () {
      return this.$store.state.players
    }
  }
}
</script>
<style>
</style>
