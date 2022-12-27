import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      < div className="flex flex-col   sm:px-[2rem] md:px-[10rem] px-2 pb-4 bg-white" >
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
            <Link href="/editorial-policy" class="hover:underline line-clamp-1 sm:line-clamp-none">
              editorial-policy
            </Link>
          </div>
        </div>
        {/* end of breadcrumb */}
        <div className="bg-white">
          <div className='flex items-center my-4'>
            <h1 className="text-[2rem] font-bold">Editorial Policy</h1>
          </div>
          {/* <h2 className="text-[1.6rem] font-semibold py-4">Digital Millennium Copyright Act Policy, Notice and Takedown Procedure</h2> */}
          <div>
            <p>At The Tollywood Life, we aim to maintain high journalistic standards to provide unique and quality articles and news to our readers. When writing for us, you agree to these terms and understand that if you don’t follow them, your article could be rejected by us. You will enter a contract with us that will demand your written agreement to this policy.</p>
            <br />
            <h3 className="text-[1.6rem]">Originality</h3>

            <p>
              We expect all articles to be 100% original. They should pass Copyscape and other plagiarism checks. The writer should only send ‘never-published-before’ content for approval by our editors. It is imperative that you focus on writing content that provides value to our readers. Articles that have been plagiarized or spun from a pre-published article will be rejected.
            </p>
            <br />
            <h3 className="text-[1.6rem]">Claims And Data</h3>

            <p>All claims and data regarding finance should be duly examined before including in the article. No false claims or biased data will be entertained by the clients. We ensure that whatever data is getting published on our website is already available in the public domain and has been verified by relevant sources. The writers must link the data/statistics/claims to a relevant website where it was published previously.</p>
            <br />
            <p>Always seek to provide empirical evidence about the claims. You can include pictures, graphs, and screenshots to prove your claims. If no authority websites, experts back up your claim, you should avoid using it in your article.</p>
            <br />
            <h3 className="text-[1.6rem]">Value</h3>
            <p>
              All the articles you write should contain the value for our readers. Your article should have a definite objective that must be followed to provide value. We aim to provide articles that can present the latest news to our readers and help them understand the nuances of various finances. All the articles should be completely unbiased and there should be no promotion/marketing of any currency, market or company whatsoever.
            </p>
            <br />
            <h3 className="text-[1.6rem]">Promotions And Marketing</h3>

            <p>
              No article should contain any claims or information about a finance/company/person for marketing or promotional purposes. The title, subheadings and the content of your articles should always remain straightforward and unbiased. You should not link any article that promotes a company/currency/person. We strongly discourage the use of promotional/marketing links in our articles.
            </p>
            <br />
            <h3 className="text-[1.6rem]">Reader</h3>

            <p>Be mindful of the fact that our readers are not the general public but people who are genuinely interested in finance. Your articles should always contain valuable information for readers who already understand the finance sphere. Our aim is to provide them with the latest information and news about different finances. Therefore, understand our readers before writing an article for them.</p>
            <br />
            <h3 className="text-[1.6rem]">Acceptance Of The Article</h3>
            <p>The acceptance of the article is solely dependent on the editorial board. Our editors can accept or reject without an explanation. When an article is accepted, we will intimidate our decision. Each decision by the board will be final and binding to all the writers.</p>
            <br />
            <h3 className="text-[1.6rem]">News Writing</h3>
            <p>While writing news for us, make sure that you are verifying it with all credible sources. Even though we have smaller timelines for the publication of news on our platform, we find it essential to focus on the authenticity of each news post before publication. Make sure that empirical evidence is available for each of the news articles and data presented in the post.</p>
            <br />
            <h3 className="text-[1.6rem]">User-Generated Content</h3>
            <p>At The <span className="font-bold">Tollywood Life </span>we produce User-Generated Content also based on research from various online communities, available Interviews and various news sources too.</p>
            <br />
            <p>We expect you to follow this editorial policy for creating high-quality content for our readers.</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default index