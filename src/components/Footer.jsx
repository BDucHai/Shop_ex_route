import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="flex justify-center">
                <NavLink to="/" className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                    Home
                </NavLink>
                <NavLink to="about" className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                    About
                </NavLink>
                <NavLink to="products" className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                    Products
                </NavLink>
                <NavLink to="posts" className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                    Posts
                </NavLink>
            </nav>
            <div className="copyrights">
                &copy; 2022 <Link to="/"> WebStylePress</Link> - All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
