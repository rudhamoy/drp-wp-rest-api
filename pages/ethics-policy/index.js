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
              Ethics policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Ethics Policy</h1>
          </div>
          {/* article start */}
          <div>
            <p>Our entertainment brands do not publish personal attacks against people and companies in the industries we cover, or against colleagues in our industry. We stress objectivity in reporting topics of a sensitive nature.</p>
            <br />
            <p>We strive to deliberately omit editorial bias in the various topics we cover.</p>
            <br />
            <h3 className="font-semibold text-[1.2rem]">Giving Credit and Acquiring Written Permission</h3>
            <p>Unless news (press releases) come from official sources or their PR affiliates, we always provide link credit to original sources. We believe it is our responsibility to contribute to the online publishing ecosystem and best journalism practices.
              For images, we credit the source.</p>
            <br />
            <p>For corrections or update requests, please contact <a className="underline decoration-red-500" href="editorial@www.tollywoodlife.com">editorial@www.tollywoodlife.com</a></p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index