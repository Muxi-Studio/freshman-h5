<template>
  <div id="app">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang='scss'>
@import '../static/home.scss';

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: $_blue;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
