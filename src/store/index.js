import Vue from "vue";
import Vuex from "vuex";
import instance from "./axios";
// import _ from 'lodash'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    updateTodo(state, payload) {
      const newTodos = state.todos.map(todo => todo.id === payload.id ? payload : todo)
      state.todos = newTodos
    },
    deleteTodo(state, id){
      const newTodos = state.todos.filter(todo => todo.id != id)
      state.todos = newTodos
    },
    newTodo(state,payload){
      state.todos.push(payload)
    }
  },
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const res = await instance.get();
        commit("setTodos", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo({ commit }, payload) {
      try {
        const res = await instance.put(payload.id, payload);
        if (res.status === 200 || res.status === 201) {
          commit("updateTodo", payload);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo({commit}, id){
      try {
        const res = await instance.delete(id)
        if(res.status === 200 || res.status === 201){
          commit('deleteTodo',id)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async newTodo({dispatch}, payload){
      try {
        const res = await instance.post('',payload)
        if(res.status === 200 || res.status === 201){
          dispatch('fetchTodos')
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
});

export default store;
