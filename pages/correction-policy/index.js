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
            <Link href="/ethics-policy" class="hover:underline line-clamp-1 sm:line-clamp-none">
              Correction policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Correction Policy</h1>
          </div>
          {/* article start */}
          <div>
            <h3 className="font-semibold text-[1.2rem]">Adding Corrections</h3>
            <p>While we aim for error-free content, mistakes will occur from time to time. We uphold our journalistic integrity by correcting such errors in a timely manner.
              We believe that with great power comes great responsibility. We aim to be accountable, accurate, and an authority.</p>
            <br />
            <h3 className="font-semibold text-[1.2rem]">Updating Story Threads</h3>
            <p>
              In addition to corrections, we believe it is important to update content (both related and evergreen) where possible – when new info is available. When we post news or a feature, all previous stories/features on that subject are updated with links to the new post so that readers always have the full picture no matter which of our articles on the subject they land on.
            </p>
            <br />
            <p>For corrections or update requests, please contact <a className="underline decoration-red-500" href="editorial@www.tollywoodlife.com">editorial@www.tollywoodlife.com</a></p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index