<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
	    const loaderWrapper = document.getElementById('loaderWrapper');
	    const preLoader = document.getElementById('preLoader');
	    const circle = document.getElementById('circle');
	    loaderWrapper.style.display = 'none';
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }


  .slide-left-enter-active {
    transition: all 0.5s ease;
  }
  .slide-left-leave-active {
    transition: all 0.5s ease;
  }

  .slide-left-enter, .slide-left-leave-to{
    transform: translateX(-100%);
  }

</style>
