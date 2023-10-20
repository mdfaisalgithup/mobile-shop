import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../ShareProvider/ShareProvider";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firbase.config";
import Swal from "sweetalert2";



const Login = () => {

const {signUser} = useContext(AuthContext)

const signUserForm = (e) => {e.preventDefault()
const form = e.target;
const email = form.email.value;
const password = form.password.value;


if(!email){

    Swal.fire("Email Empty")
    return
}

if(!password){

       Swal.fire("Password Empty")
    return
}




signUser(email, password)
.then(res => {
    console.log(res.user)

form.reset()
})
.catch((error) => {
    Swal.fire(error.message)
})

}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const handleGoogle = () => {

signInWithPopup(auth, provider)
.then(res => {

    console.log(res.user)
})
.catch(error => {

    console.log(error)

})


    
}




    return (

        <>

<div className="xl:w-1/3 lg:w-1/2 md:w-1/2 w-[90%] w-1/3 mx-auto bg-orange-100 p-5 m-5 shadow-xl rounded-md">
<h2 className="text-[20px] text-center">User Login</h2>
    <form onSubmit={signUserForm}>  
    <div>
    <input className="border-[1px] rounded-md w-full border-[#FED700] py-3 mt-5 px-2 outline-none" type="text" name="email" placeholder="Email" id="" />
    <input className="border-[1px] rounded-md w-full border-[#FED700] py-3 mt-5 px-2 outline-none" type="password" placeholder="Password" name="password" />
    </div>
  <input type="submit" className="font-bold rounded-md w-full py-4 mt-5 px-2 outline-none hover:bg-orange-300 bg-[#FED700]" value="Log In"  />
<div className="my-2">
<Link className="font-semibold hover:text-blue-500 hover:underline" to="/registration">Register</Link>
</div>


<div onClick={handleGoogle} className="hover:bg-[#d2d2d2] cursor-pointer rounded-md xl:w-1/3 lg:w-1/2 md:w-1/2 w-[90%] mx-auto bg-[#efebace4] p-5">
<h2 className="font-bold text-center">Google Login</h2>

<FcGoogle className="text-[30px] mx-auto"></FcGoogle>


</div>


</form>
</div>


        </>

    );
};

export default Login;