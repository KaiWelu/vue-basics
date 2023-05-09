let date = Date.now();
console.log(date);

Vue.createApp({
  data() {
    return {
      name: "John Doe",
      date: date,
    };
  },
}).mount("#app");
