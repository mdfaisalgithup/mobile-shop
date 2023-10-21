import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";


const MainRoot = () => {

    const navi = useNavigation()
    return (
        <>


        <Header></Header>
       {

    navi.state == "loading" ?  <div className="flex justify-center"><span class="loading loading-spinner text-accent"></span></div> :   <Outlet></Outlet>
    }

       <Footer></Footer>
       
            
        </>
    );
};

export default MainRoot;