Vue.createApp({
  data() {
    return {
      passwordOne: "",
      passwordTwo: "",
      isEqual: false,
      passwordHidden: true,
    };
  },
  computed: {
    inputType() {
      if (this.passwordHidden === true) {
        return "password";
      } else {
        return "text";
      }
    },
    buttonText() {
      if (this.passwordHidden === true) {
        return "Show Password";
      } else {
        return "Hide Password";
      }
    },
  },
  methods: {
    passwordToggle() {
      this.passwordHidden = !this.passwordHidden;
    },
  },
}).mount("#app");
