<template>
  <div class="todo-container">
    <div class="todo-header">
      <h1 class="todo-app-name">Todo List</h1>
      <p class="todo-description">A simple React Todo List App</p>
    </div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./Todo/TodoList.vue";
export default {
  name: "VueApp",
  components: { TodoList },
};
</script>

<style>
.todo-container {
  min-width: 400px;
  padding: 10px;
  background-color: #ff6666;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: -10px -15px 0px 0px rgba(68, 68, 68, 0.1);
  color: white;
  margin-bottom: 40px;
}
/* Header */
.todo-container .todo-header {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
.todo-container .todo-header .todo-app-name {
  line-height: 0.3;
  font-size: 2.6rem;
}

.todo-container .todo-header .todo-description {
  font-size: 1rem;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.todo-container .todo-content {
  margin: 0 -0.6rem;
}
</style>