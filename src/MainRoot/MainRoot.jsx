import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";


const MainRoot = () => {
    return (
        <>


        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default MainRoot;