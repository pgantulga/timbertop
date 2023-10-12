import Header from "./header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";



function Layout() {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
export default Layout;