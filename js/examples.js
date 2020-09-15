var app0 = new Vue({
  el: "#example0",
  data: {
    message: "hello from JS",
  },
});

var vueInstance1 = new Vue({
  el: "#example1",
  data: {
    newTodoText: "",
    todos: [],
  },
  methods: {
    addTodo: function () {
      this.todos.push(this.newTodoText);
      this.newTodoText = "";
    },
  },
});

var vueInstance2 = new Vue({
  el: "#example2",
  data: {
    message: "i'm a lasagna hog",
  },
});

var vueInstance3 = new Vue({
  el: "#example3",
  data: {
    message: "i'm a lasagna hog",
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

var app4 = new Vue({
  el: "#example4",
  data: {
    message: "I am using v-model",
  },
});
