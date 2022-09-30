import React from 'react';
import { useParams } from 'react-router-dom';
import './Todo.css';

export default function Todo() {
  const id = useParams();
  console.log('todo');
  return (
    <main>
      <div>todo1</div>
      <div>todo2</div>
      <div>todo3</div>
    </main>
  );
}
