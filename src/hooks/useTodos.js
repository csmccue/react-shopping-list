import { useState } from 'react';
import { useEffect } from 'react';
import { getTodoItems } from '../services/todo';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodoItems();
        setTodos(data);
      } catch (e) {
      //eslint-disable-next-line no-console
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return { todos, setTodos };
}