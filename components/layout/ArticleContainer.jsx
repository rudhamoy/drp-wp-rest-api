import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parseHTML from "html-react-parser";
import parse, { domToReact, attributesToProps } from 'html-react-parser';
import { InView, useInView } from 'react-intersection-observer';

import EmbedYoutube from './EmbedYoutube';
import NewsFooterAuthor from './NewsFooterAuthor';
import NewsHeaderAuthor from './NewsHeaderAuthor';


import InstaIcon from '../../assets/images/insta.png'
import FacebookIcon from '../../assets/images/facebook.png'
import TwitterIcon from '../../assets/images/twitter.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import LinkedInIcon from '../../assets/images/linkedin.png'
import Layer16 from '../../assets/images/Layer16.png'
import Link from 'next/link';

const ArticleContainer = ({ data, featured, postContent }) => {
    // const [page, setPage] = useState()
    const { ref, inView } = useInView()
    const router = useRouter()
    let page

    const mySafeHTML = DOMPurify.sanitize(data[0].content.rendered);
    const safeTitle = DOMPurify.sanitize(data[0].title.rendered);
    const safeExerpt = DOMPurify.sanitize(data[0].yoast_head_json.og_description);

    const postContentHtml = `${postContent}`
    // const html = `${mySafeHTML}`

    const options = {
        replace: (domNode) => {
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

            if (domNode.name === 'h4') {
                return <h4 className='font-[700px] text-[1.2em] blogTitle leading-[1.5]'>{domToReact(children, options)}</h4>;
            }

            if (domNode.attribs && domNode.name === 'a') {
                const props = attributesToProps(domNode.attribs);
                const splitedProps = props.href.split('/')
                const postDate = `${splitedProps[3]}/${splitedProps[4]}/${splitedProps[5]}`
                return <Link className='underline decoration-[#bf912d] text-black' href={`/${postDate}/${splitedProps[6]}`}>{domToReact(children, options)}</Link>
            }

            if (domNode.name === 'strong') {
                return <strong className='font-[700px] blogTitle text-xl'>{domToReact(children, options)}</strong>;
            }


            if (domNode.attribs && domNode.name === 'figure') {
                // const props = attributesToProps(domNode.attribs)
                return (
                    <div className="my-4 w-[90vw] sm:w-[804px] h-[200px] sm:h-[453px] relative rounded-[10px] overflowHidden">
                        <Image fill alt="tollywood" src={domNode.children[0].attribs.src} className="h-[100%] w-[100%]" />
                        <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
                        <figcaption className='text-center text-[#f3f2f2] text-[12px] absolute bottom-2 left-[45%] font-[500] blogTitle'>{domNode.children[1].children[0].data}</figcaption>
                    </div>
                )
            }

            if (domNode.attribs && domNode.name === 'img') {
                const props = attributesToProps(domNode.attribs)
                return (
                    <div className="my-4 w-[90vw] sm:w-[804px] h-[200px] sm:h-[453px] relative rounded-[10px] overflowHidden">
                        <img {...props} />
                        <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
                    </div>
                )
            }

            // if (domNode.name === 'figcaption') {
            //     return (
            //         <div className="w-[90vw] sm:w-[837px] mb-4">
            //             <figcaption className='text-center text-[#a0a0a0] text-[12px]'>{domToReact(children, options)}</figcaption>
            //         </div>
            //     )
            // }
            if (domNode.name === 'blockquote') {
                return (
                    <blockquote className="bg-[#f5f5f5] p-3">
                        <p className="text-[18px] text-[#202020] font-bold blogTitle">{domToReact(children, options)}</p>
                    </blockquote>
                )
            }

            // if(domNode.name === 'script' && domNode.children[0] !== undefined) {
            //     if( domNode.children[0].parent.parent.attribs.class === 'split-container split-template-3') {
            //         console.log("helo =", domNode.children[0].parent)
            //        const props =  domNode.children[0].data
            //         let splitedString = props.split(" ", 5)
            //         const splitedObj = splitedString[4]
            //         // console.log((DOMPurify.sanitize(splitedObj)))
            //     }

            // }

            if (domNode.attribs.class === "pagenum") {
                console.log("domNode =", domNode)
                // return (
                //     <span ref={ref} className="pagenum">
                //        {domToReact(children, options)}
                //     </span>
                // )
                return (
                    <InView>
                        {({ ref, inView, entry }) => {
                            console.log(inView, domNode.children[0].data)
                            
                            if(inView === true) {
                                page = domNode.children[0].data
                                // router.push(`${router.asPath}/?page=${page}`, undefined, { shallow: true })
                            }
                            return (
                                <span ref={ref} className="pagenum">
                                   {domToReact(children, options)}
                                </span>
                            )
                        }}
                    </InView>
                )
            }

        }
    };


    useEffect(() => {
        if(inView === true) {
         router.push(`${router.asPath}/?page=${page}`, undefined, { shallow: true })
        } 
        console.log(page)
     }, [page, router])
     

     useEffect(() => {
        // The counter changed!
      }, [router.query.page])
    console.log(page)
    

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
            {featured.type === 'standard' ? (
                <div className="my-3 w-[90vw] sm:w-[804px] sm:h-[453px] rounded-[5px] relative overflow-hidden overflowHidden">
                    <Image fill src={featured.url} alt="" className="w-[100%] h-[100%]" />
                    <div className='bigFadeBottom absolute bottom-0 left-0 right-0' />
                </div>
            ) : (
                <div className="my-3 w-[90vw] sm:w-[804px] sm:h-[453px] rounded-[5px] relative overflow-hidden overflowHidden">
                    <EmbedYoutube embedId={featured.url} />
                </div>)}

            {/* article */}
            {/* <div className='leading-[1.6]'>{parse(html, options)}</div> */}
            <div className='leading-[1.6]'>{parse(postContentHtml, options)}</div>

            <div className="mt-12">
                {/* tags */}
                <div className="flex items-center gap-x-1">
                    <p className="text-[#bf912d] text-[20px] blogTitle">TAGS</p>
                    <div className="w-[84px] h-[2px] bg-[#bf912d]"></div>
                </div>
                {/* tag list */}
                <div className='p-3 '>
                    <div className='flex flex-wrap gap-1'>
                        {data[0]._embedded['wp:term'][1].map((item, index) => (
                            <div key={index} className="p-1">
                                <p className="bg-[#f4f4f4] rounded-[10px] p-1 leading-8 hover:border">{item.name}</p>
                            </div>
                        ))}
                    </div>
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