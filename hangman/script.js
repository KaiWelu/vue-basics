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
  },
  methods: {
    buttonClick(event) {
      if (this.guessWord.includes(event.target.textContent) === true) {
        this.goodChars.push(event.target.textContent);
        // event.target.disabled = true;
      } else {
        this.badChars.push(event.target.textContent);
        // event.target.disabled = true;
      }
      console.log(this.goodChars);
      console.log(this.badChars);
    },
    restart() {
      this.gameState = "start";
      this.guessWord = "kai";
      this.goodChars = [];
      this.badChars = [];
    },
    checkForWinOrFail() {
      const word = new Set();
      const guess = new Set();

      this.guessWord.split("").forEach((char) => {
        word.add(char);
      });
      this.goodChars.forEach((char) => {
        guess.add(char);
      });

      if (word.size === guess.size) {
        this.gameState = "success";
        console.log("WIN!");
      } else if (this.badChars.length === 10) {
        this.gameState = "fail";
        console.log("FAIL!");
      }
    },
  },
}).mount("#app");
