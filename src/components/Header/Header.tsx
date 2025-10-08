import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-b from-gray-950 to-gray-700 py-7">
      <nav className="flex justify-between flex-row-reverse lg:block" aria-label="Secciones de la página">
        {/* Menu for large screens */}
        <ul className="hidden lg:flex justify-between">
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
          <li className="flex">
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

        {/* Hamburger button for small screens */}
        <button
          className="flex justify-center items-center w-8 h-8 mr-2 cursor-pointer group lg:hidden"
          aria-controls="small-screen-navigation"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((state) => !state)}>
          <span
            className={[
              "relative block w-[22px] h-[2px] bg-gray-50",

              "before:absolute before:left-0 before:top-[-7px] before:w-[22px] before:h-[2px] before:bg-gray-50 before:duration-200 group-hover:before:bg-blue-300",

              "after:absolute after:left-0 after:bottom-[-7px] after:w-[22px] after:h-[2px] after:bg-gray-50 after:duration-200 group-hover:after:bg-blue-300",

              open
                ? "bg-transparent before:origin-left before:rotate-41 after:origin-left after:-rotate-41"
                : "duration-200 group-hover:bg-blue-300",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>

        {/* Menu for small screens */}
        {open && (
          <ul id="small-screen-navigation" className="ml-4 lg:hidden">
            <li>
              <NavLink
                to="/productos"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/hombre"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Hombre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/mujer"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Mujer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/joyeria"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Joyería
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos/electronica"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Electrónica
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carrito"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl font-bold text-blue-300 hover:underline"
                    : "text-2xl font-bold text-white hover:underline"
                }
                onClick={() => setOpen(false)}>
                Carrito
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
