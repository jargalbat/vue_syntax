const app = Vue.createApp({
  data() {
    return {
      name: "Jagaa",
      age: 32,
      imageUrl: "https://picsum.photos/200",
      htmlEl: "<img src='https://picsum.photos/200' />",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
