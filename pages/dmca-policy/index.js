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
            <Link href="/dmca-policy" class="hover:underline line-clamp-1 sm:line-clamp-none">
              dmca-policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">DMCA Policy</h1>
          </div>
          <h2 className="text-[1.6rem] font-semibold py-4">Digital Millennium Copyright Act Policy, Notice and Takedown Procedure</h2>
          <div>
            <p>It is our policy to expeditiously respond to proper notices of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (DMCA), (the text of which can be found at the U.S. Copyright Office Web Site, <a className="underline" href="http://www.copyright.gov">http://www.copyright.gov</a> ).</p>
            <br />
            <p>
              It is expected that all users of any part of www.tollywoodlife.com will comply with applicable copyright laws. If, however, we receive proper notification of claimed copyright infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity and/or terminating contributors, regardless of whether we may be liable for such infringement under United States law or the laws of another jurisdiction.
            </p>
            <br />
            <p>If we remove or disable access in response to such a notice, we will make a good-faith attempt to contact the creator of the affected content so that they may make a counter notification pursuant to Sections 512(g)(2) and (3) of the DMCA. We may also document notices of alleged infringement on which we act.</p>
            <br />
            <div className="">
              <h3 className="font-semibold text-[1.2rem]">INFRINGEMENT NOTIFICATION:
                Filing a DMCA Notice of Copyright Infringement</h3>
            </div>
            <br />
            <p>Upon receipt of proper notification of claimed, infringement, <a href="www.tollywoodlife.com" className="underline">www.tollywoodlife.com</a> will follow the procedures outlined herein and in the DMCA.</p>
            <br />
            <p>To file a notice of infringement with <a href="www.tollywoodlife.com" className="underline">www.tollywoodlife.com</a>, you must provide a written communication (by email, fax, and mail) that sets forth the information specified in the list below.</p>
            <br />
            <p>Please note that you will be liable for damages (including costs and attorney’s fees) if you materially misrepresent that material is infringing your copyright(s). Accordingly, if you are not sure if you are the proper copyright holder or if copyright laws protect the material of yours, you may want to consult an attorney.</p>
            <br />
            <p>To expedite our ability to process your request, please use the following format (including section numbers):
              Your contact information, including your name, address, telephone number, and, if available, an email address at which you, as the complaining party, may be contacted;</p>
            <br />
            <p>The statement: “I am the copyright owner or an agent authorized to act on the owner’s behalf of the following copyrighted material:”
              Identify with sufficient detail the copyrighted content that you believe has been infringed. (For example, “The copyrighted image at issue is the “Content Title” which can be described as “Description: literary work, image, etc” by “name of the author”, including any federal registration information if available);</p>

            <br />
            <p>
              Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the <a className="underline" href="www.tollywoodlife.com">www.tollywoodlife.com</a> to locate the material (eg. “Title of Article” at this location: <a className="underline" href=" www.tollywoodlife.com/link-to-article/"> www.tollywoodlife.com/link-to-article/</a>);
              <br />
              <p className="font-bold">Please send the infringement notice to thetollywoodlife@gmail.com.</p>
              <p>Please allow 1-3 business days for an email response.</p>
            </p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index