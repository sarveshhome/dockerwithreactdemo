import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand">React</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="dropdown-toggle"
                data-toggle="dropdown"
                to="about"
              >
                About <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="#">About 1-1</Link>
                </li>
                <li>
                  <Link to="#">About 1-2</Link>
                </li>
                <li>
                  <Link to="#">About 1-3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">Contact US</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="#">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
