import React from "react";
import {TypeAnimation} from 'react-type-animation'
import DownloadButton from "./DownloadButton";


const Main = () => {

    const fileName = "Resume"; // Define the file name here
    return (
        <div id="main">
           <img className="w-full h-screen object-cover" src="/src/assets/samuele-errico-piccarini-FMbWFDiVRPs-unsplash.jpg" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/0">  
       
            <div className="flex justify-end ">
          
            <DownloadButton fileName={fileName} />
            </div>
        

            <div className="max-w-[700px] m-auto h-full w-full flex flex-col content-start pt-52">
                <h1 className="text-white text-9xl font-bold">I'm Jussel</h1>
                <h2 className="text-white flex text-2xl">I'm a 
                <TypeAnimation
        sequence={[
        'Programmer',
        500, 
        'Coder',
        500,
        'FrontEnd Developer',
        500,
  
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />
                
                
                
                </h2>
            </div>

           
            </div>
           
        </div>
    )
    }
    export default Main