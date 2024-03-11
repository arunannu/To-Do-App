import Link from "next/link";

const Header = () => {
  return (
    <header className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-xl">Todo List</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"/todos"} className="mr-5 hover:text-gray-900">
            My To-Dos
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
