Vue.createApp({
  data() {
    return {
      red: 10,
      green: 20,
      blue: 150,
      hex: "#0A9696",
    };
  },
  methods: {
    changeHex() {
      function toHex(inputString) {
        let output = "0" + parseInt(inputString).toString(16);
        return output.slice(-2);
      }
      const output =
        "#" + toHex(this.red) + toHex(this.green) + toHex(this.blue);

      this.hex = output.toUpperCase();
    },
    getColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.red = data.rgb.r;
          this.green = data.rgb.g;
          this.blue = data.rgb.b;
        });
    },
  },
  computed: {
    giveMeStyle() {
      return {
        backgroundColor: `rgb(${this.red}, ${this.blue}, ${this.green})`,
      };
    },
  },
  async created() {
    this.getColor();
  },
}).mount("#app");
