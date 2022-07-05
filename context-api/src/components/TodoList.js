import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
    const [todo, setTodo] = useState('');

    const {todos, dispatch} = useContext(TodoListContext);
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo})
    }

    const handleRemoveTodo = (e) => {
        dispatch({type: 'REMOVE_TODO', id: e.target.id})
    }

    return (
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
            {
                todos.length ? (
                    todos.map(todo => {
                        return <p id={todo.id} key={todo.id} className="item" onClick={handleRemoveTodo}>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add Todo</label>
                <input type="text" id="todo" onChange={handleChange} />
                <input className="ui button primary" type="submit" value="Add New Todo" />
            </form>

            <button className="ui button primary" onClick={changeTheme}>Toggle Theme</button>
        </div>
    );
}

export default TodoList;


// class TodoList extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
//             <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
//                 <p className="item">Plan the family trip</p>
//                 <p className="item">Go for shopping</p>
//                 <p className="item">Go for a walk</p>
//                 <button className="ui button primary" onClick={changeTheme}>Toggle Theme</button>
//             </div>
//         );
//     }
// }