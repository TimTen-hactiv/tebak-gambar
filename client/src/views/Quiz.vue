<template>
  <div class="container">
    <div v-if="gameOver === false" class="row">
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
      gameOver: false
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
