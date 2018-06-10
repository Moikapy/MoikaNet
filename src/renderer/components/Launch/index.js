export default {
  name: 'cover',
  components: {},
  data:{},
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}