const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    add5(num) {
      this.counter+=num;
    },
    reduce5(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");

// Using JavaScript
// document.getElementById
// document.querySelector('button').addEventListener()
