// actions.js
export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const SET_TODO_LIST = 'SET_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodoList = () => ({
  type: FETCH_TODO_LIST,
});

export const setTodoList = (todos) => ({
  type: SET_TODO_LIST,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  payload: { id, todo },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
