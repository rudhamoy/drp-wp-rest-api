import React from 'react'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parseHTML from "html-react-parser";
import parse, { domToReact, attributesToProps  } from 'html-react-parser';
import EmbedYoutube from './EmbedYoutube';
import NewsFooterAuthor from './NewsFooterAuthor';
import NewsHeaderAuthor from './NewsHeaderAuthor';


import InstaIcon from '../../assets/images/insta.png'
import FacebookIcon from '../../assets/images/facebook.png'
import TwitterIcon from '../../assets/images/twitter.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import LinkedInIcon from '../../assets/images/linkedin.png'
import Layer16 from '../../assets/images/Layer16.png'

const ArticleContainer = ({ image, data }) => {

    const tagListClass = "bg-[#f4f4f4] cursor-pointer rounded-md p-[1px] px-3 transform transition duration-500 hover:border"

    const mySafeHTML = DOMPurify.sanitize(data[0].content.rendered);
    const safeTitle = DOMPurify.sanitize(data[0].title.rendered);
    const safeExerpt = DOMPurify.sanitize(data[0].yoast_head_json.og_description);

    const html = `${mySafeHTML}`

    const options = {
        replace: domNode => {
            const { attribs, children } = domNode
          if (!attribs) {
            return;
          }
    

          if (domNode.name === 'p') {
            return <p className='marginBlog text-[#333] text-[18px] blogBodyRegular'>{domToReact(children, options)}</p>;
          }

          if (domNode.name === 'h2') {
            return <h2 className='font-[700px] text-[1.703em] blogTitle leading-[1.35]'>{domToReact(children, options)}</h2>;
          }

          if (domNode.attribs && domNode.name === 'a') {
            const props = attributesToProps(domNode.attribs);
            return <a className='underline decoration-[#bf912d] text-black' {...props}>{domToReact(children, options)}</a>
          }

          if (domNode.name === 'strong') {
            return <strong className='font-[700px] blogTitle text-xl'>{domToReact(children, options)}</strong>;
          }

          if (domNode.attribs && domNode.name === 'img') {
            const props = attributesToProps(domNode.attribs)
            console.log(domNode.attribs.src)
            return <img src={domNode.attribs.src} />
          }

        }
      };

    return (
        <div className='bg-white rounded-md p-4 mt-[18px] w-[100vw] sm:w-[837px] overflow-hidden'>
            <h1 className="text-[30px] sm:text-[36px] leading-[35px] sm:leading-[42px] text-black font-semibold blogTitle">{parseHTML(safeTitle)}
            </h1>
            {/* <h1 className="text-[30px] sm:text-[36px] leading-[35px] sm:leading-[42px] font-semibold blogTitle">{data[0].title.rendered}
            </h1> */}
            <h2 className="mt-[14px] text-[18px] sm:text-[20px] text-[#6d6d6d] blogTitle">{parseHTML(safeExerpt)}</h2>
            {/* <h2 className="mt-[14px] text-[18px] sm:text-[20px] text-[#6d6d6d] blogTitle">{data[0].yoast_head_json.og_description}</h2> */}
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
            <div className='leading-[1.6]'>{parse(html, options)}</div>

            <div className="mt-12">
                {/* tags */}
                <div className="flex items-center gap-x-1">
                    <p className="text-[#bf912d] text-[20px] blogTitle">TAGS</p>
                    <div className="w-[84px] h-[2px] bg-[#bf912d]"></div>
                </div>
                {/* tag list */}
                <div>
                    <ul className='text-[16px] flex flex-wrap p-3 gap-2'>
                        {data[0]._embedded['wp:term'][1].map((item, index) => (
                            <li key={index} className={tagListClass}>{item.name}</li>
                        ))}
                    </ul>
                </div>

                {/* subscribe */}
                <div className="flex justify-center items-center my-[39px] text-[14px]">
                    <div className="border-t border-b border-[#e4e4e4] flex sm:flex-row flex-col justify-between gap-x-8 items-center py-[19px]">
                        <div className="flex items-center gap-x-1 blogTitle">
                            <p>Please Subscribe us at <span className='font-bold hover:text-[#bf912d]'>Google News</span></p>
                            <Image src={Layer16} alt="" />
                        </div>
                        <div className="flex gap-x-2 my-4 sm:my-2 cursor-pointer">
                            <p className="whitespace-nowrap">Follow us:</p>
                            <Image height={24} width={24} src={InstaIcon} alt="" />
                            <Image height={24} width={24} src={FacebookIcon} alt="" />
                            <Image height={24} width={24} src={TwitterIcon} alt="" />
                            <Image height={24} width={24} src={YoutubeIcon} alt="" />
                            <Image height={24} width={24} src={LinkedInIcon} alt="" />
                        </div>
                    </div>
                </div>

                {/* author */}
                <NewsFooterAuthor data={data[0]._embedded.author[0]} />

                <div className="flex justify-center items-center mt-[32px] mb-[53px]">
                    <button className="rounded-[5px] w-[297px] h-[37px] bg-[#bf912d] text-white text-[16px] blogTitle">POST A COMMENT</button>
                </div>
            </div>
        </div>
    )
}

export default ArticleContainer