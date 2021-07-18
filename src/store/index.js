import Vue from "vue";
import Vuex from 'vuex'
import instance from './axios'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state,todos){
      state.todos = todos;
    }
  },
  getters: {
    todos: state => state.todos
  },
  actions: {
    async fetchTodos({commit}){
      try {
        const res = await instance.get();
        commit('setTodos',res.data)
      } catch (error) {
        console.log(error);
      }
    }
  }

})

export default store;