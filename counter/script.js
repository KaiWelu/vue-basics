Vue.createApp({
  data() {
    return {
      backgroundGradient: "linear-gradient(to left, white 50%, yellow 50%)",
      alternateColor: "red",
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
}).mount("#app");
