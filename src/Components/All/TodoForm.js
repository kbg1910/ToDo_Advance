import { useEffect, useRef, useState } from "react";

const obj = {
    priority: 0,
    title: '',
    notes: '',
    completed: false,
};
function TodoForm(props) {
    const [todo, setTodo] = useState(obj);
    let refi = useRef();
    function handleOnChange(event, name, value) {
        setTodo((prev) => {
            return { ...prev, [name]: value };
        });
    }
    function getMark(time) {
        let str = '';
        for (let i = 0; i < time; ++i) {
            str += '!';
        }
        return <div style={{ color: 'orange' }}>{str}</div>;
    }
    function addHandler(event) {
        event.preventDefault();
        const newItem = todo;
        newItem.id = '';
        props.addTodoItem(newItem);
    }
    useEffect(
        () => {
            refi.current.focus();
        }, []
    )
    return (
        <form
            style={{
                padding: "10px 0px",
                color: "white",
                display: 'flex',
            }}
        >
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={{
                        height: "15px",
                        width: "15px",
                        margin: "3px",
                    }}
                    onChange={(event) => handleOnChange(event, 'completed', event.target.checked)}
                >
                </input>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                    paddingBottom: "5px",
                    marginLeft: "5px",
                    borderBottom: "0.5px solid white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "5px",
                        justifyContents: "space-between",
                    }}
                >
                    {todo.priority > 0 && getMark(todo.priority)}
                    <input
                        type='text'
                        name='title'
                        placeholder="Title"
                        value={todo.title}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            resize: 'none',
                            outline: 'none',
                            color: 'white',
                            fontFamily: 'Courier Prime, monospace',
                        }}
                        ref={refi}
                        onChange={(event) => handleOnChange(event, 'title', event.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <textarea
                        name="note"
                        placeholder="Notes"
                        value={todo.notes}
                        style={{
                            resize: "none",
                            width: "300px",
                            minHeight: "30px",
                            maxHeight: "100px",
                            border: 'none',
                            background: 'transparent',
                            resize: 'none',
                            outline: 'none',
                            color: 'white',
                        }}
                        onChange={(event) => handleOnChange(event, 'notes', event.target.value)}
                    >

                    </textarea>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        width: '28%',
                    }}
                >
                    <div>
                        <select
                            style={{
                                borderRadius: "5px",
                                color: "#d9d9d9",
                                background: "#444",
                                border: "0.7px solid #888",
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "2px 5px",
                                width: "auto",
                                margin: "0",
                            }}
                            onChange={(event) => handleOnChange(event, 'priority', event.target.value)}
                        >
                            <option value="-1" disabled>
                                Priority
                            </option>
                            <option value="0">None</option>
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                    </div>
                    <div>
                        <button
                            style={{
                                borderRadius: "5px",
                                color: "#d9d9d9",
                                background: "#444",
                                border: "0.7px solid #888",
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "2px 5px",
                                width: "40px",
                                margin: "0",
                            }}
                            onClick={addHandler}
                        >add</button>
                    </div>
                </div>
            </div>
        </form >
    );
}

export default TodoForm;