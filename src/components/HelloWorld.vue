<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .animate-box {
    opacity: 0;
  }
body{
  background-color: #0d1e06;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
b{
    color:#0d1e06;
}
c{
  color: #664510;
}
d{
  color:#e8b910;
}
e{
   color:#6d1127;
}

</style>
