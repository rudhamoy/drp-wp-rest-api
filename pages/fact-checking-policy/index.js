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
            <Link href="/fact-checking-policy" class="hover:underline line-clamp-1 sm:line-clamp-none">
              fact-checking-policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Fast Checking Policy</h1>
          </div>
          {/* Article start */}
          <div>
            <p>
              We care about being perfectly clear and precise with words, headlines, and URLs and understand that words have the utmost power and act accordingly. Writers under Interesting Engineering must verify the information they gather and write at all times. This includes identifying information such as names, locations, factual statements, and accounts related to the content.
            </p>
            <br />
            <p>    Writers do their own fact-checking using their own judgment and information under the light of our Ethics Policy. Interesting Engineering is ready to and will use fact-checkers both online and within the editorial team in certain circumstances if need be. We are committed to non-partisanship, transparency of sources, transparency of funding, and being open to reasonable criticism and corrections in our organization. We check the information with all related parties before publishing it online.
            </p>
            <br />
            <p>
              If we receive a claim regarding fact-checking on our website, we first contact the source of the claim for further elaboration and supporting information. We also contact individuals and organizations who would have more information about or have relevant experience on the subject at hand, as well as researching relevant literature (news articles, scientific and medical journal articles, books, interview transcripts, statistical sources) that has bearing on the topic.
            </p>
            <br />

            <p>
              We prefer to use unbiased information and data sources viewed by our equals, as much as possible. We also alert our readers that information and data from sources, such as political advocacy organizations and sided parties, should be evaluated considerately.

            </p>
            <br />
            <p>
              Depending upon the nature and complexity of the topic, other members of the editorial staff may contribute additional research and changes to the writers’ work, and the final product will pass through the hands of our editors. Any piece that is not deemed up to our standards by one or more editors is subject to further revision and review before being released for publication.</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index