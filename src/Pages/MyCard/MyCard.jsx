import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = () => {

const dataLoader = useLoaderData();
let totalPrice = 0;

const deleteBtn = (id) => {


fetch(`https://server-site-black-three.vercel.app/delete/${id}`, {

method: "DELETE"

})
.then(res => res.json())
.then(data => {

    if(data.deletedCount > 0) {
        
    Swal.fire("Deleted Succesfully")
    }
})

}
const payNow = () => {  Swal.fire(`Payment Succesfully ${totalPrice} BDT`) }


 
    return (
        <div className="xl:mx-[240px] lg:mx-[50px] md:mx-[30px] mx-2">
         
        <div className="">
      
 <div className="flex justify-center">

<div>
<h2 className="my-2 font-bold">My Cards</h2>

 <div className="space-y-3 border-2 rounded-md">  
   <h2 className="font-bold p-2">Total Product: {dataLoader.length}</h2>

   {
    dataLoader.map(datasee => {

            {
                totalPrice = totalPrice + parseFloat(datasee.Price)
            }
        return (
            <>


         <div className="flex gap-x-2 items-center shadow-md py-4">
         <img className="w-[20%]" src={datasee?.Image} alt="" />
            <h2>{datasee?.Name}</h2>
            <button onClick={() => deleteBtn(datasee._id)} className="bg-red-500 hover:bg-red-600 px-2 py-2 text-[#fff] font-medium rounded-md">Delete</button>
         </div>


            </>
        )
    })
   }


    <div className="border-t-2 w-full py-2 flex justify-between items-center"> 

    <button onClick={payNow} className="bg-orange-400 hover:bg-[#fcd62d] hover:text-[black] xl:px-4 lg:px-4 md:px-2 px-2 ml-2 py-2 text-[#fff] font-bold rounded-md">Pay Now</button>
    
<div className="mx-2">
<span className="font-bold">Total Price:</span> <span className="text-[#393939] font-semibold">{totalPrice}</span><span className="font-bold"> BDT</span>
</div>


   </div>
   </div>  
   </div>





 </div>

        </div>
      
         

        </div>
    );






};

export default MyCard;