import { useCallback, useState } from 'react';
import { IFormInput } from '../components/ReferralForm';
import axios from 'axios';
const API_URL = 'http://localhost:3000/users';

export type UserType = IFormInput & {
  id: string;
};

const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>();

  const fetchUsers = async () => {
    const responseUsers = await axios.get(API_URL);
    setUsers(responseUsers.data);
  };

  const postUser = async (user: IFormInput) => {
    try {
      const responseUser = await axios.post(API_URL, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newUser: UserType = responseUser.data;
      setUsers((prevUsers) => [...prevUsers!, newUser]);
    } catch (err) {
      console.log(err);
    }
  };

  const clearUsers = useCallback(() => {
    try {
      setUsers([]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { fetchUsers, users, postUser, setUsers, clearUsers };
};

export default useUsers;
