import { Redirect, NavLink, useParams } from 'react-router-dom';
import './Auth.css';
import { useContext, useState } from 'react';
import { authUser } from '../../services/auth';
import { UserContext } from '../../context/UserContext';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div>Hello There</div>
    </>
  );


}