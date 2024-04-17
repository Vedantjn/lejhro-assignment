import React from 'react';
import BellIcon from './BellIcon'; // Assuming BellIcon is a component for the bell icon

const Book = () => {
  return (
    <div className="my-5">
      <div>
        <p className="text-xl sm:text-xl md:text-3xl justify-center items-center text-center text-black pt-5">We Have Something For You!</p>
      </div>
      <div className="flex items-center text-center justify-center mt-4">
        <div className="w-10 h-10">
          <BellIcon />
        </div>
        <div className="flex flex-col gap-0 text-center ml-4">
          <p className="font-bold text-red-500 text-3xl">FREE</p>
          <p className="text-black text-2xl font-semibold">MASTER CLASS</p>
        </div>
        <div className="w-1.5 bg-yellow-400 h-16 ml-2 "></div>
        <div className="text-2xl text-black font-medium w-[40%] text-start ml-2">Discover to quickly get on the fast-track path to success that leave you</div>
      </div>
      <div className="max-w-[60rem] mx-auto px-4 py-5 border border-black mt-5 relative">
        <div className="md:flex md:gap-6">
          <div className="md:w-1/2 w-full md:static md:text-start">
            <div className="text-center md:text-left text-2xl text-black">
              <p><b>Explore Free Masterclasses</b> from <b>Industry Experts</b></p>
            </div>
            <div className="flex gap-6 text-center justify-center items-center mt-3">
              <button type="button" className="w-fit inline-flex justify-center items-center gap-x-2 text-center text-red-500 ring-1 ring-red-500 bg-white font-bold rounded-md px-2 py-3">
                <a href="/events" style={{color: '#dd3b30'}}>Book Free MasterClass<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg></a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:absolute md:top-[-50px] md:bottom-[-50px] md:right-[-100px] z-10 w-[50%]">
            <img className="img-object-cover h-full" src="/joblinked/data-sci/mc1.webp" alt="free-Masterclass" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
