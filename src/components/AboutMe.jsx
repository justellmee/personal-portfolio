import React from "react";

const AboutMe = () => {

return (
    <div id="AboutMe" className="bg-black object-cover h-screen w-full justify-center flex flex-col ">
     <div className="  rounded-3xl absolute h-[900px] w-[500px] md:w-[1800px] flex flex-col left-28 md:left-64 backdrop-blur-[5rem] bg-white/15 shadow-2xl shadow-gray-500/30 border-gray-100"> 
        <div className="md:m-auto h-96 text-white font-serif flex flex-col content-center md:justify-center text-[20px]  md:text-[28px]">
        <h1 className="font-extrabold text-5xl text-white p-3">Skill</h1>
            <div className=" pl-10">
            <li>HTML</li>
            <li>CSS</li>
            <li>REACT JS</li>
            <li>Version Control: GitHub</li>
            </div>
        <h1 className="font-extrabold text-4xl p-3">Education</h1>
           <div className="pl-10"> 
            <li>Bachelor of Science in Information Technology (BSIT)
                 <br /><span className="pl-10">[Batangas State University],</span>
                 <br /><span className="pl-10">Undergraduate Student [2021-2023]</span>
            </li>
            </div>

        
        <h1 className="font-extrabold text-4xl p-3">Certification</h1>
            
            <div className="pl-10">
            <li>[SAP Analytics Cloud Training Session],
                <br /><span className="pl-10">[Asean Foundation],</span>
                <br /><span className="pl-10">[2023]</span>
            </li>
            </div>

        <h1 className="font-extrabold text-4xl p-3">Curricular Activity</h1>
           <div className="pl-10">
            <li>Capstone Project: LIPA GRACE ACADEMY STUDENT PERFORMANCE MONITORING WITH ANALYTICS
                <br /><span className="pl-10">Collaborated with a team of 3 to develop a student performance monitoring system. (Angular, Python And MySql)</span>
            </li>
            </div>
        </div>
        </div>
        
 </div>

   )
}


export default AboutMe