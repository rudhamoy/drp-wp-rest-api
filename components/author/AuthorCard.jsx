import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import instagramIcon from '../../assets/svg/insta@4x.svg';
import facebookIcon from '../../assets/svg/facebook@4x.svg';
import twitterIcon from '../../assets/svg/twitter@4x.svg';
import linkedinIcon from '../../assets/svg/linkedin@4x.svg';
import nadiaUsman from '../../assets/images/nadia-usman.png';
const AuthorCard = () => {
    return (
        <div>
            <div className="p-4 rounded-[6px] border bg-[#fffbf1] my-3 w-[95vw] h-[181px] sm:h-[179px] sm:w-[837px]">
                <div className="flex gap-x-4">
                    <div className="overflow-hidden rounded-full ">
                        <img className="h-[70px] sm:h-[125px] w-[240px] sm:w-[180px] rounded-full" src={nadiaUsman} alt="" />
                    </div>
                    <div>
                        <h1 className="font-[800] text-[20px] font-nunitoSans">Nadia Usman</h1>
                        <p className='text-[#6d6d6d] text-[12px] sm:text-[16px] font-[400] font-nunitoSans'>Well, a Content Writer, and Designer by Profession and Marvel & DC Comics Nerd by Passion, Completed BSc. Graphic and animation from MCU, Bhopal</p>
                        <div className="flex gap-x-3 text-xl mt-4">

                            <img className="cursor-pointer" height={25} width={25} src={instagramIcon} alt="" />
                            <img className="cursor-pointer" height={25} width={25} src={facebookIcon} alt="" />
                            <img className="cursor-pointer" height={25} width={25} src={twitterIcon} alt="" />
                            <img className="cursor-pointer" height={25} width={25} src={linkedinIcon} alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard