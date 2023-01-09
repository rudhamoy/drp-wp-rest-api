

// <div className="cursor-pointer text-black hover:text-[#bf912d]">
//                                 <Link href="/category/celebrity-news">CELEBRITY</Link>
//                             </div>

//                             <div
//                                 className="dropdown relative h-[100%]"
//                             >
//                                 <div
//                                     role="button"
//                                     onMouseEnter={() => {
//                                         setClicked(true)
//                                     }}
//                                     onMouseLeave={() => {
//                                         setClicked(false)
//                                     }}
//                                     className=" flex justify-center items-center h-[100%]"
//                                 >
//                                     <div className="flex items-center text-black hover:text-[#bf912d]">ENTERTAINMENT <BiChevronDown className="text-lg" /></div>
//                                 </div>
//                                 {clicked === true && (
//                                     <div
//                                         className={`${style.menu} z-40`}
//                                         onMouseEnter={() => {
//                                             setClicked(true)
//                                         }}
//                                         onMouseLeave={() => {
//                                             setClicked(false)
//                                         }}
//                                     >
//                                         <ul className="absolute uppercase text-black  z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
//                                             <li className="hover:text-[#bf912d]"> <Link href="">Politics</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Technology</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Gaming</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Sports</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="/category/exclusive">Trending</Link></li>
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="dropdown relative h-[100%]">
//                                 <div
//                                     role="button"
//                                     onMouseEnter={() => {
//                                         setOnClicked(true)
//                                     }}
//                                     onMouseLeave={() => {
//                                         setOnClicked(false)
//                                     }}
//                                     className="flex justify-center items-center h-[100%]"
//                                 >
//                                     <div className="flex items-center text-black hover:text-[#bf912d]">News <BiChevronDown className="text-lg" /></div>
//                                 </div>
//                                 {onClicked === true && (
//                                     <div
//                                         className={`${style.menu} z-40`}
//                                         onMouseEnter={() => {
//                                             setOnClicked(true)
//                                         }}
//                                         onMouseLeave={() => {
//                                             setOnClicked(false)
//                                         }}
//                                     >
//                                         <ul className="absolute uppercase text-black z-50 -right-6 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
//                                         <li className="hover:text-[#bf912d]"> <Link href="">Politics</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Technology</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Gaming</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="">Sports</Link></li>
//                                             <li className="hover:text-[#bf912d]"><Link href="/category/exclusive">Trending</Link></li>
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="cursor-pointer text-black hover:text-[#bf912d]">
//                                 <Link href="">ANIME</Link>
//                             </div>
//                             <div className="cursor-pointer text-black hover:text-[#bf912d]">
//                                 <Link href="">GAMES</Link>
//                             </div>
//                             <div className="cursor-pointer text-black hover:text-[#bf912d]">
//                                 <Link href="/category/movies">MOVIES</Link>
//                             </div>
//                             <div className="cursor-pointer text-black hover:text-[#bf912d]">
//                                 <Link href="/category/web-series">TV SHOW</Link>
//                             </div>