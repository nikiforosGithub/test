import Header from "@/mycomps/Header";
import Image from "next/image";
import cs454 from "@/app/assets/UoC_logo.png";
import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";


export default function PageLayout({ children }) {


    return (
        <div className='my-24 min-h-screen'>
            <Header/>
            <div className='container mx-auto px-8 max-sm:px-2'>
                {children}
            </div>
        </div>
    )
}