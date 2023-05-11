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
      return this.equality && this.passwordOne.match(/[a-z]/);
      // if (this.equality && this.passwordOne.match(/[a-z]/)) {
      //   return true;
      // } else {
      //   return false;
      // }
      // if (this.equality === false || this.passwordOne.match(/[a-z]/) === null) {
      //   return false;
      // }
      // return true;
    },
    upperCase() {
      return this.equality && this.passwordOne.match(/[A-Z]/);
      // if (this.equality || this.passwordOne.match(/[A-Z]/)) {
      //   return false;
      // }
      // return true;
    },
    containsNumbers() {
      return this.equality && this.passwordOne.match(/[0-9]/);
      // if (this.equality === false || this.passwordOne.match(/[0-9]/) === null) {
      //   return false;
      // }
      // return true;
    },
    passwordLength() {
      return this.equality && this.passwordOne.length >= 10;
      // if (this.equality === false || this.passwordOne.length < 10) {
      //   return false;
      // }
      // return true;
    },
  },

  methods: {
    passwordToggle() {
      this.passwordHidden = !this.passwordHidden;
    },
    checkEqual() {
      this.equality =
        this.passwordOne === this.passwordTwo && this.passwordOne !== "";
      // if (this.passwordOne === this.passwordTwo && this.passwordOne !== "") {
      //   this.equality = true;
      // } else {
      //   this.equality = false;
      // }
    },
  },
}).mount("#app");
