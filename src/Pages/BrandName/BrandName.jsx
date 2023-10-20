import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const BrandName = () => {
const singleProduct = useLoaderData();

console.log(singleProduct)

    return (
        <div className="lg:mx-[150px] xl:mx-[240px] md:mx-[100px] mx-[10px] my-10">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

          {
            singleProduct.map((sees, idx) => {


                return(
                    <> 
     <div className="border-[1px] rounded-md">  
     <div key={idx}>  

      <img className="rounded-md" src={sees?.imageLink} alt="" /> 

<div className="m-3">
      <h2><span className="font-bold">Brand:</span> {sees?.brandName}</h2> 
        <div className="flex items-center">
        <h2><span className="font-bold">Rating: {sees.rating}</span> </h2>/<AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
        <AiFillStar className="text-orange-300"></AiFillStar>
    </div>
    <h2><span className="font-bold">Name:</span> {sees?.name}</h2>
    <h2><span className="font-bold">Price:</span> {sees?.price}</h2>

   <div className="flex gap-x-5 justify-between my-2">
   <Link to={`/singles/${sees.id}`}><button className="bg-[#FED700] rounded-md hover:bg-[#f39c12] px-4 py-2 font-bold w-full">Details</button></Link>
   <Link to={`/update/${sees.id}`}><button className="bg-[#FED700] rounded-md hover:bg-[#f39c12] px-4 py-2 font-bold w-full">Update</button></Link>
   </div>
    
    </div>
</div>


  </div>
                     
                       
                    </>
                )
            } )
          }

        </div>  
    </div>
    )
};

export default BrandName;