import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BalramJee from '../../assets/images/Balram-Jee.webp';

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
              About Us
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">About Us</h1>
          </div>
          {/* article start */}
          <div>


            <p>The Tollywood Life is the Online Media Platform where we provide our readers and users Tollywood News, Bollywood News, Celebrity Gossips, Interviews, TV Serial Updates, Web Series Release Date and Reviews, Celebrity Spotted Videos, Photos and Videos of Celebrities, Breaking News and various event coverages</p>
            <br />


            <p>
              Our platforms and channels such as Facebook Page, Instagram Account, Youtube Channel and Twitter Handle has over thousands of followers. The Website has been started by Balram Jee Jha and Manjeet Mahato under the Media and Designing Agency CRISP MULTIMEDIA SOULTIONS PVT. LTD. in 2022 after several years of experience in Digital Platforms and Media Agencies.
            </p>
            <br />
            <p>The Team Tollywood Life has headquarter in New Delhi, India. From where we post and manage our website and Social Media Platforms. we have more than 50 News Reporters, Content Writers and other executive right now.</p>
            <br />
            <h3 className="font-semibold text-[1.4rem]">Our Leadership</h3>
            <div className="py-2">
              <Image src={BalramJee} width={300} />
            </div>
            <p>Balram Jee Jha
              <br />
              Founder, Tollywood Life
              <br />
              You can follow him on <a className="underline decoration-red-500" href="https://www.facebook.com/BalramJeJha">Facebook</a> </p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index