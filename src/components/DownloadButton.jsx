import React from 'react';
import examplePDF from '../assets/jusselcv.pdf';

const DownloadButton = ({ fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = examplePDF;
    link.setAttribute('download', fileName); // Use the fileName prop here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='text-white border-double border-4 border-white p-4 px-5 font-extrabold font font-serif rounded m-12 cursor: pointer; hover:bg-gray-700' onClick={handleDownload}>
      {fileName}
    </button>
  );
};

export default DownloadButton;


