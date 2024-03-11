import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (todosJson.find((item) => item.title == todo.title)) {
        alert("This Todo already exists!!");
      } else {
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson));
        alert("Todo has been added to the list...");
        setTodo({ title: "", description: "" });
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-2 text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Add a Todo
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="title"
                className="leading-7 text-lg text-gray-600">
                Todo Title
              </label>
              <input
                type="text"
                value={todo.title}
                onChange={onChange}
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="leading-7 text-lg text-gray-600">
                Todo Text
              </label>
              <input
                type="text"
                value={todo.description}
                onChange={onChange}
                id="description"
                name="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={addTodo}
              className="text-white bg-indigo-500 border-0 w-fit py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Add Todo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
