import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { toggleTodoItem, createTodoItem } from '../../services/todo';
import './Todo.css';

export default function Todo() {
  const [description, setDescription] = useState('');
  const { todos, setTodos } = useTodos();
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  const handleClick = async (todo) => {
    try {
      const updatedTodo = await toggleTodoItem(todo);
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
      );
    } catch (e) {
      //eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const handleNewTodo = async () => {
    try {
      const response = await createTodoItem(description);
      setTodos((prev) => [...prev, response]);
      setDescription('');
    } catch (e) {
      //eslint-disable-next-line no-console
      console.error(e.message);
    }
  };
  return (
    <main>
      <div>
        {todos.map((todo) => ( 
          <div key={todo.id}> 
            <label className="checkbox">
              <input
                className="m-1"
                type="checkbox"
                checked={todo.complete}
                onClick={() => handleClick(todo)}
              />
              {todo.description}
            </label>
          </div>
        ))}
      </div>
      <div className="field is-grouped m-2">
        <input
          className="input m-2"
          type="text"
          placeholder="new todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button is-primary m-2" onClick={handleNewTodo}>
          Add
        </button>
      </div>
    </main>
  );
}
