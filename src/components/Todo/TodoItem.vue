<template>
  <li class="todo-item" v-if="isUpdate">
    <div class="edit-todo-form">
      <input type="text" v-model="updateText" @keypress.enter="handleOnSave(todo.id)"/>
      <button @click="() => handleOnSave(todo.id)">Save</button>
    </div>
  </li>

  <li class="todo-item" v-else>
    <h4
      :id="todo.id"
      v-bind:class="[{ completed: todo.isCompleted }, 'item-text']"
      @click="handleToggleComplete(todo.id)"
    >
      {{ todo.content }}
    </h4>
    <div class="item-button-group">
      <button @click="handleToggleUpdateForm">
        <i class="fas fa-pen" />
      </button>
      <button @click="handleRemove(todo.id)">
        <!-- TODO: xu ly delete todo -->
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      isUpdate: false,
      updateText: this.todo.content,
    };
  },
  methods: {
    handleToggleUpdateForm() {
      this.isUpdate = !this.isUpdate;
    },
    handleUpdate(todoId, isToggleComplete) {
      const payload = {
        id: todoId,
        content: this.updateText,
        isCompleted: isToggleComplete
          ? !this.todo.isCompleted
          : this.todo.isCompleted,
      };
      this.updateTodo(payload);
    },
    handleOnSave(todoId) {
      this.handleUpdate(todoId);
      this.handleToggleUpdateForm();
    },
    handleToggleComplete(todoId) {
      this.handleUpdate(todoId, true);
    },
    handleRemove(todoId){
      this.deleteTodo(todoId)
    },
    ...mapActions(["updateTodo","deleteTodo"]),
  },
};
</script>

<style>
.todo-container .todo-content .todo-list li {
  background-color: rgba(252, 227, 227, 0.3);
  padding: 3px 4rem;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  /* height: 0;
  opacity: 0; */
  /* display: none; */
  /* animation: slideDown 0.5s ease-in-out 0s forwards; */
}

@keyframes slideDown {
}

/* edit form style */
.todo-container .todo-content .todo-list li .edit-todo-form {
  padding: 10px 0;
  display: flex;
}
.todo-container .todo-content .todo-list li .edit-todo-form input {
  height: 1rem;
  width: 220px;
  padding: 15px 25px;
  border-radius: 2px;
  margin-right: 6px;
  border: none;
  font-family: "Quicksand", sans-serif;
}
.todo-container .todo-content .todo-list li .edit-todo-form button {
  background-color: rgba(233, 58, 58, 0.7);
  color: white;
  border: none;
  font-weight: bold;
  border: 1px solid rgba(211, 47, 47, 0.63);
  margin: 0;
  padding: 14px 15px;
  display: block;
}
.todo-container .todo-content .todo-list li .edit-todo-form button:hover {
  background-color: rgba(226, 27, 27, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.7);
}

/* style when !isEditing */
.todo-container .todo-content .todo-list li .item-text {
  max-width: 70%;
  position: relative;
  transition: opacity 0.4s ease;
  cursor: pointer;
}
.todo-container .todo-content .todo-list li .completed {
  opacity: 0.6;
}
.todo-container .todo-content .todo-list li .completed::before {
  content: "";
  position: absolute;
  height: 2px;
  top: 50%;
  background: #ffffff;
  display: block;
  width: 0%;
  left: -0.5rem;
  animation: strikeToRight 0.5s ease-out 0s forwards;
}

@keyframes strikeToRight {
  to {
    width: calc(100% + 1rem);
  }
}

.todo-container .todo-content .todo-list li .item-button-group {
  max-width: 30%;
  display: flex;
  justify-content: space-between;
}
.todo-container .todo-content .todo-list li .item-button-group button {
  background-color: none;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  margin-left: 3px;
}
</style>