import { Navigate, Outlet } from "react-router-dom";
const userAuth = () => {
    const userIsLoggedIn = true;
    return userIsLoggedIn;
};

function PrivateRoute() {
    const isAuth = userAuth();
    return isAuth ? <Outlet /> : <Navigate to="/Login" />;
}
export default PrivateRoute;
