
import React from "react";
import {socialLinks} from '@/data/data'
import {Button} from "@/components/ui/button";

const SocialLinks = ({ links }) => {
    return (
        <div className="flex justify-center gap-8 max-sm:flex-col">
            {links.map((link) => {
                const IconComponent = require("lucide-react")[link.icon];
                return (
                    <Button key={link.id} variant="ghost" size="lg" onClick={() => window.open(link.url, '_blank')}>
                        <IconComponent className="mr-2 h-5 w-5" /> {link.platform}
                    </Button>
                );
            })}
        </div>
    );
};


export default function Footer() {
    return (
        <section className="mt-12 py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <SocialLinks links={socialLinks}/>
            </div>
        </section>
    )
}