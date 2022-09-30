import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      //eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <nav>
      <a
        role="button"
        className={`navbar-burger ${isActive ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-list"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbar-list">
        <div className="navbar-end">
          <div className="navbar-item">
            {!user && (
              <div className="buttons">
                <Link className="button is-primary" to="/auth/sign-up">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/auth/sign-in">
                  <strong>Sign in</strong>
                </Link>
              </div>
            )}
            {user && (
              <>
                <div>hello {user.email}</div>
                <button className="button is-light" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {}
    </nav>
  );
}
