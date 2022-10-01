import { checkError, client } from './client';

export async function getTodoItems() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createTodoItem(description) {
  const response = await client.from('todos').insert({ description }).single();
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