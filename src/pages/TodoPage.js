import React, { useState, useEffect } from "react";
import Input from "../components/Input/Input";
import Button from "../components/button/Button";
import TodoList from "../components/todoList/TodoList";
import classes from './TodoPage.module.css'
const TodoPage = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const addTodo = () => {
        setTodoList((prevState) => [
            ...prevState,
            {
                id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
                title: inputValue,
                completed: false,
            },
        ])
        setInputValue('')
    };

    const editTodo = (todoEdit) => {
        todoList.map((todo) => {
            if (todoEdit.id === todo.id) return (todo.title = todoEdit.title);
        });
        setTodoList([...todoList]);
    };

    const deleteTodo = (id) => {
        let updateList = todoList.filter((todo) => {
          return todo.id !== id;
        });
        setTodoList([...updateList]);
    };

    const clearAll = () => {
        setTodoList([...[]]);
    }

  useEffect(() => {
    const myLocalStorage = JSON.parse(localStorage.getItem("todo"));
    if (myLocalStorage === null) {
      return localStorage.setItem("todo", JSON.stringify(todoList));
    }
    if (myLocalStorage !== 0) {
      setTodoList(myLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

    return (
        <>
            <h1>TO DO</h1>
            <div className={classes.input_block}>
                <Input value={inputValue} onChange={handleInput} />

                {
                    todoList.length === 0 ? <Button onClick={addTodo} name="Add task" trueOrfalse={inputValue.length === 0 ? true : false}/>
                     : <div className={classes.btn_block}>
                    <Button onClick={addTodo} name="Add" trueOrfalse={inputValue.length === 0 ? true : false}/>
                    <Button onClick={clearAll} name="Clear all" />    
                        </div> 
                }
                
            </div>
            
            <TodoList todo={todoList} editTodo={editTodo} deleteTodo={deleteTodo}/>
        </>
    );
};

export default TodoPage;
