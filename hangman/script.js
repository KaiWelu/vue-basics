Vue.createApp({
  data() {
    return {
      gameStates: ["start", "success", "fail"],
      gameState: "start",
      wordList: [],
      guessWord: "kai",
      goodChars: [],
      badChars: [],
      alphabet: "abcdefghijklmnopqrstuvwxyz",
      buttons: false,
    };
  },
  computed: {
    fails() {
      return this.badChars.length;
    },
    isDisabled() {
      if (this.buttons === false) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    buttonClick(event) {
      if (this.guessWord.includes(event.target.textContent) === true) {
        this.goodChars.push(event.target.textContent);
        event.target.disabled = true;
      } else {
        this.badChars.push(event.target.textContent);
        event.target.disabled = true;
      }
      console.log(event.target.textContent);
      console.log(this.goodChars);
    },
    restart() {
      this.gameState = "start";
      this.guessWord = "kai";
      this.goodChars = [];
      this.badChars = [];
      this.buttons = false;
    },
  },
}).mount("#app");
