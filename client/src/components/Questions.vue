<template>
  <div class="hello">
    <button class="btn-primary" @click="start">Start Game</button>
    <div class="wrapper">
      <div class="row-2 quiz">
        <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight">{{ nickname }}</div>
          <div class="p-2 bd-highlight">{{ countDown }}</div>
          <div class="p-2 bd-highlight">SCORE: </div>
        </div>
        <h2 class="mt-3 mb-3">Guess the animal in the picture!</h2>
          <div class="container" v-if="status === true">
            <img :src="this.fetchQuestion.questions[this.index].croped_image" width="400px" ><br><br>
            <form @keypress.enter.prevent="submitAnswer">
              <div class="form-floating mb-3">
                <input v-model="user_answer" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Type your answer</label>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  data () {
    return {
      status: false,
      index: 0,
      image: '',
      jokes: '',
      user_answer: '',
      countDown: 5,
      timer: null
    }
  },
  methods: {
    start () {
      this.status = true
      this.game()
    },
    game () {
      if (this.index < 10) {
        if (this.countDown > 0) {
          this.timer = setTimeout(() => {
            this.countDown -= 1
            if (this.countDown === 0) {
              this.index += 1
              this.status = false
              this.countDown = 5
              this.start()
            } else {
              this.game()
            }
          }, 1000)
        }
      } else {
        this.$emit('endGame')
      }
    }
  },
  computed: {
    nickname () {
      return this.$store.state.players
    },
    fetchQuestion () {
      return this.$store.state.fetchQuestion
    }
  }
}
</script>
<style scoped>
.wrapper {
  max-width: 600px;
  margin: 25px auto 50px;
  padding: 30px;
  border-radius: 20px;
  background: #c0e2df;
  position: relative;
  min-height: 400px;
  overflow: hidden
}

:-moz-placeholder {
  text-align: center;
}
</style>
