"use client";

import { TronCanvas } from "./canvas";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="text-7xl">
                    <div className="font-sans font-bold text-[#F5F3FF]">
                        Empower.<span className="letter-color">Create.</span>
                    </div>
                    <div className="pl-36 font-sans font-bold text-[#F5F3FF]">
                        Explore.
                    </div>
                </div>  
                <div className="w-full lg:w-2/3 xl:w-1/2 p-4 m-4 h-72 ">
                    <TronCanvas/>
                </div>
                <div>
                    <Link href="/browse">
                        <button className="bg-indigo-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-2xl w-42 items-center justify-center">
                            <div className="font-sans font-bold text-1xl hover:text-[#F5F3FF]">
                                View Marketplace
                            </div>
                        </button>
                    </Link>
                </div>
            </div> 
        </section>
    );
}
 
export default Hero;

