import React from 'react'
import authorFb from '../../assets/svg/authorFb.svg'
import authorWa from '../../assets/svg/authorWa.svg'
import authorEmail from '../../assets/svg/authorEmail.svg'
import authorTwt from '../../assets/svg/authorTwt.svg'
import authorLnkd from '../../assets/svg/authorLnkd.svg'

const NewsFooterAuthor = () => {
    return (
        <div className="flex sm:items-center bg-[#f4f4f4] rounded-[4px] p-2 sm:p-4 gap-x-2">
            <div>
                <div className="p-[2px] border-2 border-black rounded-full h-[120px] w-[120px]">
                    <img className="rounded-full h-[100%] w-[100%]" src="Layer_17.png" alt="" />
                </div>
            </div>
            <div>
                <p className="text-[18px] text-[#bf912d] font-nunitoSans mb-[5px] cursor-pointer">Manjeet Mahato</p>
                <p className="text-[14px] text-[#4b4b4b] font-nunitoSans">Well, a Marvel and DC Comics Nerd by Passion, Content Writer, and Designer by Profession. Completed BSc. Graphic and animation from MCU, Bhopal</p>

                <div className="flex items-center gap-x-2 mt-[10px]">
                    <p className="text-[#bf912d] text-[12px] font-nunitoSans">Reach me at :</p>
                    <div className="flex gap-x-[11px] items-center cursor-pointer">
                        <img height={16} width={16} src={authorFb} alt="" />
                        <img height={16} width={16} src={authorLnkd} alt="" />
                        <img height={16} width={16} src={authorWa} alt="" />
                        <img height={16} width={16} src={authorTwt} alt="" />
                        <img height={18} width={18} src={authorEmail} alt="" />
                        {/* <img height={16} width={16} src="email.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFooterAuthor