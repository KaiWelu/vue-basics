Vue.createApp({
  data() {
    return {
      count: 0,
      last: "",
    };
  },
  methods: {
    // boxCount() {
    //   let boxArr = [this.fast, this.cheap, this.good];
    //   let count = 0;
    //   boxArr.forEach((element) => {
    //     if (element === true) {
    //       count++;
    //     }
    //   });
    //   return count;
    // },
    boxCheck(event) {
      if (event.target.checked === true) {
        this.count++;
        this.last = event.target.id;
      } else {
        this.count--;
      }

      if (this.count === 2) {
      }
      console.log(this.last);
      console.log(this.count);
    },
  },
}).mount("#app");

// function checkTheBoxes() {
//   const checked = document.querySelectorAll("input[type='checkbox']:checked");
//   return checked.length === 3;
// }

// let lastBox;

// document.body.addEventListener("change", (event) => {
//   if (checkTheBoxes() === true) {
//     lastBox.checked = false;
//   }
//   lastBox = event.target;
// });
