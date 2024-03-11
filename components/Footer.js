const Footer = () => {
  return (
    <footer className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-600">
      <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           
            <span className="ml-3 text-xl">Todos</span>
          </a>
        </div>
        <div className=' flex py-3 fles-wrap justify-around'>
         
            
            <ul className=' flex gap-80 text-m'>
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
            </ul>
          
        </div>
      </div>
      <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-600">
        <div className="container mx-auto py-4 m-0 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Made-by - Arun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
