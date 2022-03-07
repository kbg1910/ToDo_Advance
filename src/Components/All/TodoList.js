import Todo from "./Todo";

function TodoList(props) {
    const { todoList, onTodoChanged, status } = props;
    let newTodo = todoList.filter((todo) => {
        return status === 'all' ?
            true :
            status === 'active' ?
                todo.completed === false : todo.completed === true

    });
    return (
        <div>
            <ul style={{
                height: "400px",
                listStyle: "none",
                overflow: "scroll",
                paddingBottom: "30px",
            }}>
                {
                    newTodo.map((todo) => {
                        return <li key={todo.id}><Todo todo={todo} onTodoChanged={onTodoChanged}></Todo></li>;
                    })
                }
                {props.children}
            </ul>
        </div >
    );
}

export default TodoList;