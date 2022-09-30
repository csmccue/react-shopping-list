import { checkError, client } from './client';

export async function getTodoItems() {
  const response = await client.from('todos').select().order('id');
  return checkError(response);
}

export async function createTodoItem(todo) {
  const response = await client.from('todos').insert(todo).single();
  return checkError(response);
}

export async function toggleTodoItem({ id, complete }) {
  const response = await client
    .from ('todos')
    .update({ complete: !complete })
    .match({ id: id })
    .single();

  return checkError(response);
}