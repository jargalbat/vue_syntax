Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  methods: {
    addGoal() {
      console.log("asdf");
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
