import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      < div className="flex flex-col   sm:px-[2rem] md:px-[10rem] px-2 pb-4 bg-white" >
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
            <Link href="/ownership-funding&ads-policy" class="hover:underline line-clamp-1 sm:line-clamp-none">
              ownership,funding, and advertising policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Ownership, Funding, and Advertising Policy</h1>
          </div>
          {/* article start */}
          <div>
            <p>  The Tollywood Life has been owned and operated by <span className="underline cursor-pointer">Crisp Multimedia Solutions Pvt. Ltd.</span> in New Delhi, Delhi since February 2022. The operation of The Tollywood Life across all platforms across which the brand appears: Google, Facebook, YouTube, and a host of other social media and news platforms. That said, Company does not influence or otherwise dictate the opinions of the editorial teams nor interfere with site objectives, voice, or topic selection.</p>
            <br />
            <p>
              Programmatic advertising platforms fund the majority of website operations, editorial salaries, and content payouts; still, the The Tollywood Life editorial staff, writers, and content team operate independently of the team. The two do not interact or influence each other’s work. Representation of all viewpoints, perspectives, and writers of all backgrounds are strongly encouraged by the senior editors – ensuring that objectivity and accuracy of our content are never restricted by anyone writer, editor, partner, or business division.
            </p>
            <br />
            <p className="font-bold">Note: While we strive to provide readers with a great ad experience, advertisements may not necessarily reflect the views of The Tollywood Life.
            </p>
            <br />
            <p>
              To ensure that access does not influence editorial objectivity, we abide by a thorough ethics policy that all writers, editors, and contributors must follow. Read our complete ethics policy for full details.
            </p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index