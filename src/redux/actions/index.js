const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const DONE_TODO = 'DONE_TODO';
const SORT_TODO = 'SORT_TODO';
const FILTER_TEXT = 'FILTER_TEXT';
const FILTER_DATE = 'FILTER_DATE';

export const addTodo = (text, date) => ({
  type: ADD_TODO,
  payload: {
    textValue: text,
    dateValue: date
  }
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})

export const doneTodo = (id) => ({
  type: DONE_TODO,
  payload: {
    id
  }
})

export const sortTodo = (type) => ({
  type: SORT_TODO,
  payload: {
    type
  }
})

export const onChangeFilterText = (e) => ({
  type: FILTER_TEXT,
  payload: {
    filterText: e
  }
})

export const onChangeFilterDate = (e) => ({
  type: FILTER_DATE,
  payload: {
    filterDate: e
  }
})