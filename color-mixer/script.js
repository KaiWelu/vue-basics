Vue.createApp({
  data() {
    return {
      red: 10,
      green: 150,
      blue: 150, n
      hex: "#0A9696",
    };
  },
  methods: {
    changeRed(event) {
      this.red = event.target.value;
    },
    changeGreen(event) {
      this.green = event.target.value;
    },
    changeBlue(event) {
      this.blue = event.target.value;
    },
    changeHex() {
      function toHex(inputString) {
        let output = "0" + parseInt(inputString).toString(16);
        return output.slice(-2);
      }
      const output =
        "#" + toHex(this.red) + toHex(this.green) + toHex(this.blue);

      this.hex = output.toUpperCase();
    },
  },
  computed: {
    giveMeStyle() {
      return {
        backgroundColor: `rgb(${this.red}, ${this.blue}, ${this.green})`,
      };
    },
  },
}).mount("#app");
