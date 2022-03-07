import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import Todo from './All/Todo';
import TodoForm from './All/TodoForm';
import TodoList from './All/TodoList';
import TodoStatus from './All/TodoStatus';
import './main.css';
function Main(props) {
    const { todoList, setTodoList } = props;
    const [status, setStatus] = useState("all");
    const [addClick, addClickHandler] = useState(false);

    function statusHandler(value) {
        setStatus(value);
    }

    const itemLeft = todoList.reduce((count, todo) => {
        return todo.completed === false ? count + 1 : count;
    }, 0);

    const addTodoItem = (newTodo) => {
        if (newTodo.title.trim() !== "") {
            newTodo["id"] = (Math.random()).toString();
            setTodoList((prevList) => [...prevList, newTodo]);
        }
        addClickHandler(false);
    };

    const onTodoChanged = (type, updateTodo) => {
        if (updateTodo.title.trim() === "") {
            type = "delete";
        }

        let newTodo;
        if (type === "update") {
            newTodo = todoList.map((todo) =>
                todo.id === updateTodo.id ? updateTodo : todo
            );
        } else if (type === "delete") {
            newTodo = todoList.filter((todo) => todo.id !== updateTodo.id);
        } else {
            throw new Error("Operation type not defined");
        }

        setTodoList(newTodo);
        console.log(newTodo);
    };

    const onClickClearCompleted = () => {
        const updatedTodo = todoList.filter((todo) => todo.completed === false);
        setTodoList(updatedTodo);
    };

    function addHandler() {
        console.log('click');
        addClickHandler(!addClick);
    }
    return (
        <div
            style={{
                margin: "15px 0 5px 12px",
                height: "530px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    paddingRight: "12px",
                    justifyContent: "flex-end",
                }}
            >
                <button
                    style={{
                        borderRadius: "5px",
                        color: "#d9d9d9",
                        background: "#444",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "4px 10px",
                        margin: 0,
                        border: "none",
                        cursor: 'pointer',
                    }}
                    onClick={addHandler}
                >
                    Add</button>
            </div>
            <div
                style={{
                    color: 'orange',
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "18px",
                    margin: "15px 0",
                    paddingRight: "12px",
                }}
            >
                <h1>Reminders</h1>
                <h1>{itemLeft}</h1>
            </div>
            <TodoStatus
                color="orange"
                status={status}
                completed={todoList.length - itemLeft}
                setStatus={statusHandler}
                onClickClearCompleted={onClickClearCompleted}
            ></TodoStatus>
            {/* <TodoForm></TodoForm> */}
            <TodoList todoList={todoList} onTodoChanged={onTodoChanged} status={status}>{addClick && <TodoForm addTodoItem={addTodoItem}></TodoForm>}</TodoList>
            {/* <TodoList status={status} todoList={todoList}></TodoList> */}
        </div >
    );
}

export default Main;