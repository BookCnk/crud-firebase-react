import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const FormInputData = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  // const [edit, setEdit] = useState([]);

  let User = collection(db, "Users");

  const handelChange = (e) => {
    if (e.target.value === null) {
      alert("Ayo");
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleAddData = async () => {
    await addDoc(User, form)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unSub = realTimeData();
    return () => {
      unSub();
    };
  }, []);

  const realTimeData = () => {
    const unSub = onSnapshot(User, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return unSub;
  };

  const loadData = async () => {
    getDocs(User)
      .then((query) => {
        const newData = query.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(User, id));
    } catch (err) {
      console.log(err);
    }
  };

  console.log();
  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => handelChange(e)}
              type="text"
              name="FirstName"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-stone-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => handelChange(e)}
              type="text"
              name="LastName"
              id="floating_last_name"
              className="text-stone-950 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-stone-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => handelChange(e)}
            type="text"
            name="University"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-stone-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Age
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => handelChange(e)}
            type="text"
            name="University"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-stone-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            University
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => handelChange(e)}
            type="text"
            name="Faculty"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-stone-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            faculty
          </label>
        </div>
        <button
          onClick={handleAddData}
          type="button"
          className="place-content-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add User
        </button>
      </form>
      <div className="mx-20 my-4 relative overflow-x-auto shadow-md sm:rounded-lg border-solid border-2 border-sky-500 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-black">
                Id
              </th>
              <th scope="col" className="px-6 py-3 text-black">
                FirstName
              </th>
              <th scope="col" className="px-6 py-3 text-black">
                Lastname
              </th>
              <th scope="col" className="px-6 py-3 text-black">
                University
              </th>
              <th scope="col" className="px-6 py-3 text-black">
                Faculty
              </th>
              <th scope="col" className="px-6 py-3 text-black">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i + 1}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-black">
                  {i + 1}
                </th>
                <td className="px-6 py-4 text-black">
                  {item.FirstName ? item.FirstName : "-"}
                </td>
                <td className="px-6 py-4 text-black">
                  {item.LastName ? item.LastName : "-"}
                </td>
                <td className="px-6 py-4 text-black">
                  {item.University ? item.University : "-"}
                </td>
                <td className="px-6 py-4 text-black">
                  {item.Faculty ? item.Faculty : "-"}
                </td>
                <td className="px-6 py-4 text-black">
                  <button
                    onClick={() => handleDelete(item.id)}
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ">
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(item.id)}
                    type="button"
                    className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 ">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormInputData;
