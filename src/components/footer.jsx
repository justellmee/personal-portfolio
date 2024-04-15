import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
 return (
        
<footer id="Footer">
    <div className="bg-black object-cover text-white  p-11 border-t-2 border-gray-900">
      <div className="  justify-center flex items-center ">
      <h5 className="  px-3 font-serif text-2xl">Get connected with me in social media </h5> </div>
         <a className=" px-3 text-white flex items-start p-2 w-64 " href="https://m.me/justellmee "><FaFacebookMessenger size={30}/><h1 className="px-3 text-2xl">Messenger</h1></a>
         <a className=" px-3 text-white flex items-start p-2 w-64" href="https://github.com/justellmee "><AiFillGithub size={30}/><h1 className="px-3 text-2xl">Github</h1></a>
         <a className=" px-3 text-white flex items-start p-2 w-96" href="mailto:jusseldejesus42@gmail.com"><AiOutlineMail size={30}/><h1 className="px-3 text-2xl">jusseldejesus42@gmail.com</h1></a>
        
         <p className="flex justify-end">&copy; {new Date().getFullYear()} Jussel Elejorde. All rights reserved.</p>


      
      </div>
    </footer>
 )

}

export default Footer