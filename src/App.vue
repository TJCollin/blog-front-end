<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    height: 100%;
  }

  .slide-left-enter-active {
    transition: all 1s ease;
  }
  .slide-left-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-left-enter, .slide-left-leave-to{
    transform: translateX(-100%);
  }

</style>
