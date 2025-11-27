import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">64</span>
      </div>

      <nav className="navbar-center">
        <NavLink to="/" className="nav-link">
          Главная
        </NavLink>
        <NavLink to="/ai" className="nav-link">
          ИИ
        </NavLink>
        <NavLink to="/directions" className="nav-link">
          Список направлений
        </NavLink>
        <NavLink to="/about" className="nav-link">
          О нас
        </NavLink>
      </nav>

      <div className="navbar-right">
        {location.pathname === "/login" ? (
          <NavLink to="/register" className="btn btn-outline">
            Регистрация
          </NavLink>
        ) : location.pathname === "/register" ? (
          <NavLink to="/login" className="btn btn-outline">
            Войти
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-outline">
              Войти
            </NavLink>
            <NavLink to="/register" className="btn btn-primary">
              Регистрация
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
