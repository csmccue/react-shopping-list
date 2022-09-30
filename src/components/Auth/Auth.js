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

  const submitAuth = async () => {
    const userResp = await authUser(email, password, type);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };
  if (user) {
    return <Redirect to="/todo" />;
  }

  return (
    <>
      <div>We out here authenticating
        <nav>
          <NavLink to="/auth/sign-in">Sign In</NavLink>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
          <div>
            <button onClick={submitAuth}>add me fam</button>
          </div>
        </nav>
      </div>
    </>
  );


}