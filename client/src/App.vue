<template>
  <div id="app">
    <div class="row">
      <Home v-if="start == false" @start="isStart" />
    </div>
    <div class="row">
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
}

</style>
