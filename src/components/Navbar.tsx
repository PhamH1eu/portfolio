const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Pham Minh Hieu</h1>
        <ul className="flex space-x-6">
          <li>
            <a className="p-3 hover:bg-gray-100 rounded" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="p-3 hover:bg-gray-100 rounded" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="p-3 hover:bg-gray-100 rounded" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
