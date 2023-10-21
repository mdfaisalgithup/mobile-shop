import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        
        <div className="w-full h-[300px] bg-[#000000c9]">
<div className="xl:mx-[240px]">
<div className="flex justify-center items-center h-full">
<div><h2 className="text-white font-bold text-center py-2 text-[18px]">Our Mobile Shop</h2>      
<h2 className="text-white text-center font-bold">Product Brand: </h2>      
          <div className="flex gap-x-5 justify-center">
            <div>
        

            <div><Link className="text-[#afafaf] hover:underline font-bold" to="https://server-site-black-three.vercel.app/brand/oppo">Oppo</Link></div>
              <div><Link className="text-[#afafaf] hover:underline font-bold" to="https://server-site-black-three.vercel.app/brand/xiaomi">Xiaomi</Link></div>
              <div><Link className="text-[#afafaf] hover:underline font-bold" to="https://server-site-black-three.vercel.app/brand/edifier">Edifier</Link></div>
            </div>
      </div>
      
      <div className="text-center mt-5 flex gap-x-5 justify-center">
   <Link to=""><FaGoogle className="text-white text-[26px] hover:text-orange-400"></FaGoogle></Link>
   <Link to=""><BiLogoFacebookCircle className="text-white text-[26px] hover:text-orange-400"></BiLogoFacebookCircle></Link>
<Link to=""><AiFillTwitterCircle className="text-white text-[26px] hover:text-orange-400"></AiFillTwitterCircle></Link>
    </div>

<div className="my-10">
<h2 className="font-bold text-center text-[#c8c8c8]">CopyRight 2023</h2>
</div>
      </div>

</div>





</div>


        </div>
    );
};

export default Footer;