import Web from "@/components/Web/Web";
export default {
  name: 'home',
  components: {Web},
  methods: {
    submitUrl: function() {
      let outputurl;
      outputurl = this.enterurl;
      return outputurl;
    }
  },
  data: () =>{
    return {
      enterurl: "http://www.nodegg.com",
      outputurl: this.outputurl
    }
  },
}