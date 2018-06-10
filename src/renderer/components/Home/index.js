import Web from "@/components/Web/Web";
export default {
  name: 'home',
  components: {Web},
  data: () =>{
    return {
      enterurl: "",
    }
  },
  methods: {
    submitUrl: function() {
      this.enterurl;
    }
  }
}