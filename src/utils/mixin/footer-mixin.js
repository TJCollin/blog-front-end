export default {
  methods: {
    footer(height) {
      let windowClientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (height < windowClientHeight) {
        this.$store.commit('SET_FOOTER_FIXED', {footerFixed: true})
        // console.log('fixed')
        // this.$store.commit('changeFooterFixed', true)
      } else {
        this.$store.commit('SET_FOOTER_FIXED', {footerFixed: false})

        // console.log('no')
        // this.$store.commit('changeFooterFixed', false)
      }
    }
  }
}
