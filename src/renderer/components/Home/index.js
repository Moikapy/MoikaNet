import Web from "@/components/Web/Web";
export default {
  name: 'home',
  components: {Web},
  data: () =>{
    return {
      enterurl: "https://www.nodegg.com",
    }
  },
  methods: {
    submitUrl: function() {
      this.enterurl;
    }
  }
}