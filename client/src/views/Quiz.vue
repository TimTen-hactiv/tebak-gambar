<template>
  <div>
    <h1>This is Quiz page</h1>
    <div class="container">
      <Questions
        v-for="question in Questions.length"
          :key="question.id"
          :Questions="Questions"
      />
    </div>
  </div>
</template>

<script>
import Questions from '../components/Questions'

export default {
  name: 'Quiz',
  components: {
    Questions
  },
  data () {
    return {
      Questions: []
    }
  },
  sockets: {
    question (payload) {
      this.Questions = payload
      console.log(payload)
    }
  }
}
</script>
