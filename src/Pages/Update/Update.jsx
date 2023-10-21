import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

const data = useLoaderData()

const {name, brandName, _id, catagory, shortDes, imageLink, price, rating} = data;

console.log(_id)



const handleAddUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const select = form.select.value;
const price = form.price.value;
const imageLink = form.imageLink.value;
const rating = form.rating.value;
const shortDes = form.shortDes.value;

const brandName = form.brandName.value;

const updateData = {name, select, price, imageLink, rating, shortDes, brandName}


fetch(`http://localhost:5000/update/${_id}`, {

headers: {"Content-Type" : "application/json"},
method: "PUT",
body: JSON.stringify(updateData)
})
.then(res => res.json())
.then(result => {

    if(result.modifiedCount > 0) {Swal.fire('Updated Succesfully')}

})

}
    return (
        <div>
          
<div className="lg:w-1/2 xl:w-1/2 w-[90%] mx-auto bg-orange-100 p-8 m-5 shadow-xl rounded-md">
<h2 className="text-[20px] text-center">Update</h2>
<form onSubmit={handleAddUpdate}>

<div className="flex xl:flex-row lg:flex-row flex-col gap-5">  

<div>
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" defaultValue ={name} name="name" placeholder="Name" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" defaultValue={price} name="price" placeholder="Price" id="" />

<select className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" name="select">

<option value={catagory && catagory}>{catagory && catagory}</option>

<option value="computer">Computer</option>
<option value="headphone">HeadePhone</option>
<option value="phone">Phone</option>
</select>


</div>

<div>
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="imageLink" defaultValue={imageLink} placeholder="Image Link" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="brandName" defaultValue={brandName}  placeholder="Brand Name" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" placeholder="Rating" defaultValue={rating}  name="rating" id="" />
</div>

</div> 
<textarea className="border-[1px] border-[#FED700] rounded-md w-full py-4 h-[100px] mt-5 px-2 outline-none" placeholder="Short description" defaultValue={shortDes}  name="shortDes" id="" />

<input type="submit" className="border-[1px] font-bold rounded-md w-full mx-auto block  py-4 mt-5 px-2 outline-none hover:bg-[#fed800e0] bg-[#fed800] cursor-pointer" value="Add to Product"  />
</form>
</div>
        </div>
    );
};

export default Update;