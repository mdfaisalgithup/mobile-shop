import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = () => {

const dataLoader = useLoaderData();
let totalPrice = 0;

const deleteBtn = (id) => {


fetch(`https://backend-khaki-one.vercel.app/delete/${id}`, {

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
            <h2 className="my-2 font-bold">My Cards</h2>
        <div className="border-2 rounded-md p-5 w">
 <div className="flex justify-center">

 <div className="space-y-3">
   <h2 className="font-bold">Total Product: {dataLoader.length}</h2>

   {
    dataLoader.map(datasee => {

            {
                totalPrice = totalPrice + parseFloat(datasee.Price)
            }
        return (
            <>
         <div className="flex gap-x-2 items-center">
         <img className="w-[20%]" src={datasee?.Image} alt="" />
            <h2>{datasee?.Name}</h2>
            <button onClick={() => deleteBtn(datasee._id)} className="bg-red-500 hover:bg-red-600 px-2 py-2 text-[#fff] font-medium rounded-md">Delete</button>
    

         </div>


            </>
        )
    })
   }

    <div className="border-t-2  w-full py-2 flex justify-between"> 
    
    <button onClick={payNow} className="bg-orange-400 hover:bg-[#fcd62d] hover:text-[black] px-4 py-2 text-[#fff] font-bold rounded-md">Pay Now</button>
    
    <h2><span className="font-bold">Total Price:</span> {totalPrice}<span className="font-bold"> BDT</span></h2>

   
   </div>  
</div>
 </div>

        </div>
      
         

        </div>
    );






};

export default MyCard;