<template>
  <div class="new-todo-group">
    <div class="title">New todo</div>
    <div class="input-group">
      <input type="text" placeholder="New Todo" v-model="newTodoContent" @keypress.enter="handleCreateNew" />
      <a class="add-btn" @click="handleCreateNew"> Add Todo </a>
      <!-- TODO: xu ly add todo -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "NewTodo",
  data(){
    return {
      newTodoContent: ''
    }
  },
  methods: {
    handleCreateNew(){
      const newTodoObject = {
        id: uuidv4(),
        content: this.newTodoContent,
        isCompleted: false
      }
      this.newTodo(newTodoObject)
      this.newTodoContent = ''
    },
    ...mapActions(['newTodo'])
  }
};
</script>

<style>
/* animation */
.slide-down-appear {
  height: 0;
  opacity: 0;
}
.slide-down-appear.slide-down-appear-active {
  height: auto;
  opacity: 1;
}

.todo-container .todo-content .new-todo-group {
  width: 80%;
  margin: 0 auto;
  transition: all 0.4s ease-in-out;
}

.todo-container .todo-content .new-todo-group .title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 15px 0;
  text-align: left;
}
.todo-container .todo-content .new-todo-group .input-group {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row !important;
  align-items: center;
  margin-bottom: 35px;
}
.todo-container .todo-content .new-todo-group .input-group input {
  max-width: 70%;
  /* width: 225px; */
  height: 1.3rem;
  flex-grow: 1;
  padding: 15px 25px;
  border-radius: 2px;

  border: none;
  font-family: "Quicksand", sans-serif;
}
.todo-container .todo-content .new-todo-group .input-group input::placeholder {
  font-family: "Quicksand", sans-serif;
}
.todo-container .todo-content .new-todo-group .input-group a {
  max-width: 30%;
  text-decoration: none;
  color: white;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin: 0;
  padding: 14px 15px;
  display: block;
  height: 1.3rem;
  margin-left: 5px;
}
.todo-container .todo-content .new-todo-group .input-group a:hover {
  background-color: rgba(252, 227, 227, 0.3);
}
</style>