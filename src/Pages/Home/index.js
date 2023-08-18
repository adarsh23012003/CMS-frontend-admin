import React, { useEffect, useState } from "react";
import { instance } from "../../Axios/axiosConfig";
import Dialog from "../../Components/Dialog";
import { FaRegFilePdf } from "react-icons/fa";

function Home() {
  const [dialog, setDialog] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("/subject");
  const [currentPDF, setCurrentPDF] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    function getData() {
      instance
        .get(dropDownValue)
        .then(function (response) {
          if (dropDownValue === "/subject/allPDF") {
            setCurrentPDF("");
            setCurrentPDF(response.data.pdf);
          } else {
            setCurrentPDF("");
            setCurrentPDF(response.data.upload);
            // console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error.response.data);
          setError(error.response.data);
        });
    }
    getData();
  }, [dropDownValue]);

  return (
    <>
      <div>
        {!error ? (
          <>
            <h1 className='text-5xl text-red-500 font-semibold text-center'>
              ALL PDF
            </h1>
            {/* ********** Dialog box ********** */}
            <div>
              {dialog && (
                <>
                  <Dialog visible={dialog} close={() => setDialog(false)} />
                </>
              )}
            </div>
            {/* ********** DropDown and PDF upload button ********** */}
            <div className='px-5 sm:px-32 md:px-24 lg:px-96 pt-10 flex justify-between'>
              <div className='text-center'>
                <select
                  name='DropDown'
                  className='border p-0.5 rounded-md'
                  onChange={(e) => {
                    setDropDownValue(e.target.value);
                  }}
                >
                  <option value='/subject'>All Pdf</option>
                  <option value='/subject/allPDF'>All My Pdf</option>
                </select>
              </div>
              <div>
                <button
                  onClick={() => setDialog(true)}
                  className='px-3 py-1.5 rounded-md bg-green-300 hover:bg-green-400 hover:text-white cursor-pointer'
                >
                  Upload Pdf
                </button>
              </div>
            </div>
            {/* ************* pdf *********** */}
            <div className='px-5 sm:px-32 md:px-24 lg:px-96 flex gap-10 pt-5 flex-wrap'>
              {currentPDF.length ? (
                currentPDF.map((element) => {
                  return (
                    <>
                      <a
                        href={element.pdf}
                        target='_blank'
                        key={element.id}
                        className='rounded-md p-5 border bg-green-100'
                      >
                        <FaRegFilePdf size={50} className='fill-red-400' />
                      </a>
                    </>
                  );
                })
              ) : (
                <span className='text-xl hover:text-red-500'>No PDF Found</span>
              )}
            </div>
          </>
        ) : (
          <>{error}</>
        )}
      </div>
    </>
  );
}

export default Home;
