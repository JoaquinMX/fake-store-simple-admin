import { useRef } from "react";
import { addUser } from "@/services/api/users";
import { useRouter } from 'next/router';

export default function FormUser({ setOpen, setAlert, user }) {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      name: {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
      },
      address: {
        city: formData.get("city"),
        street: formData.get("street"),
        number: parseInt(formData.get("number")),
        zipcode: formData.get('zipcode'),
        geolocation: {lat: formData.get('lat'), long: formData.get('long')}
      },
      phone: formData.get("phone")
    };
    if (user) {
      router.push('/users');
    }
    else {
      addUser(data)
      .then((response) => {
        setAlert({
          active: true,
          message: "User added successfully",
          type: "success",
          autoClose: false,
        });
        console.log({...data, response});
        setOpen(false);
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: "error",
          autoClose: false,
        });
      });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                email
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.email ?? ""}
                type="email"
                name="email"
                id="email"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                username
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.username ?? ""}
                type="text"
                name="username"
                id="username"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                password
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.password ?? ""}
                type="password"
                name="password"
                id="password"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                firstname
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.name?.firstname ?? ""}
                type="text"
                name="firstname"
                id="firstname"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                lastname
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.name?.lastname ?? ""}
                type="text"
                name="lastname"
                id="lastname"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                city
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.city ?? ""}
                type="text"
                name="city"
                id="city"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                street
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.street ?? ""}
                type="text"
                name="street"
                id="street"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                number
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.number ?? ""}
                type="number"
                name="number"
                id="number"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                zipcode
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.zipcode ?? ""}
                type="text"
                name="zipcode"
                id="zipcode"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lat"
                className="block text-sm font-medium text-gray-700"
              >
                lat
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.geolocation?.lat ?? ""}
                type="text"
                name="lat"
                id="lat"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="long"
                className="block text-sm font-medium text-gray-700"
              >
                long
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.address?.geolocation?.long ?? ""}
                type="text"
                name="long"
                id="long"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                phone
              </label>
              <input
                disabled={user ? true : false}
                defaultValue={user?.phone ?? ""}
                type="text"
                name="phone"
                id="phone"
                className={user ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-100 border-gray-300 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
              />
            </div>


          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {user ? "Return ":"Save"}
          </button>
        </div>
      </div>
    </form>
  );
}
