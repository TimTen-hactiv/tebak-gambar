<template>
  <div class="container">
    <div v-if="gameOver === false" class="row">
      <h3> ini bagian pertanyaan </h3>
      <Questions />
    </div>
    <div v-else class="row">
      <Result/>
    </div>
  </div>
</template>
<script>
import Questions from '../components/Questions'
import Result from '../components/Result'

export default {
  name: 'Quiz',
  data () {
    return {
      gameOver: true
    }
  },
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
