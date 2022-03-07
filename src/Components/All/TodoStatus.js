function TodoStatus(props) {
    const { color, completed, status, setStatus, onClickClearCompleted } = props;

    console.log(completed);

    function handleOptions(condition) {
        return {
            color: color,
            filter: condition ? "brightness(110%)" : "brightness(60%)",
            background: "transparent",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
        };
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '12px',
                paddingBottom: '10px',
                borderBottom: "0.5px solid white",
            }}

        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '8.7rem'
                }}
            >
                <div>{completed} completed</div>
                <div>-</div>
                <button
                    style={{
                        color: 'orange',
                        filter: completed > 0 ? "brightness(110%)" : "brightness(60%)",
                        background: 'transparent',
                        fontWeight: 'bold',
                        cursor: completed > 0 ? 'pointer' : 'default',
                        border: 'none',
                    }}
                    onClick={onClickClearCompleted}
                >Clear</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '8.7rem',
                }}
            >
                <button
                    style={{
                        ...handleOptions(status === 'all'),
                    }}
                    onClick={() => { setStatus('all'); }}
                >All</button>
                <button
                    style={{
                        ...handleOptions(status === 'active'),
                    }}
                    onClick={() => { setStatus('active'); }}
                >Active</button>
                <button
                    style={{
                        ...handleOptions(status === 'completed'),
                    }}
                    onClick={() => { setStatus('completed'); }}
                >Completed</button>
            </div>
        </div>
    );
}

export default TodoStatus;