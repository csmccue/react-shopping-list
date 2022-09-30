import { createContent, useState } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContent();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  return <UserContext.Provider value = {{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };