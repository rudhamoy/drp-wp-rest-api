import React from 'react'
import facebookColoredIcon from '../../assets/icons/facebook-colored-icon.svg';
import linkedinColoredIcon from '../../assets/icons/linkedin-colored-icon.svg';
import whatsappColoredIcon from '../../assets/icons/whatsapp-colored-icon.svg';
import twiterColoredIcon from '../../assets/icons/twiter-colored-icon.svg';

import Author from '../utils/Author'

const NewsHeaderAuthor = ({data}) => {

     var postDate = new Date(data[0].date).toLocaleDateString()
     console.log(data[0].author)
    return (
       <div>
                <div className="flex flex-row justify-between sm:items-center items-end gap-x-2">
                    <div className="flex gap-x-2 items-center">
                        <img src="author2.png" alt="" />
                        <div className="text-[13px] text-[#6d6d6d]">
                            <Author id={data[0].author} />
                            <p className="font-nunitoSans">Published On <span className="text-black font-semibold">{postDate}</span> (Updated On <span className="text-black font-semibold">August 5, 2022</span>)</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-row items-center sm:gap-x-3 gap-x-2 ml-[-60px]">
                        <img src={facebookColoredIcon} alt="" />
                        <img height={24} width={24} src={linkedinColoredIcon} alt="" />
                        <img height={24} width={24} src={whatsappColoredIcon} alt="" />
                        <img height={24} width={24} src={twiterColoredIcon} alt="" />
                        <img height={24} width={24} src="email.png" alt="" />
                    </div>
                </div>
            </div>
    )
}

export default NewsHeaderAuthor