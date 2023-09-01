import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                <img
                            src="/f.gif"
                           
                            className=" mx-auto w-[300px] md:w-[300px] h m"
                        />
           
                    <div className="text-2xl font-bold mx-auto" >Payment failed!</div>
                    <div className="text-base mt-5 mx-auto">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline mx-auto">sneakerkicks@gmail.com</div>

                    <Link href="/" className="font-bold mt-5 mx-auto">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;