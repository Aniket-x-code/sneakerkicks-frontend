import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGithub, FaPinterest } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r to-emerald-400 from-sky-800 pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0 text-white ">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm ">
                                get help
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm ">
                                About SnakerKicks
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <Link href="https://www.panaprium.com/blogs/i/jordan"> 
                            <div className="text-sm text-black hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                            </Link>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div onClick={()=>(window.open('https://in.pinterest.com/aniketx0609/'))} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer">
                        <FaPinterest size={20} />
                    </div>
                    <div onClick={()=>(window.open('https://twitter.com/aniket_tw'))} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div onClick={()=>(window.open('https://github.com/Aniket-x-code'))} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer">
                        <FaGithub size={20} />
                    </div>
                    <div onClick={()=>(window.open('https://www.instagram.com/__i__v.e.r.m.a.j.i__/?igshid=YmMyMTA2M2Y%3D'))} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
                
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-black hover:text-white cursor-pointer text-center md:text-left">
                     Aniket, SneakerKicks Inc. 
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-black hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-black hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-black hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-black hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;