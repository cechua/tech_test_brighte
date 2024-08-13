import { useCallback, useContext, useEffect, useState } from 'react';
import { DeleteIcon } from './common/SvgIcons/DeleteIcon';
import { EditIcon } from './common/SvgIcons/EditIcon';
import UserContext from '../context/UserContext';

enum SORT_TYPES {
  ASCENDING = 'Ascending',
  DESCENDING = 'Descending',
}

const ReferralList = () => {
  const { users, fetchUsers } = useContext(UserContext);
  const [sortMethod, setSortMethod] = useState<SORT_TYPES>(
    SORT_TYPES.ASCENDING
  );
  const [sortedUsers, setSortedUsers] = useState(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  const sortUsers = useCallback(() => {
    const isAscending = sortMethod == SORT_TYPES.ASCENDING;

    const sorted =
      users &&
      users.sort(function (a, b) {
        if (a.givenName < b.givenName) {
          return isAscending ? -1 : 1;
        }
        if (a.givenName > b.givenName) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });
    if (sorted) setSortedUsers([...sorted]);
  }, [users, sortMethod]);

  useEffect(() => {
    sortUsers();
  }, [users, sortUsers]);

  const handleSort = () => {
    setSortMethod((prevVal) =>
      prevVal == SORT_TYPES.ASCENDING
        ? SORT_TYPES.DESCENDING
        : SORT_TYPES.ASCENDING
    );
  };
  return (
    <div className="bg-white p-8 rounded w-full min-h-96 relative overflow-x-auto">
      <button
        className="border"
        onClick={() => handleSort()}
        data-testid={'referralList-sort-cta'}
      >
        {sortMethod}
      </button>
      <table className="w-full text-sm text-left">
        <thead className="text-md text-secondary font-bold border-b border-secondary uppercase">
          <tr>
            <th scope="col" className="py-4">
              Given Name
            </th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody data-testid={'referralList-tbody-users'}>
          {sortedUsers && sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <tr
                className="border-b border-secondary h-12 text-secondary-text"
                key={user.id}
              >
                <td className="pr-4 whitespace-nowrap">{user.givenName}</td>
                <td className="pr-4 whitespace-nowrap">{user.surName}</td>
                <td className="pr-4 whitespace-nowrap">{user.email}</td>
                <td className="pr-4 whitespace-nowrap">{user.phone}</td>
                <td className="pr-4 whitespace-nowrap">
                  <>
                    <button className="pr-4">
                      <EditIcon filled size={20} />
                    </button>
                    <button>
                      <DeleteIcon filled size={20} />
                    </button>
                  </>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-secondary-text">
              <td>No Referred Users.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralList;
