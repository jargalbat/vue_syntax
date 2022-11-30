## Vue.js
Vue.js is a JavaScript framework that makes building interactive and reactive web frontends easier.<br>
https://vuejs.org/<br>

## VS Code
Plugins:<br>
Prettier - Prettier - Code formatter<br>
Code > Preferences > Settings > format > Text Editor > Default formatter > Prettier<br>
<br>
Shortcuts:<br>
File > Preferences > Keyboard Shortcuts > Format Document<br>

## Syntax
app.js<br>
```
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
```
Input<br>
```
<input type="text" id="goal" v-model="enteredValue" /><br>
```
Button<br>
```
<button type="button" v-on:click="addGoal">Add</button><br>
```
List<br>
```
<li v-for="goal in goals">{{ goal }}</li>
```
Anchor link<br>
```
v-bind:href="url"<br>
```
Html viewer<br>
```
v-html="htmlStr"<br>
```

