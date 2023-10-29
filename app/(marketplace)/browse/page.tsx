"use client";


import Navbar from "@/components/navbar";
import {useActiveListings,MediaRenderer} from "@thirdweb-dev/react/evm";

// import {Container,Heading,Text} from "@chakra-ui/react";
import NFTGrid from "@/components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "@/const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Home(){


    const {contract} = useContract(NFT_COLLECTION_ADDRESS);


    const {data, isLoading} = useNFTs(contract);
    
   

    return(
        <div className="min-h-screen glitch-bg">
            <div className="flex flex-col">
                <Navbar/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="text-white text-4xl">
                    Browse
                </div>
                <div>
                    <NFTGrid
                            isLoading={isLoading}
                            data={data}
                            emptyText="No NFTs found"
                    />
                </div>
                    
                
            </div>
        </div>
    )


}