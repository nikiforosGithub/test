"use client";

import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { programs } from '@/data/data';

const ProgramCard = ({ title, description, duration, intensity, link, price }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(link);
    };

    return (
        <div
            className="flex flex-col p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
            onClick={handleNavigation}
        >
            <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                    {intensity}
                </Badge>
            </div>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{duration}</span>
                <span>•</span>
                <span>{price}/month</span>
            </div>
        </div>
    );
};

export default function Header() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed z-10 top-0 right-0 left-0 flex flex-row h-20 justify-center
        ${isScrolled ? 'shadow-lg bg-white/90 backdrop-blur-md ' : ''}`}>
            <div
                className={`p-4 flex flex-row w-full mx-auto max-w-7xl items-center justify-between
                 transition-all duration-200`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Dumbbell className="h-8 w-8 text-blue-600" />
                    <span className="font-bold text-xl text-gray-900">FitPro</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="bg-transparent hover:bg-blue-50 text-gray-700"
                                >
                                    Programs
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[600px] p-4">
                                        <div className="flex items-center justify-between mb-4 px-2">
                                            <h2 className="text-lg font-semibold text-gray-900">Our Programs</h2>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                onClick={() => router.push("/programs")}
                                            >
                                                View All Programs
                                            </Button>
                                        </div>
                                        <div className="grid gap-2">
                                            {programs.map((program) => (
                                                <ProgramCard
                                                    key={program.id}
                                                    title={program.title}
                                                    description={program.description}
                                                    duration={program.duration}
                                                    intensity={program.intensity}
                                                    link={program.link}
                                                    price={program.price}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`bg-transparent hover:bg-blue-50 text-gray-700 ${navigationMenuTriggerStyle()}`}
                                    >
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`bg-transparent hover:bg-blue-50 text-gray-700 ${navigationMenuTriggerStyle()}`}
                                    >
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 hidden md:flex"
                        onClick={() => router.push("/contact")}
                    >
                        Start Now
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
                        <nav className="flex flex-col p-4">
                            <Link
                                href="/programs"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                Programs
                            </Link>
                            <Link
                                href="/about"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                Contact
                            </Link>
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 mt-4"
                                onClick={() => router.push("/contact")}
                            >
                                Start Now
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}