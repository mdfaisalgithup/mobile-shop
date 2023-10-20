

import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";


const SinglePage = () => {

const sees = useLoaderData()
const mycard = (data) => {

  const JsonData = JSON.stringify(data)


fetch("https://backend-khaki-one.vercel.app/addmycard", {

  headers: {"Content-Type": "application/json"},
  method: "POST",
  body: JsonData
})
.then(res => res.json())
.then(d => console.log(d))

alert("add Successfully")

}



    return (
        <div className="mx-[240px] my-10">
        <div className="w-1/2 mx-auto">
        <div className="border-[1px] glo rounded-md">  
     <div>  

<img className="rounded-md h-[250px] mx-auto" src={sees?.imageLink} alt="" /> 
<div className="m-3">


      <h2><span className="font-bold">Brand:</span> {sees?.brandName}</h2> 
        <div className="flex items-center">
        <h2><span className="font-bold">Rating: {sees?.rating}</span> </h2>/<AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
    </div>
    <h2><span className="font-bold">Name:</span> {sees?.name}</h2>
    <h2><span className="font-bold">Price:</span> {sees?.price}</h2>
     <p><span className="font-bold">Description:</span> {sees?.shortDes}</p>
    </div>

</div>


<button onClick={() => mycard({Price: sees?.price, Name: sees?.name, Image: sees?.imageLink, BrandName: sees?.brandName, Rating: sees?.rating, sortDes: sees?.shortDes})} 
className="bg-orange-300 px-4 py-2 font-semibold hover:bg-[#FED700] mx-auto block my-2 rounded-md text-[17px]">Add to Card</button>
  </div>
           

        </div>  
    </div>
    );
};

export default SinglePage;