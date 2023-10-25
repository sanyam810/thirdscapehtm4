"use client";

import { Button } from "@/components/ui/button"

const Navbar = () => {
    return(
        <div className="flex flex-row justify-start gap-4 p-4 bg-zinc-900 text-white">
            <div className="flex fkex-row gap-4">
                <div className="pt-2">
                    ScapeDive
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <Button variant="ghost">Home</Button>
                    </div>
                    <div>
                        <Button variant="ghost">About</Button>
                    </div>
                </div>
                
            </div>
            <div className="ml-auto">
                <Button variant="ghost">Connet Wallet</Button>
            </div>
        
        </div>
    )
}
 
export default Navbar;