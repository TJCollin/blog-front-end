<template>
  <div id="app">
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
     mounted(){
       const loaderwrapper = document.getElementById('loaderWrapper');

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
