import { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { deleteUser } from '@/services/api/users';
import Modal from '@/common/Modal';
import FormUser from '@/components/FormUser';
import endPoints from '@/services/api';
import useAlert from '@/hooks/useAlert';
import Alert from '@/common/Alert';
import Link from 'next/link';

export default function Users() {
  const [reset, setReset] = useState(false);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [emailSortAsc, setEmailSortAsc] = useState(false);
  const [idSortAsc, setIdSortAsc] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(endPoints.users.allUsers);
      setUsers(response.data);
    }

    try {
        getUsers();
    } catch (error) {
      console.error(error);
    }
  }, [reset]);

  const handleDelete = (id) => {
    try {
      deleteUser(id).then(() => {
        setAlert({
          active: true,
          message: 'Delete user successfully',
          type: 'delete',
          autoClose: true,
        });
      });
      setUsers(users.filter((user) => {
        return user.id !== id;
      }));
    } catch (error) {
      setAlert({
        active: true,
        message: 'A problem has occured',
        type: 'error',
        autoClose: true,
      });
    }
  };

  useEffect(() => {
  }, [idSortAsc, emailSortAsc]);

  function sortUserId() {
    if (idSortAsc) {
        setUsers(users.sort((a, b) => a.id - b.id));
    }
    else {
        setUsers(users.sort((a, b) =>b.id - a.id));
    }
    setIdSortAsc(!idSortAsc);
  }

  function sortUserEmail() {
    if (emailSortAsc) {
        setUsers(users.sort((a, b) => a.email.localeCompare(b.email)));
    }
    else {
        setUsers(users.sort((a, b) => -1 * a.email.localeCompare(b.email)));
    }
    
    setEmailSortAsc(!emailSortAsc);
  }
  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">List of Users </h2>
        </div>
        <div className="mt-5 flex lg:mr-4 lg:mt-0">
          <span className="sm:mr-3">
            <button
              onClick={() => setReset(!reset)}
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Users
            </button>
          </span>
        </div>

        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:mr-3">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add user
            </button>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Username
                    </th>
                    <th onClick={() => sortUserEmail()}
                    scope="col" className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th onClick={() => sortUserId()} scope="col" className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users?.map((user) => (
                    <tr key={`User-item-${user.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{`${user.name.firstname} ${user.name.lastname}`}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${user.email}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/users/details/${user.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Details
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(user.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormUser setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  );
}
