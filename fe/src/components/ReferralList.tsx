import { DeleteIcon } from './common/SvgIcons/DeleteIcon';
import { EditIcon } from './common/SvgIcons/EditIcon';
const mockUsers = [
  {
    id: 1,
    givenName: 'John',
    surName: 'Johnson',
    email: 'jh@email@121.com',
    phone: '0453-283-283',
  },
  {
    id: 2,
    givenName: 'Matthew',
    surName: 'Lombard',
    email: 'mat197501@gmail.com',
    phone: '0453-123-123',
  },
  {
    id: 3,
    givenName: 'Joe',
    surName: 'Dickson',
    email: 'joe@dickson.com',
    phone: '0453-283-283',
  },
  {
    id: 4,
    givenName: 'Scarlet',
    surName: 'Johnson',
    email: 'scarlet@johnson.com',
    phone: '0453-283-283',
  },
];

const ReferralList = () => {
  return (
    <div className="bg-white p-8 rounded w-full min-h-96 relative overflow-x-auto">
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
        <tbody>
          {mockUsers.length > 0 ? (
            mockUsers.map((user) => (
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
            <tr>
              <td>No Referred Users.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralList;
