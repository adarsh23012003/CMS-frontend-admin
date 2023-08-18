import React from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

function NoPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-[#34383C]'>
        <div className='bg-white p-5 rounded-md sm:w-1/4 mx-2'>
          <h1 className='text-xl font-bold pb-5'>Page Not found</h1>
          <p className='pb-5 text-[16px]'>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <button
            className='underline hover:no-underline text-[#054861] flex p-0 gap-0 items-center font-semiboldn pb-5'
            onClick={() => {
              navigate("/");
            }}
          >
            <div>
              <BiChevronLeft size={25} className='stroke-[1.2]' />
            </div>
            <div className='font-semibold'>Back to our site</div>
          </button>
          <hr class='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
          <p className='pt-3 text-[16px]'>
            If this is your site, and you weren't expecting a 404 for this path,
            please visit Netlify's
            <a
              href='http://www.netlify.com/docs/troubleshooting/#troubleshooting'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:no-underline text-[#054861] font-semibold px-1'
            >
              "page not found" support guide
            </a>
            for troubleshooting tips.
          </p>
        </div>
      </div>
    </>
  );
}

export default NoPage;
