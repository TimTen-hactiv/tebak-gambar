<template>
  <div class="container">
    <h1>RESULT</h1>
    <div class="juara row">
      <div id="juara-pertama" class="col-6">
        <h1>1st Place</h1>
        <img src="https://dlvkyia8i4zmz.cloudfront.net/q1d9Ez8SpWQJVKHxC7wA_gold.gif" alt="this slowpoke moves"  width=250 />
        <h3>{{ firstName }}</h3>
        <h4>{{ firstScore }}</h4>
      </div>
      <div id="juara-kedua" class="col-6">
        <h1>2nd Place</h1>
        <img src="https://pa1.narvii.com/7557/bc4ee00044eacbf7945ed39b34199e8877b4b3c3r1-640-640_hq.gif" alt="this slowpoke moves"  width=250/>
        <h3>Monyta</h3>
        <h4>Score : 90</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      firstScore: ''
    }
  },
  name: 'Result',
  sockets: {
    winnerResult (payload) {
      this.firstName = payload[0].nickname[0]
      this.firstScore = payload[0].score
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
#juara-pertama {
  border-style: double;
  border-color: whitesmoke;
  background:midnightblue;
  border-radius: 25px;
  color: white;
  width: 25%;
  height: 60vh;
  margin: auto;
  padding: auto;
}

#juara-kedua {
  border-style: double;
  border-color: whitesmoke;
  background:midnightblue;
  border-radius: 25px;
  color: white;
  width: 25%;
  height: 60vh;
  margin: auto;
  padding: auto;
}
h1 {
  margin-bottom: 5vh;
}
</style>
