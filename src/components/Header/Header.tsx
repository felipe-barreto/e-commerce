import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-b from-gray-950 to-gray-700 py-7">
      <nav>
        <ul className="flex justify-center md:justify-start">
          <li>
            <NavLink
              to="/productos"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-bold text-blue-300 px-8 md:pl-14 md:pr-0 hover:underline"
                  : "text-2xl font-bold text-white px-8 md:pl-14 md:pr-0 hover:underline"
              }>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/carrito"
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-bold text-blue-300 px-8 md:pl-14 md:pr-0 hover:underline"
                  : "text-2xl font-bold text-white px-8 md:pl-14 md:pr-0 hover:underline"
              }>
              Carrito
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
