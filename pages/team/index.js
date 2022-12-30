import Link from 'next/link'
import React from 'react'
import BalramJee from '../../assets/images/Balram-Jee.webp';
import Image from 'next/image';
import { MemberCard } from './MemberCard';
const index = ({ authors }) => {

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
              Team
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Team</h1>
          </div>
          {/* article start */}
          <div>
            <p> Team ‘The Tollywood Life’ is comprised of dedicated and passionate Bollywood and Tollywood Reporters and Writers. The News Portal has been established by Balram Jee Jha and Manjeet Mahato under their Designing and Development Company <a href="https://crispmultimedia.in/" className='underline decoration-red-500'>CRISP MULTIMEDIA SOLUTIONS PVT. LTD</a> .</p>
            <br />
            <div className="flex flex-row items-center gap-4 ">
              <h3 className="text-[#e20e59] text-[1.3rem] ">Leadership</h3>
              <div className='w-[30%] h-[1px] bg-[#e20e59]'></div>
            </div>
            <br />
            <div className="flex flex-col items-center justify-center">
              <Image src={BalramJee} width={300} />
              <p className="text-center text-[1.2rem]">Balram Jee Jha</p>
              <p className="text-center text-[1.2rem] text-[#919191] italic">Founder & Director</p>
              <p className="text-center text-[1.2rem] sm:w-[80%] md:w-[60%] w-full">Balram Jee Jha has worked for various media organizations for more than 7 years, after which he had started TheTollywoodLife.com under his company CRISP MULTIMEDIA. He is one of the renowned Google Trend Analyst</p>
            </div>
            <br />
            <h2 className="text-[1.5rem] font-bold">Team Members</h2>
            <div className="flex flex-row items-center gap-4 ">
              <h3 className="text-[#e20e59] text-[1.3rem] ">Our Dedicated Writers</h3>
              <div className='w-[30%] h-[1px] bg-[#e20e59]'></div>
            </div>
            <br />
            <div className="flex flex-wrap gap-6 items-center">
              {authors.map((data, index) =>
                <MemberCard key={index} data={data} />
              )}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default index


export async function getStaticProps() {
  const res = await fetch("https://www.tollywoodlife.com/wp-json/wp/v2/users?_embed&per_page=100&authors")
  const authors = await res.json()
  return {
    props:
    {
      authors,
    },
  }

}


