import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <div className="flex justify-between items-center py-[34px]  md:px-[80px] px-[20px] text-white h-[41px]">
              <div className="logo">
                  <Link to="/" className="Brand">
                      WSP
                  </Link>
              </div>
              <div className="nav">
                  <NavLink
                      to="/"
                      className={(navData) =>
                          navData.isActive ? "nav-link active" : "nav-link"
                      }>
                      Home
                  </NavLink>
                  <NavLink
                      to="about"
                      className={(navData) =>
                          navData.isActive ? "nav-link active" : "nav-link"
                      }>
                      About
                  </NavLink>
                  <NavLink
                      to="products"
                      className={(navData) =>
                          navData.isActive ? "nav-link active" : "nav-link"
                      }>
                      Products
                  </NavLink>
                  <NavLink
                      to="posts"
                      className={(navData) =>
                          navData.isActive ? "nav-link active" : "nav-link"
                      }>
                      Posts
                  </NavLink>
              </div>
          </div>
      </header>
  );
}

export default Header