<template>
  <div id="app">
    <Home/>
    <Quiz/>
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
