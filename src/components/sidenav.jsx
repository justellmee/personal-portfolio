
import { ImMenu } from "react-icons/im";
import React, {useState} from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Sidenav = () => {

    const [nav, setNav] = useState (false)
    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <div>
        <ImMenu color="white" size={30} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        {
            nav ? (
                <div className="fixed w-full h-screen bg-white/20 flex flex-col justify-center items-center z-20">
                    <a  onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaHome size={20}/>
                    <span className="pl-4 ">Home</span>
                    </a>

                    <a onClick={handleNav} href="#AboutMe" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <CgProfile size={20}/>
                    <span className="pl-4 ">About me</span>
                    </a>

                    <a onClick={handleNav} href="#Footer" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <MdOutlineContactPhone size={20}/>
                    <span className="pl-4 ">Contact</span>
                    </a>
                    
                </div>
            ) : (
                ''
            ) }

                <div className="md:block hidden fixed top-[40%] z-10 mx-20">
                    <div className="flex flex-col">

                        <a
                        href="#main" className="  m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <FaHome color="white" size={35}/>
                        </a>

                        <a href="#AboutMe" className=" m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <CgProfile color="white" size={35}/>
                        </a>


                        <a href="#Footer" className=" m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <MdOutlineContactPhone color="white" size={35}/>
                        </a>
                    </div>
                </div>




     </div>
    )
}

export default Sidenav