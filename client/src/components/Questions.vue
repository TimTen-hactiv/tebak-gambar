<template>
  <div class="hello">
    <button class="btn-primary" @click="start">Start Game</button>
    <div class="wrapper">
      <div class="row-2 quiz">
        <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight">{{ nickname }}</div>
          <div class="p-2 bd-highlight">{{ countDown }}</div>
          <div class="p-2 bd-highlight">SCORE: {{score}}</div>
        </div>
        <h2 class="mt-3 mb-3">Guess the animal in the picture!</h2>
          <div class="container" v-if="status === true">
            <img v-if="this.answer === false" :src="this.fetchQuestion.questions[this.index].croped_image" width="400px" ><br><br>
            <img v-if="this.answer === true" :src="this.fetchQuestion.questions[this.index].real_image" width="400px" ><br><br>
            <h4 v-if="this.answer === true"> {{fetchQuestion.questions[this.index].jokes}} </h4>
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
      user_answer: '',
      countDown: 8,
      timer: null,
      answer: false,
      score: 0
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
            if (this.countDown === 3) {
              this.checkAnswers(this.user_answer)
              this.answer = true
              this.game()
            } else if (this.countDown === 0) {
              this.index += 1
              this.status = false
              this.countDown = 8
              this.answer = false
              this.start()
            } else {
              this.game()
            }
          }, 1000)
        }
      } else {
        const payload = {
          nickname: this.nickname,
          score: this.score
        }
        this.$socket.emit('playersResult', payload)
        this.$emit('endGame')
      }
    },
    checkAnswers (payload) {
      if (payload === this.fetchQuestion.questions[this.index].answer) {
        this.score += 10
      }
      this.user_answer = ''
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
