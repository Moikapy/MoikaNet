import Searchbar from "../Searchbar";
export default {
  name: 'home',
  components: {Searchbar},
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}