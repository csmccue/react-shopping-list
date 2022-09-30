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
          <div>
            <NavLink to="/auth/sign-in">Sign In</NavLink>
            <NavLink to="/auth/sign-up">Sign Up</NavLink>
          </div>
          <div>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={submitAuth}>add me fam</button>
          </div>
        </nav>
      </div>
    </>
  );


}