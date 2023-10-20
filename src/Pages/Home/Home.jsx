import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";


const Home = () => {
const [dataStore, setStore] = useState([])
const AllProduct = useLoaderData()

fetch("https://backend-khaki-one.vercel.app/catagory/headphone")
.then(res => res.json())
.then(result => setStore(result))


    return (

   <>
<div className="w-full xl:h-[700px] lg:h-[700px] md:h-[600px] h-[500px] relative bg-[#c0c0c062]">

<img className="w-full h-full opacity-40" src="https://i.ibb.co/sWS2JTP/christian-wiediger-70ku6-P7kgmc-unsplash.jpg" alt="" />


<div className="p-5 absolute top-0 w-full h-full flex justify-center items-center">


<div className="xl:w-1/2 lg:w-1/2 w-full">
<div className="space-y-5">
<h2 className="font-bold text-[#000] xl:text-[35px] lg:text-[35px] md:text-[30px] text-[20px] text-center">Our Best Shop And Best Service</h2>

<p className="font-bold text-[#000] text-center xl:text-[20px] text-[13px]">The Xiaomi Pad 6 features a stunning 11-inch WQHD+ display with a 144Hz variable refresh rate, Dolby Vision, and HDR10 support. Powered by the Snapdragon 870 Mobile Platform, it delivers flagship-level performance, making it suitable for tasks ranging from gaming to video editing.</p>

</div>
<div className="my-5 text-center">
<Link className="px-6 rounded-md py-3 bg-orange-400 font-bold hover:bg-orange-600 text-white">Buy Now</Link>
</div>

</div>


</div>


</div>


   
<div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px] mx-[10px] py-4">
    <h2 className="font-semibold my-2">All Products</h2>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">


   {

  AllProduct.slice(0, 8)?.map((shows) => {



       return (

        <>
        <div className="border-[1px] rounded-md">
        <div>
        <img className="rounded-md mx-auto h-[250px]" src={shows?.imageLink} alt="" />
        <div className="m-5">  
        <div>
        <h2><span className="font-bold">Name:</span> {shows?.name.split(" ").slice(0, 3) + ""} </h2>
        <h2 className="cursor-pointer 0"><span className="font-bold">Brand Name: </span> 
        <Link to={`/brand/${shows?.brandName}`}><span className="hover:text-blue-500">{shows?.brandName}</span></Link>
           </h2>

        <div className="flex items-center">
        <h2><span className="font-bold">Rating:</span> <span className="text-[12px]">{shows?.rating}</span> </h2> /<AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
        </div>
        <h2><span className="font-bold">Price: </span> {shows?.price} BDT</h2>
        </div>
        </div>
        <Link to={`singles/${shows.id}`}><button className="bg-[#FED700] rounded-b-md hover:bg-[#f39c12] px-4 py-2 font-bold w-full">Details</button></Link>
        </div>
      </div>
</>

       )


 
})
   }
</div>


{/* <button type="button" onClick={showAll} className="bg-[#FED700] rounded-b-md hover:bg-[#f39c12] px-4 py-2 font-bold w-full">Show All</button>
   */}

</div>

<div className="xl:mx-[240px] lg:mx-[150px] mx-[10px] my-5">
   <div className="flex xl:flex-row lg:flex-row gap-4 flex-col xl:justify-between lg:justify-between">

<div className="flex justify-center w-full bg-[#e1e1e1] p-5">

 <div>  
   <h2 className="font-semibold text-center">Fast Delivery</h2>
   <p className="text-center">24/8 Hour</p></div>
</div>

<div className="flex justify-center w-full bg-[#e1e1e1] p-5">

 <div>  
 <h2 className="font-semibold text-center">Free Delivery</h2>
<p className="text-center">Return Delivery</p>
</div>

</div>

<div className="flex justify-center w-full bg-[#e1e1e1] p-5">
 <div>  
 <h2 className="font-semibold text-center">All Time</h2>
  <p className="text-center">Call Center Open 24 Hour</p>
   
   </div>
</div>




</div>

</div>
  


<div className="xl:mx-[240px] lg:mx-[150px] mx-[10px] my-20">
<h2 className="font-semibold my-2">Headphone Shop</h2>

<div>
<div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">


{

dataStore?.map((headphone) => {



    return (

     <>
     <div className="border-[1px] rounded-md">
     <div>
     <img className="rounded-md h-[250px] mx-auto" src={headphone?.imageLink} alt="" />
     <div className="m-5">  
     <div>
     <h2><span className="font-bold">Name:</span> {headphone?.name.split(" ").slice(0, 3) + ""} </h2>
     <h2 className="cursor-pointer 0"><span className="font-bold">Brand Name: </span> 
     <Link to={`/brand/${headphone?.brandName}`}><span className="hover:text-blue-500">{headphone?.brandName}</span></Link>
        </h2>

     <div className="flex items-center">
     <h2><span className="font-bold">Rating:</span> <span className="text-[12px]">{headphone?.rating}</span> </h2> /<AiFillStar className="text-orange-300"></AiFillStar>
     <AiFillStar className="text-orange-300"></AiFillStar>
     <AiFillStar className="text-orange-300"></AiFillStar>
     </div>
     <h2><span className="font-bold">Price: </span> {headphone?.price} BDT</h2>
     </div>
     </div>
     <Link to={`singles/${headphone.id}`}><button className="bg-[#FED700] rounded-b-md hover:bg-[#f39c12] px-4 py-2 font-bold w-full">Details</button></Link>
     </div>
   </div>
</>

    )



})
}
</div>
</div>


</div>


<div className="xl:mx-[240px] lg:mx-[100px] mx-[10px] my-2 ">

<div className="flex justify-between xl:flex-row lg:flex-row flex-col gap-6 ">

<div className=" w-full text-center bg-[#e2e2e1] hover:bg-[#f4ffab] p-6 rounded-md">

<BsPersonCircle className="text-[30px] mx-auto text-orange-300"></BsPersonCircle>
<h2 className="font-bold">Rakib</h2>
<p className="italic">"Best Service"</p>
</div>

<div className="w-full text-center bg-[#e2e2e1] hover:bg-[#f4ffab]  p-6 rounded-md">
   <BsPersonCircle className="text-[30px] mx-auto text-orange-300"></BsPersonCircle>
<h2 className="font-bold">Sakib</h2>
<p className="italic">"Thank you Bro, Awsome Service"</p>
</div>


<div className="w-full text-center bg-[#e2e2e1] hover:bg-[#f4ffab]  p-6 rounded-md">
   <BsPersonCircle className="text-[30px] mx-auto text-orange-300"></BsPersonCircle>
<h2 className="font-bold">Kobir</h2>
<p className="italic">"Best Service good Delivery Man"</p>
</div>
</div>

</div>

 </>
 )



}

export default Home;