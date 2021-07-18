<template>
  <div class="todo-content">
    <div class="todo-list" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo"/>
    </div>
    <NewTodo />
  </div>
</template>

<script>
import NewTodo from "./NewTodo.vue";
import TodoItem from './TodoItem.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "TodoList",
  components: { NewTodo, TodoItem },
  mounted(){
    this.fetchTodos()
  },
  computed: mapGetters(['todos']),
  methods: mapActions(['fetchTodos'])
};
</script>

<style>
.todo-container .todo-content .todo-list {
  list-style: none;
  width: 100%;
}
</style>