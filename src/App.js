import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { useState } from 'react';
import { useLocalStorageState } from './useLocalStorageState';


function App() {
  const [todoList, setTodoList] = useLocalStorageState(
    "todoList-Advance",
    []
  );

  return (
    <div className="App">
      <div className='App-wrapper'>
        <Main todoList={todoList} setTodoList={setTodoList}></Main>
      </div>
    </div>
  );
}

export default App;
