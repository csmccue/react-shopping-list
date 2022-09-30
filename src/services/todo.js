import { checkError, client } from './client';

export async function getTodoItems() {
  // fill out with supabase details
  const response = await client.from('*').select();
  return checkError(response);
}

export async function createTodoItem(name) {
    // fill out with supa details
  const response = await client.from('*').insert([{ name }]);
  return checkError(response);
}

export async function toggleTodoItem({ id, done }) {
  // fill out with supa details
  const response = await client
    .from ('*')
    .update({ done: !done })
    .match({ id })
    .single();

  return checkError(response);
}