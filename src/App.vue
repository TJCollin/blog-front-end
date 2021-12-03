<template>
  <div id="app">
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

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
  transform: translateX(-100%);
}
</style>
