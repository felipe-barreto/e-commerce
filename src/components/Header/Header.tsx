import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-b from-gray-950 to-gray-700 py-7">
      <nav>
        <ul className="flex justify-center md:justify-between">
          <li>
            <NavLink
              to="/productos"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                  : "text-2xl font-bold text-white px-8 hover:underline"
              }>
              Inicio
            </NavLink>
          </li>
          <div className="flex">
            <li>
              <NavLink
                to="/productos/hombre"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                    : "text-2xl font-bold text-white px-8 hover:underline"
                }>
                Hombre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/mujer"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                    : "text-2xl font-bold text-white px-8 hover:underline"
                }>
                Mujer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/joyeria"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                    : "text-2xl font-bold text-white px-8 hover:underline"
                }>
                Joyería
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/electronica"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                    : "text-2xl font-bold text-white px-8 hover:underline"
                }>
                Electrónica
              </NavLink>
            </li>
          </div>
          <li>
            <NavLink
              to="/carrito"
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-bold text-blue-300 px-8 hover:underline"
                  : "text-2xl font-bold text-white px-8 hover:underline"
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
