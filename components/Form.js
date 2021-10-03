import { useState } from "react";

function Form() {
  const [formItems, setformItems] = useState({});
  console.log("form Items: ", formItems);
  const handleChange = (e) => {
    const newFormItems = {
      ...formItems,
      [e.target.name]: e.target.value,
    };
    setformItems(newFormItems);
  };
  return (
    <form className="p-4 w-3/4 mx-auto my-5 bg-green-500 rounded-md space-x-10 space-y-10">
      <h1 className="flex justify-center text-2xl font-extrabold">
        Create Cookie Stand
      </h1>
      <div className="flex">
        <label className="mr-4">Location:</label>
        <input
          onChange={handleChange}
          className="flex-grow "
          type="text"
          name="location"
        />
      </div>
      <div className="flex justify-between -mx-3 mb-2">
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Minimum customers per hour
          </label>
          <input
            onChange={handleChange}
            name="minCustomers"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Maximum customers per hour
          </label>
          <input
            onChange={handleChange}
            name="maxCustomers"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Average cookies per slae
          </label>
          <input
            onChange={handleChange}
            name="avgCookies"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <button
            class="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
