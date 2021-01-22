<template>
  <div id="app" class="container">
    <div id="home" class="row">
      <Home v-if="start == false" @start="isStart" />
    </div>
    <div id="quiz" class="row">
      <Quiz v-if="start == true"/>
    </div>
  </div>
</template>
<script>
import Quiz from './views/Quiz'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Quiz,
    Home
  },
  data () {
    return {
      start: false
    }
  },
  methods: {
    isStart (payload) {
      this.start = payload
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}

#home {
  margin-top: 10vh;
}

#quiz {
  margin-top: 2vh;
}
</style>
