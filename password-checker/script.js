Vue.createApp({
  data() {
    return {
      passwordOne: "",
      passwordTwo: "",
      equality: false,
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
    lowerCase() {
      if (this.passwordOne.match(/[a-z]/) === null || this.equality === false) {
        return false;
      }
      return true;
    },
    upperCase() {
      if (this.passwordOne.match(/[A-Z]/) === null || this.equality === false) {
        return false;
      }
      return true;
    },
    containsNumbers() {
      if (this.passwordOne.match(/[0-9]/) === null || this.equality === false) {
        return false;
      }
      return true;
    },
    passwordLength() {
      if (this.passwordOne.length < 10 || this.equality === false) {
        return false;
      }
      return true;
    },
  },

  methods: {
    passwordToggle() {
      this.passwordHidden = !this.passwordHidden;
    },
    checkEqual() {
      if (this.passwordOne === this.passwordTwo && this.passwordOne !== "") {
        this.equality = true;
      } else {
        this.equality = false;
      }
    },
  },
}).mount("#app");
