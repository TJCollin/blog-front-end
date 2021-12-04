<template>
  <div id="app">
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
     mouted(){
       const loaderwrapper = document.getelementbyid('loaderwrapper');
       const preloader = document.getelementbyid('preloader');
        const circle = document.getelementbyid('circle');
        loaderwrapper.style.display = 'none';
      }


}
</script>

<style lang="scss">
@import url(./assets/init.css);
#app {
  height: 100%;
}

.slide-left-enter-active {
  transition: all 0.5s ease;
}
.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translatex(-100%);
}
</style>
