const app = Vue.createApp({
  // data: function() {}
  data() {
    return {
      courseGoal: "Finish Vue!",
      courseGoalA: "Goal A",
      courseGoalB: "Goal B",
      htmlStr: "<p>HtmlStr test</p>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    // outputGoal: function () {},
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
