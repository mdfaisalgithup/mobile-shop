import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-[90%] mx-auto h-[200px] flex justify-center items-center text-center m-[100px] bg-[#e2e2e2]">

       <div>
       <h2 className="font-bold text-orange-600 xl:text-[25px] my-2 lg:text-lg text-[12px]">You have gone to the wrong page, come to the right page</h2>
            <h2 className="font-semibold">404 Not Found Page</h2>
            <Link to="/"><button className="bg-black px-6 py-2 my-2 rounded-md font-bold text-white">Back</button></Link>
       </div>

        </div>
    );
};

export default ErrorPage;