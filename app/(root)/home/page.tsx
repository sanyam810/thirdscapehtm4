"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home(){

    return(
        <div className="min-h-screen glitch-bg">
            <div className="flex flex-col">
                <Navbar/>
            </div>
            <div className="mx-auto max-w-screen-xl">
                <div className="pt-12">
                    <Hero/>
                </div>
            </div>
        </div>
    )


}