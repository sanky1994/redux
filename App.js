import React, { useState } from 'react'
import { Container,Button,Form } from 'reactstrap';
import "./Components/todo.css"

function App() {

  const [todoList, setToDoList] = useState([
    {text : "test one"},
    {text : "test two"}
  ]);

  const [value, setValue] = useState(''); 
 
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fnkwrfurwfguegurfgeuyr");
    addToDo(value);
    setValue('');
  };
  const addToDo = (text) =>{
     const updatedToDoList = [...todoList,  {text} ];
     setToDoList(updatedToDoList);
  };
  const handleDeleteToDo = (todo) =>{
    const updatedToDoList = todoList.filter(currentToDoListalue => (
      currentToDoListalue !== todo));
      setToDoList(updatedToDoList);
  };
  return (
    <div className="App">
      <h1 className="align">To Do Hooks</h1>
       <Container className="todoList">
         {
          todoList.map((todo, index) =>(
            <div key={index}>
              <span>{todo.text}</span>
              <Button onClick={() => handleDeleteToDo(todo)}>Delete</Button> 
            </div>  
          ))
       }
       </Container>
       <Container className="todoItems">
         <Form >
            <input
              required
              placeholder="what is your task"
              Input={value}
              onChange ={e => setValue(e.target.value)}
             />
            </Form>
          <Button type="submit" onClick={handleSubmit}>Add To-Do</Button>
       </Container>
    </div>
  );
}

export default App;
