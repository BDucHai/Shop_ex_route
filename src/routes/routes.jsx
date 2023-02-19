/* Page */
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import SingleProduct from "../pages/SingleProduct";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "about", component: About },
    { path: "products", component: Product },
    { path: "products/:productId", component: SingleProduct },
    { path: "posts", component: Posts },
    { path: "*", component: Error },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
