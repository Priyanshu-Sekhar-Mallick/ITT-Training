import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

function Layout(){
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
export default Layout;