Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countUp() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
  computed: {
    cssVars() {
      return { "--percent": this.count + "%" };
    },
  },
}).mount("#app");
