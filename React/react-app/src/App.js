import { useState, useRef, useEffect, useMemo } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import FetchData from "./FetchData";

function App() {
  const [count, setCount] = useState(0); 
  
  //useMemo
  const [count01, setCount01] = useState(0); 
  const [count02, setCount02] = useState(0); 

  //重い処理をするときに使う！
  const square = useMemo(() => {
    let i = 0;
    while(i<200){
      i++;
    }
    return count02 * count02;
  }, [count02]);

  useEffect(()=>{
    console.log("Hello Hooks")
  }, [count])

const handleCount = () => {
  setCount(count + 1);
};

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    // console.log(todoNameRef.current.value)
    const name = todoNameRef.current.value;
    if(name==="") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name: name, completed: false}];
    })
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo)=> !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div>
      <FetchData />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
      <p>useEffect</p>
      <button onClick={handleCount}>+</button>
      <p>{count}</p>
      <p>useMemo</p>
      <div>カウント０１：{count01}</div>
      <div>カウント０２：{count02}</div>
      <div>結果:{square}</div>
      <button onClick={()=> {setCount01(count01+1)}}>countup1</button>
      <button onClick={()=> {setCount02(count02+1)}}>countup2</button>
    </div>
  );
}

export default App;
