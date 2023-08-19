import React, { useRef, useState } from "react";
import { formInstance } from "../Axios/axiosConfig";
function Dialog({ visible, close }) {
  const [uploadFile, setUploadFile] = useState("");
  const inputRef = useRef(null);

  const UploadPDF = () => {
    var formData = new FormData();
    formData.append("pdf", uploadFile);
    formInstance
      .post("/subject/upload", formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {visible && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <div className='bg-white p-14 rounded-md'>
              <div className=' pb-5 pt-5 flex justify-center'>
                <input
                  className='w-1/2 hidden'
                  ref={inputRef}
                  title=''
                  type='file'
                  onChange={(e) => {
                    setUploadFile(e.target.files[0]);
                  }}
                />
                <button
                  className='p-2 rounded-md border border-black text-lg'
                  onClick={() => {
                    inputRef.current.click();
                  }}
                >
                  Select Pdf
                </button>
              </div>
              <div className='flex gap-5 justify-center'>
                <button
                  onClick={() => {
                    close();
                  }}
                  className='px-3 py-1.5 rounded-md bg-gray-300 hover:bg-gray-400 hover:text-white'
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    if (uploadFile) {
                      UploadPDF();
                      close();
                    }
                  }}
                  className={
                    uploadFile
                      ? "px-3 py-1.5 rounded-md bg-green-400 text-white"
                      : "px-3 py-1.5 rounded-md bg-green-300 "
                  }
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Dialog;
