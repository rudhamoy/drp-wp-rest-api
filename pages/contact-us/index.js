import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <div className="flex flex-col  sm:px-[2rem] md:px-[10rem] px-2 pb-4 bg-white">
        {/* breadcrumb */}
        <div class="text-[#6d6d6d] font-nunitoSans text-[14px] sm:text-[16px] py-2">
          <div class="container flex items-center gap-x-1 py-4 mx-auto overflow-x-auto whitespace-nowrap">

            <Link href="/" class=" hover:underline">
              Home
            </Link>
            <span class="text-[#bf912d] dark:text-gray-300 rtl:-scale-x-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            {/* <MdArrowForwardIos className="text-[#bf912d] text-xl" /> */}
            <Link href="/contact-us" class="hover:underline line-clamp-1 sm:line-clamp-none">
              contact-us
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Contact Us</h1>
          </div>
          {/* start of the content */}
          <div>
            <p>
              If you’d like to send us some feedback, would like to advertise with us or become an author on our blog, please use the form below to connect with us. You can also email us at <span className="font-bold">info@tollywoodlife.com</span>. We read every email and usually reply within one business day.
            </p>
            <br />
            <h4 className="text-[1.2rem] font-bold">Registered Office</h4>

            <p>
              E-46/7, Okhla Phase II, New Delhi – 110020
              <br />
              Email: info@www.tollywoodlife.com
              <br />
              Contact: +91-9211260139
              <br />
            </p>
            <br />
            <form action="#" className="sm:w-[100%] md:w-[50%] w-full flex flex-col gap-2 p-6 bg-slate-500">
              <div className="flex items-center justify-end gap-4 ">
                <p className="font-bold text-[#f0f0f0]">Name<sup className="text-red-500">*</sup> :</p>
                <input className="border px-4 py-1 w-[70%]" placeholder='type your name..' type="text" />
              </div>
              <div className="flex items-center justify-end gap-4 ">
                <p className="font-bold text-[#ffffff]">Email<sup className="text-red-500">*</sup> :</p>
                <input className="border px-4 py-1 w-[70%]" placeholder='youemail@domain.com' type="email" />
              </div>
              <div className="flex items-center justify-end gap-4 ">
                <p className="font-bold text-[#ffffff]">Website :</p>
                <input className="border px-4 py-1 w-[70%]" placeholder='www.example.com' type="text" />
              </div>
              <div className="flex items-start justify-end gap-4 ">
                <p className="font-bold text-[#ffffff]">Message<sup className="text-red-500">*</sup> :</p>
                <textarea rows="6" className="border px-4 py-1 w-[70%]" placeholder="Your message..." type="text" />
              </div>
              <div className="flex items-center justify-end">
                <div className="px-4 py-2 bg-blue-700 cursor-pointer rounded-lg w-[10rem] text-center text-white font-bold">Submit</div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default index