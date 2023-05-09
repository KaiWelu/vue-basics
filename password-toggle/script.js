Vue.createApp({
  data() {
    return {
      inputType: "password",
      buttonText: "Show Password",
    };
  },
  methods: {
    showPassword() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.buttonText = "Hide Password";
      } else {
        this.inputType = "password";
        this.buttonText = "Show Password";
      }
    },
  },
}).mount("#app");
