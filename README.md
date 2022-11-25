## Vue.js
Vue.js is a JavaScript framework that makes building interactive and reactive web frontends easier.<br>
https://vuejs.org/<br>

## Syntax
Input:<br>
```
<input type="text" id="goal" v-model="enteredValue" /><br>
```
Button:<br>
```
<button type="button" v-on:click="addGoal">Add</button><br>
```
For:<br>
```
<li v-for="goal in goals">{{ goal }}</li>
```
Anchor link:<br>
```
v-bind:href="url"<br>
```
Html viewer:<br>
```
v-html="htmlStr"<br>
```
