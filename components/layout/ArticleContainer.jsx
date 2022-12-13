import React from 'react'
import parseHTML from "html-react-parser";
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import EmbedYoutube from './EmbedYoutube';
import NewsFooterAuthor from './NewsFooterAuthor';
import NewsHeaderAuthor from './NewsHeaderAuthor';

const ArticleContainer = ({ image, data }) => {

    const tagListClass = "bg-[#f4f4f4] cursor-pointer rounded-md p-[1px] px-3 "

    return (
        <div className='bg-white rounded-md p-4 mt-[18px] w-[100vw] sm:w-[837px]'>
            <h1 className="text-[30px] sm:text-[36px] leading-[35px] sm:leading-[42px] font-semibold font-nunitoSans">{data[0].title.rendered}
            </h1>
            <h2 className="mt-[14px] text-[18px] sm:text-[20px] text-[#6d6d6d] font-nunitoSans">{data[0].yoast_head_json.og_description}</h2>
            <div className="w-[100%] my-3 border bg-gray-500 h-[1px]"></div>
            {/* author  */}
            <NewsHeaderAuthor data={data} />
            {/* featured img */}
            {image ? (<div className="my-3 w-[90vw] sm:w-[804px] sm:h-[453px] rounded-[5px] relative overflow-hidden overflowHidden">
                <img src={image} alt="" className="w-[100%] h-[100%]" />
                <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
            </div>) : (
                <div className="my-3 w-[90vw] sm:w-[804px] sm:h-[453px] rounded-[5px] relative overflow-hidden overflowHidden">
                    <EmbedYoutube embedId="es4x5R-rV9s" />
                </div>)}

            {/* article */}
            {/* <div dangerouslySetInnerHTML={{__html:data[0].content.rendered}}></div> */}
            <div>{parseHTML(data[0].content.rendered)}</div>

            <div className="mt-12">
                {/* tags */}
                <div className="flex items-center gap-x-1">
                    <p className="text-[#bf912d] text-[20px] font-nunitoSans">TAGS</p>
                    <div className="w-[84px] h-[2px] bg-[#bf912d]"></div>
                </div>
                {/* tag list */}
                <div>
                    <ul className='text-[16px] flex flex-wrap gap-2 p-3'>
                        {data[0]._embedded['wp:term'][1].map((item, index) => (
                            <li key={index} className={tagListClass}>{item.name}</li>
                        ))}
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
                <NewsFooterAuthor data={data[0]._embedded.author[0]} />

                <div className="flex justify-center items-center mt-[32px] mb-[53px]">
                    <button className="rounded-[5px] w-[297px] h-[37px] bg-[#bf912d] text-white text-[16px] font-nunitoSans">POST A COMMENT</button>
                </div>
            </div>
        </div>
    )
}

export default ArticleContainer