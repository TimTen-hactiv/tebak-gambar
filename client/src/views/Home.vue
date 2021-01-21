<template>
  <div class="wrapper">
    <div class="row">
      <h1> Guess It! </h1>
    </div>
    <br>
    <br>
    <div class="row">
      <h6>Before enter the game, input your nick name</h6>
      <div id="nickname" class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input
          v-model="nickname"
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
    <br>
      <button @click.prevent="start" id="start-button" type="button" class="btn btn-success">Start</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    start () {
      this.$emit('start', true)
      this.$store.commit('insertNickname', this.nickname)
    }
  }
}
</script>
<style scoped>
.wrapper {
  max-width: 600px;
  margin: 80px auto 50px;
  padding: 30px;
  border-radius: 20px;
  background: #c0e2df;
  position: relative;
  min-height: 400px;
  overflow: hidden
}

#start-button {
  width: 40%;
}

#nickname {
  width: 43%;
  margin: auto;
}
</style>
