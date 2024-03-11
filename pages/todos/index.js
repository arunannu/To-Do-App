import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);

  const deleteTodo = (title) => {
    let newTodos = todos.filter((item) => {
      return item.title !== title;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const editTodo = () => {};

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4">Your Todos</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              List of All your Todos in one place!!
            </p>
          </div>
          <div>
            <div className="relative overflow-x-auto mt-6 py-2 w-[70%] max-w-[600px] mx-auto mx-2px">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-600">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((item) => (
                    <tr key={item.title} className=" dark:border-gray-200">
                      <td className="px-6 py-4">{item.title}</td>
                      <td className="px-6 py-4">{item.description}</td>
                      <td>
                        <button
                          class="px-3 py-2 text-xs font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
                          onClick={() => deleteTodo(item.title)}
                        >
                          Delete
                        </button>
                        <button
                          class="px-3 ml-10 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => editTodo(item.title)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Todos;
