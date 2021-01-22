<template>
  <div class="hello">
    <h1>Kumpulan pertanyaan-pertanyaan</h1>
    <div class="wrapper">
      <div class="row-2 quiz">
        <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight">{{ nickname }}</div>
          <div class="p-2 bd-highlight">Countdown? wkw</div>
          <div class="p-2 bd-highlight">SCORE: </div>
        </div>
        <h2 class="mt-3 mb-3">Guess the animal in the picture!</h2>
        <img :src="image" width="400px"><br><br>
          <div class="container">
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
      image: '',
      jokes: '',
      user_answer: ''
    }
  },
  methods: {},
  computed: {
    nickname () {
      return this.$store.state.players
    }
  },
  sockets: {
    questions (payload) {
      console.log(payload)
      this.image = payload.data[0].real_image
      this.jokes = payload.data[0].jokes
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
