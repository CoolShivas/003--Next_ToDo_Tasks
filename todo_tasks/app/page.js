const HomePage = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ToDo Tasks
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2">
            <div>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="title"
                  required
                  autoComplete="title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                  placeholder="enter your title"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="description"
                  required
                  autoComplete="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                  placeholder="enter your description"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Starting of Table format to display data */}
      <div className="m-10">
        <table className="w-full text-left">
          <thead className="text-sm uppercase bg-slate-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col" className="px-6 py-3">
                01
              </th>
              <th scope="col" className="px-6 py-3">
                shiva
              </th>
              <th scope="col" className="px-6 py-3">
                chouhan
              </th>
              <th scope="col" className="px-6 py-3">
                pending
              </th>
              <th scope="col" className="px-6 py-3">
                action required
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-3">
                02
              </th>
              <th scope="col" className="px-6 py-3">
                ketan
              </th>
              <th scope="col" className="px-6 py-3">
                soni
              </th>
              <th scope="col" className="px-6 py-3">
                pending
              </th>
              <th scope="col" className="px-6 py-3">
                action required
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Ending of Table format to display data */}
    </>
  );
};

export default HomePage;
