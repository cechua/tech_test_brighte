import { createContext } from 'react';
import { IFormInput } from '../components/ReferralForm';
import useUsers, { UserType } from '../hooks/useUsers';

interface UserContextProps {
  users: UserType[] | undefined;
  fetchUsers: () => void;
  postUser: (user: IFormInput) => void;
  clearUsers: () => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const { users, fetchUsers, postUser, clearUsers } = useUsers();
  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        postUser,
        clearUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
