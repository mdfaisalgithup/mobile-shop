import Swal from "sweetalert2";



const AddProduct = () => {


    const handleAddProduct = (e) => {

        e.preventDefault()
const form = e.target;

const name = form.name.value;
const price = form.price.value;
const catagory = form.select.value;
const imageLink = form.imageLink.value;
const brandName = form.brandName.value;
const rating = form.rating.value;
const shortDes = form.shortDes.value;

const addProducts = {
    name, price, catagory, imageLink, brandName, rating, shortDes

}

 
if(!name || !price || !price || !catagory || !imageLink || !brandName || !rating || !shortDes){

    Swal.fire("You have not provided any information") 
    return
}



fetch('https://server-site-black-three.vercel.app/addprouct', {
headers: {
    'content-type' : 'application/json'
},
method: "POST",
body: JSON.stringify(addProducts)


})
.then(res => res.json())
.then(() => Swal.fire("Add Product Successfully") )
form.reset()

    }





    return (

<div className="xl:w-1/2 lg:w-1/2 md:w-[70%] w-[90%] xl:mx-auto lg:mx-auto md:mx-auto bg-orange-100 p-8 m-5 shadow-xl rounded-md">
<h2 className="text-[20px] text-center">Add product</h2>
<form onSubmit={handleAddProduct}>

<div className="flex xl:flex-row flex-col gap-5">  

<div>
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="name" placeholder="Name" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="price" placeholder="Price" id="" />

<select className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" name="select">
<option value="phone">Phone</option>
<option value="headphone">Headphone</option>
<option value="headphone">Computer</option>
</select>


</div>

<div>
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="imageLink" placeholder="Image Link" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" name="brandName" placeholder="Brand Name" id="" />
<input className="border-[1px] border-[#FED700] rounded-md w-full py-4 mt-5 px-2 outline-none" type="text" placeholder="Rating" name="rating" id="" />

</div>

</div> 
<textarea className="border-[1px] border-[#FED700] rounded-md w-full py-4 h-[100px] mt-5 px-2 outline-none" placeholder="Short description" name="shortDes" id="" />

<input type="submit" className="border-[1px] font-bold rounded-md w-full mx-auto block  py-4 mt-5 px-2 outline-none hover:bg-[#fed800e0] bg-[#fed800] cursor-pointer" value="Add to Product"  />
</form>
</div>

    );
};

export default AddProduct;