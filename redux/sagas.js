import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TODO_LIST, setTodoList } from './actions';

function* fetchTodoList() {
  try {
    const response = yield call(fetch, 'https://66f620da436827ced9760024.mockapi.io/todo/test1/todoList');
    const data = yield response.json();
    console.log('Fetched todos:', data); // Debugging
    yield put(setTodoList(data));
  } catch (error) {
    console.error('Error fetching todo list:', error);
  }
}
function* todoSaga() {
  yield takeEvery(FETCH_TODO_LIST, fetchTodoList);
}

export default todoSaga;
