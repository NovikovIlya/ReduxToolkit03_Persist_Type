import { useState } from 'react';
import { useAppDispatch } from './hook';
import { addTodo } from './store/todoSlice';
import InputField from './components/InputField';
import Todolist from './components/Todolist';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <div className="App">
      <InputField value={text} updateText={setText} handleAction={handleAction} />
      <Todolist />
    </div>
  );
}

export default App;
