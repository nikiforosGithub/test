"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { data } from '@/data/data';
import pImage from '../app/assets/AA9B1786-D43B-43D4-BE44-F899F1805032_1_105_c.jpeg';

const ProjectCard = ({ title, description, icon, link, techStack, status }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(link);
    };

    return (
        <div
            className="flex gap-4 p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer group"
            onClick={handleNavigation}
        >
            <div className="flex-shrink-0">
                <Image
                    src={icon}
                    alt={`${title} icon`}
                    className="w-12 h-12 rounded-lg object-contain"
                />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg truncate">{title}</h3>
                    <Badge variant={status === "Active" ? "default" : "secondary"} className="hidden group-hover:inline-flex">
                        {status}
                    </Badge>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                {techStack && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {techStack.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {techStack.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{techStack.length - 3}
                            </Badge>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Header() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed z-10 top-0 right-0 left-0 flex flex-row h-20 justify-center">
            <div
                className={`p-4 flex flex-row w-full sm:mx-4 bg-background/80 rounded-lg rounded-t-none 
        border border-border border-t-0 backdrop-blur-md items-center justify-between
        ${isScrolled ? 'shadow-lg' : ''}`}
            >
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`bg-transparent`}>Projects</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[90vw] md:w-[700px] lg:w-[768px] p-4">
                                    <div className="flex items-center justify-between mb-4 px-2">
                                        <h2 className="text-lg font-semibold">Featured Projects</h2>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-primary"
                                            onClick={() => router.push("/projects")}
                                        >
                                            View All
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="grid gap-2 md:grid-cols-2 max-h-[600px] overflow-y-auto">
                                        {data.map((project) => (
                                            <ProjectCard
                                                key={project.id}
                                                title={project.title}
                                                description={project.description}
                                                icon={project.icon}
                                                link={project.link}
                                                techStack={project.techStack}
                                                status={project.status}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={`bg-transparent ${navigationMenuTriggerStyle()}`} >
                                    About me
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Image
                        src={pImage}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}