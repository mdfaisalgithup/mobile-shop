import { NavLink } from "react-router-dom";

import "./Header.css"
import { useContext } from "react";
import { AuthContext } from "../../ShareProvider/ShareProvider";
import Swal from "sweetalert2";

const Header = () => {

const {user, singOut} = useContext(AuthContext)


const singOuts = () => {
    singOut()
    .then(() => {
       Swal.fire("LogOut Successfully")
    })
    .catch()

}



    return (
        
        <div className="bg-[#FED700] mt-5">
            <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[200px]   py-4">

<div className="flex xl:flex-row lg:flex-row flex-col xl:items-center lg:items-center xl:justify-between lg:justify-between">
      <div>
    <img className="xl:w-[150px] lg:w-[150px] md:w-[200px] w-[250px]" src="https://i.ibb.co/ZhXkMq8/logo.webp" alt="" />
    </div>
            
            <div className="xl:space-x-12 lg:space-x-12 md:space-x-12 space-x-2 text-center">
            <NavLink className="font-semibold text-[16px]" to="/">Home</NavLink>
            {/* <NavLink className="font-semibold text-[16px]" to="/shop">Shop</NavLink> */}
            <NavLink className="font-semibold text-[16px]" to="/mycard">MyCard</NavLink>
            {
                user ? <button onClick={singOuts} className="font-semibold text-[16px]">Sing out</button> : <NavLink className="font-semibold text-[16px]" to="/login">Login</NavLink>
            }
            <NavLink className="font-semibold text-[16px]" to="/addproduct">Add Product</NavLink>
            </div>
</div>
           
           </div>
        </div>
    );
};

export default Header;