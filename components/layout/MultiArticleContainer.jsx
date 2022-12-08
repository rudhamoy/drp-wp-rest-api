import React from 'react'
import facebookColoredIcon from '../../assets/icons/facebook-colored-icon.svg';
import linkedinColoredIcon from '../../assets/icons/linkedin-colored-icon.svg';
import whatsappColoredIcon from '../../assets/icons/whatsapp-colored-icon.svg';
import twiterColoredIcon from '../../assets/icons/twiter-colored-icon.svg';
import { AiOutlineMail } from 'react-icons/ai';
import NewsFooterAuthor from './NewsFooterAuthor';
import NewsHeaderAuthor from './NewsHeaderAuthor';

const MultiArticleContainer = ({ image }) => {
    const tagListClass = "bg-[#f4f4f4] cursor-pointer rounded-md p-[1px] px-3 hover:border-[1px] hover:border-[#e4e4e4] transition ease-in-out delay-300"

    return (
        <div className='bg-white rounded-md p-4 mt-3 w-[100vw] sm:w-[837px]'>
            <h1 className="text-[30px] sm:text-[36px] leading-[35px] sm:leading-[42px] font-semibold font-nunitoSans">Kung Fu Panda: The Dragon Knight Season 2
                Potential Release Date and More
            </h1>
            <h2 className="mt-[14px] text-[18px] sm:text-[20px] text-[#6d6d6d] font-nunitoSans">Kung Fu Panda: The Dragon Knight Season 2 has already not been announced and here we have its Expected Release Date, Cast, and possible Plot Info.</h2>
            <div className="w-[100%] my-3 border bg-gray-500 h-[1px]"></div>
            {/* author  */}
            <NewsHeaderAuthor />
            {/* featured img */}
            <div className="my-3 sm:h-[453px] w-[90vw] sm:w-[804px] relative rounded-md overflow-hidden">
                <img className="h-[100%] w-[100%]" src="Layer1.png" alt="" />
                <span className="bg-black text-white px-7 absolute top-0 left-0">1 of 5</span>
                <div className="absolute z-[10] bottom-2 sm:left-3 left-2 flex flex-row justify-start gap-2 items-center ">
                    <p className="font-nunitoSans text-white text-[14px]">Image Courtesy: @Netflix</p>
                </div>
                <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
            </div>

            {/* article */}
            <div className="text-[18px] font-sans mt-7">
                It hasn’t been much time since Kung Fu Panda Dragon Knight was released, and Kung Fu Panda fans are already asking for season 2 as they would never be done with the cute Panda and his fighting styles.
                <br />
                <br />
                Are you a Kung Fu Panda fan or is your child one? Or wait have you been searching on some animated and comical web series to watch one? Well if either is the answer you are in the right place.
            </div>

            <div className="my-3 sm:h-[453px] w-[90vw] sm:w-[804px] relative rounded-md overflow-hidden">
                <img className="h-[100%] w-[100%]" src="Layer_18.png" alt="" />
                <span className="bg-black text-white px-7 absolute top-0 left-0">2 of 5</span>
                <div className="absolute z-[10] bottom-2 sm:left-3 left-2 flex flex-row justify-start gap-2 items-center ">
                    <p className="font-nunitoSans text-white text-[14px]">Image Courtesy: @Netflix</p>
                </div>
                <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
            </div>

            <div className="mt-5 ">
                <h2 className="text-[30px] my-3 font-nunitoSans">Recap from Season 1</h2>
                <div className="text-[18px] font-sans">
                    Developed by Mitch Watson and Peter Hastings, “Kung Fu Panda: Dragon Knight” began to premiere on July 14 this year. All the episodes of the first season were released on the same day i.e on the 14th of July.
                    <br />
                    <br />

                    It comprised 11 episodes and each had a running time of 24 minutes. Streamed on the virtual screening platform Netflix, the show was loved among children and was a decent watch for adults.
                    <br />
                    <br />
                    <span className="font-bold text-black">Kung Fu Panda Dragon Knight Season 2: have the makers dropped any hints on its making?</span>

                    <div className="my-3 sm:h-[453px] w-[90vw] sm:w-[804px] relative rounded-md overflow-hidden">
                        <img className="h-[100%] w-[100%]" src="Layer19.png" alt="" />
                        <span className="bg-black text-white px-7 absolute top-0 left-0">3 of 5</span>
                        <div className="absolute z-[10] bottom-2 sm:left-3 left-2 flex flex-row justify-start gap-2 items-center ">
                            <p className="font-nunitoSans text-white text-[14px]">Image Courtesy: @Netflix</p>
                        </div>
                        <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
                    </div>

                    <h3 className="text-[25px] font-bold font-nunitoSans">Official Synopsis of Kungfu Panda:</h3>
                    <p className="mt-8 font-sans">
                        All the 11 episodes received a satisfactory viewership. To summarize the entire season for you: It is about when the Legendary Po teams up with an English Knight to discover and unfold magical weapons, restore his reputation and also Save the World!
                    </p>
                    <div className="bg-[#f5f5f5] p-2 my-5">
                        <p className="text-[18px] text-[#202020] font-bold font-nunitoSans">
                            <span className="font-nunitoSans text-[#feae00] italic text-[30px]">"</span>
                            Po might just be the laziest, clumsiest panda in the Valley of Peace, but he secretly dreams of becoming a kung fu legend. When the villainous snow leopard Tai Lung threatens Po's homeland, the hapless panda is chosen to fulfil an ancient prophecy and defend the Valley from attack.
                            <span className="font-nunitoSans text-[#feae00] italic text-[30px]">"</span>
                        </p>
                    </div>

                    <div className="my-3 sm:h-[453px] w-[90vw] sm:w-[804px] relative rounded-md overflow-hidden">
                        <img className="h-[100%] w-[100%]" src="Layer20.png" alt="" />
                        <span className="bg-black text-white px-7 absolute top-0 left-0">4 of 5</span>
                        <div className="absolute z-[10] bottom-2 sm:left-3 left-2 flex flex-row justify-start gap-2 items-center ">
                            <p className="font-nunitoSans text-white text-[14px]">Image Courtesy: @Netflix</p>
                        </div>
                        <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
                    </div>

                    <div className="text-[18px] text-[#202020] font-sans">
                        Streamed not more than a month ago, the fans of “Kung Fu Panda: Dragon Knight” already need a season 2. With its comical and exciting situations, the show was loved by the little ones.
                        <br />
                        <br />
                        Since it has not been much time since the show made a debut, the show-runners have not yet made anything clear. However, do not let that concern you. As soon as we receive any update on season 2, we will be here to instantly tell you.
                        <br />
                        <br />
                        Since the show is a part of the Kung Fu Panda Franchise, why not watch pick up something out of it? Till we deliver you updates on season 2 grab some popcorn and enjoy the Kung Fu Panda movies with your tiny ones.
                    </div>
                </div>

            </div>

            <div className="mt-12">
                {/* tags */}
                <div className="flex items-center gap-x-1">
                    <p className="text-[#bf912d] text-[20px] font-nunitoSans">TAGS</p>
                    <div className="w-[84px] h-[2px] bg-[#bf912d]"></div>
                </div>
                {/* tag list */}
                <div>
                    <ul className='text-[16px] flex flex-wrap gap-2 p-3'>
                        <li className={tagListClass}>Kungfu Panda</li>
                        <li className={tagListClass}>Kung Fu Panda: Dragon Knight Season 2</li>
                        <li className={tagListClass}>Netflix</li>
                    </ul>
                </div>

                {/* subscribe */}
                <div className="flex justify-center items-center my-[39px] text-[14px]">
                    <div className="border-t border-b border-[#e4e4e4] flex sm:flex-row flex-col justify-between gap-x-6 items-center py-[19px]">
                        <div className="flex items-center gap-x-1">
                            <p>Please Subscribe us at <span>Google News</span></p>
                            <img src="Layer16.png" alt="" />
                        </div>
                        <div className="flex gap-x-2 my-2">
                            <p className="whitespace-nowrap">Follow us:</p>
                            <img height={24} width={24} src="insta.png" alt="" />
                            <img height={24} width={24} src="facebook.png" alt="" />
                            <img height={24} width={24} src="twitter.png" alt="" />
                            <img height={24} width={24} src="youtube.png" alt="" />
                            <img height={24} width={24} src="linkedin.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* author */}
                <NewsFooterAuthor />

                <div className="flex justify-center items-center mt-[32px] mb-[53px]">
                    <button className="rounded-[5px] w-[297px] h-[37px] bg-[#bf912d] text-white text-[16px] font-nunitoSans">POST A COMMENT</button>
                </div>
            </div>
        </div>
    )
}

export default MultiArticleContainer