import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { toggleTodoItem, createTodoItem } from '../../services/items';
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
        prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo: prevTodo))
      );
    } catch (e) {
      //eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const handleNewTodo = async () => {
    try {
      await createTodoItem(description);
      setTodos((prev) => [...prev, (description)]);
      setName('');
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
    </main>
  );
}
