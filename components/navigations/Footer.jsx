import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
import Logo from '../../assets/images/logobg.png'
import { pageLink, socialMedia } from './navigationData';

// import LinkedIn from '../../assets/images/lnkd.png'
// import RSS from '../../assets/images/rss.png'

{/* <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="ins.png" alt="" />
<img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="fb.png" alt="" />
<img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="twt.png" alt="" />
<img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="yt.png" alt="" />
<img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="lnkd.png" alt="" />
<img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="rss.png" alt="" /> */}


const categories = [
    {
        name: "Entertainment",
        slug: "entertainment",
    },
    {
        name: "Celebrity News",
        slug: "celebrity",
    },
    {
        name: "TV News",
        slug: "tv-show",
    },
    {
        name: "Technology News",
        slug: "technology",
    },
    {
        name: "Movies",
        slug: "movie",
    },
    {
        name: "Politics",
        slug: "politics",
    },
    {
        name: "Sports",
        slug: "sports",
    },
    {
        name: "General News",
        slug: "general-news",
    },
    {
        name: "Trending",
        slug: "trending",
    },
    {
        name: "Bollywood",
        slug: "bollywood",
    },
    {
        name: "Web Stories",
        slug: "our-web-stories",
    },
    {
        name: "Business",
        slug: "business",
    },
    {
        name: "Photos",
        slug: "",
    }
]

// const pageLink = [
//     {
//         name: "Contact Us",
//         slug: "contact-us",
//     },
//     {
//         name: "DMCA Policy",
//         slug: "dmca-policy",
//     },
//     {
//         name: "Editorial Policy",
//         slug: "editorial-policy",
//     },
//     {
//         name: "Fact-Checking Policy",
//         slug: "fact-checking-policy",
//     },
//     {
//         name: "Ownership, Funding, and Advertising Policy",
//         slug: "ownership-funding&ads-policy",
//     },
//     {
//         name: "Privacy Policy",
//         slug: "privacy-policy",
//     },
//     {
//         name: "RSS Feeds",
//         slug: "rss-feeds",
//     },
//     {
//         name: "Team",
//         slug: "team",
//     },
//     {
//         name: "Terms and Condition",
//         slug: "terms&condition",
//     },
//     {
//         name: "Write for us",
//         slug: "write-for-us",
//     }
// ]


const Footer = () => {
    return (
        <div className="bg-[#1d1d1d] mt-4 text-gray-50">
            <div className="flex justify-center items-center px-2 py-10">
                <div className="flex flex-col sm:flex-row justify-between sm:w-[1264px]" >
                    {/* left footer */}
                    <div className="sm:w-[60%] flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-x-1">
                                <h1 className="text-[#bf912d] blogTitle text-[20px]">NEWS SECTIONS</h1>
                                <div className="bg-[#bf912d] h-[2px] w-[82px]"></div>
                            </div>
                            <div>
                                <ul className="text-[18px] blogTitle flex sm:justify-between gap-x-2 flex-wrap">

                                    {categories.map((category, index) => (
                                        <Link href={`/category/${category.slug}`} key={index}>
                                            <li className="cursor-pointer hover:text-[#bf912d]">
                                                {category.name}
                                                <span className="ml-4">|</span>
                                            </li>
                                        </Link>
                                    ))}


                                </ul>
                            </div>
                        </div>
                        <div className="w-[100%] border-b bg-gray-50 mt-3 sm:mt-0"></div>
                        <div className="mt-[37px] sm:m-0">
                            <div className="flex gap-x-2 items-center">
                                <Image src={Logo} alt="" className="w-[220px]" />
                            </div>
                            <p className='text-[16px] font-sans text-[#dbdbdb] py-3 text-justify'>Daily Research Plot is a new-age media company that keeps its reader updated with the latest news headlines from the United States and all over the world. Entertainment, TV News, Shows Premiere Date, Release Date, Celebrity Gossips, and Travel - we help our readers to know about everything running around the world in every field</p>

                            <div className='flex items-center gap-x-4 my-2'>
                                <h1 className="text-[#bf912d] text-[20px] blogTitle whitespace-nowrap">FOllOW US</h1>
                                <div className="flex gap-x-2 sm:gap-x-3 ">
                                    {socialMedia.map((socialProfile, index) =>
                                        <Link href={socialProfile.url} key={index}>
                                            <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src={socialProfile.icon} alt={socialProfile.name} />
                                        </Link>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right footer */}
                    <div className="sm:w-[30%] mt-[60px] sm:mt-0">
                        <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d] blogTitle text-[20px] whitespace-nowrap">QUICK LINKS</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                        <ul className="text-[18px] mt-[16px] blogTitle leading-[30px]">
                            {pageLink.map((item) => (
                                <Link href={`/${item.slug}`} key={item.slug}>
                                    <li className="cursor-pointer hover:text-[#bf912d]">{item.name}</li>
                                </Link>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-[100%] px-2 bg-black py-4'>
                <p className='text-center flex items-center justify-center text-[14px] sm:text-[18px] font-[300px] blogTitle text-[#dbdbdb]'>
                    <BiCopyright /> <span>2019 - 2022 Daily Research Plot All Rights Reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default Footer