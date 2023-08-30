import { createSlice ,PayloadAction} from '@reduxjs/toolkit';

type Todo = {
    id: string;
    text:string;
    completed:boolean;
};

type TodosState = {
    todos:Todo[];
}

type payloadTypeText = {
    text: string ;
}

type payloadTypeId = {
    id: string | number;
}
const initialState : TodosState = {
    todos:[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action:PayloadAction<payloadTypeText>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action:PayloadAction<payloadTypeId>) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
