
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../../ShareProvider/ShareProvider";
import { updateProfile } from "firebase/auth";

import Swal from 'sweetalert2'

const Registration = () => {

const {createUser}  = useContext(AuthContext);

const handleRegister = (e) => {
e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

if(!name){

  Swal.fire('Name Empty')
  return
}
if(!email){

  Swal.fire('Email Empty')
  return
}


if(!password){

  Swal.fire('Password Empty')
  return
}

if(password.length < 6){

  Swal.fire('Minimun password 6 character')
  return
  
}

const pattern = /[A-Z]/
if(!pattern.test(password)){

 Swal.fire('Please type in capital letters')
 return
  
}



    createUser(email, password)
    .then(() => {
Swal.fire('Registration Successfully')

   updateProfile(auth.currentUser, {

    displayName: name

   })
   .then(res => console.log(res))
   .catch(error => {
    console.log(error)
   })

   const userR = {email, password}
   console.log(userR)
    
  fetch("https://server-site-black-three.vercel.app/register", {
    headers: {"content-type": "application/json"},
    method: "POST",
    body: JSON.stringify(userR)
  })
  
      
  
    })
    .catch(error => {

      Swal.fire(error.message)
    })


    
}





    return (
        <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 w-[90%] mx-auto bg-orange-100 p-5 m-5 shadow-xl rounded-md">
        <h2 className="text-[20px] text-center">User Registration</h2>
            <form onSubmit={handleRegister}>  
            <div>
            <input className="border-[1px] rounded-md w-full border-[#FED700] py-3 mt-5 px-2 outline-none" type="text" name="name" placeholder="Name" id="name" />
            <input className="border-[1px] rounded-md w-full border-[#FED700] py-3 mt-5 px-2 outline-none" type="text" name="email" placeholder="Email" id="email" />
            <input className="border-[1px] rounded-md w-full border-[#FED700] py-3 mt-5 px-2 outline-none" type="password" placeholder="Password" name="password" />
            </div>
          <input type="submit" className=" font-bold rounded-md w-full hover:bg-orange-300  py-4 mt-5 px-2 outline-none bg-[#FED700]" value="Registration"  />
          <div className="my-2">
            <Link className="my-2 hover:text-blue-500 font-bold hover:underline" to="/login">Log In</Link>
          </div>
        
        </form>
        </div>
    );
};

export default Registration;