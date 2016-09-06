<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello world!'
    }
  }
}
</script>
<style lang='scss'>
  @import '../../static/mixins/_sprite.scss';

  .test {
    @include sprite($logo);
  }
</style>