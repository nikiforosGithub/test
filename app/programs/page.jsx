'use client'

import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
    CheckCircle2, Timer, Flame, ArrowRight, Filter,
    Search, X, ChevronRight, ChevronDown, Phone, Mail
} from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { programs, faq } from '@/data/data';
import PageLayout from "@/mycomps/PageLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useRouter} from "next/navigation";

// Mobile Program Card Component
const MobileProgramCard = ({ program }) => {
    const router = useRouter();
    return(
    <Card className="mb-4">
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg">{program.title}</h3>
                    <Badge className={`mt-2 ${
                        program.tag === 'Beginner' ? 'bg-green-100 text-green-700' :
                            program.tag === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                                'bg-purple-100 text-purple-700'
                    }`}>
                        {program.tag}
                    </Badge>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">{program.price}</span>
                    <span className="text-gray-600">/mo</span>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                    <Timer className="w-4 h-4 mr-1" />
                    {program.duration}
                </div>
                <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    {program.intensity}
                </div>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="features">
                    <AccordionTrigger>View Features</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2">
                            {program.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reviews">
                    <AccordionTrigger>Reviews</AccordionTrigger>
                    <AccordionContent>
                        {program.reviews.map(review => (
                            <div key={review.id} className="mb-4 last:mb-0">
                                <p className="italic text-gray-600 mb-2">&#34;{review.text}&#34;</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
                                        {review.avatar}
                                    </div>
                                    <span className="text-sm font-medium">{review.name}</span>
                                </div>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="progress">
                    <AccordionTrigger>Expected Progress</AccordionTrigger>
                    <AccordionContent>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer>
                                <LineChart data={program.improvements}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="strength" stroke="#2563eb" />
                                    <Line type="monotone" dataKey="endurance" stroke="#16a34a" />
                                    <Line type="monotone" dataKey="technique" stroke="#9333ea" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
        <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild onClick={() => {router.push(program.link)}}>
                Get Started
            </Button>
        </CardFooter>
    </Card>
    )
};

// Program Comparison Sheet for Mobile
const MobileComparisonSheet = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="w-full mb-4">
                <Filter className="w-4 h-4 mr-2" />
                Compare Programs
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader>
                <SheetTitle>Program Comparison</SheetTitle>
            </SheetHeader>
            <div className="overflow-x-auto">
                <table className="w-full mt-4">
                    <thead>
                    <tr>
                        <th className="text-left py-2">Feature</th>
                        {programs.map(program => (
                            <th key={program.id} className="text-center py-2">
                                <span className="text-sm font-medium">{program.title}</span>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="text-sm">
                    <tr>
                        <td className="py-2">Price</td>
                        {programs.map(program => (
                            <td key={program.id} className="text-center py-2">{program.price}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="py-2">Duration</td>
                        {programs.map(program => (
                            <td key={program.id} className="text-center py-2">{program.duration}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="py-2">Sessions</td>
                        {programs.map(program => (
                            <td key={program.id} className="text-center py-2">{program.features[0]}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="py-2">Intensity</td>
                        {programs.map(program => (
                            <td key={program.id} className="text-center py-2">{program.intensity}</td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </SheetContent>
    </Sheet>
);

const faqCategories = {
    "Getting Started": faq.slice(0, 3),
    "Program Details": faq.slice(3, 6),
    "Support & Guidance": faq.slice(6)
};
const ProgramComparison = () => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse">
            <thead>
            <tr className="border-b">
                <th className="py-4 px-6 text-left">Features</th>
                {programs.map(program => (
                    <th key={program.id} className="py-4 px-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <Badge className={`
                                    ${program.tag === 'Beginner' ? 'bg-green-100 text-green-700' :
                                program.tag === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                                    'bg-purple-100 text-purple-700'}
                                `}>
                                {program.tag}
                            </Badge>
                            <span className="font-bold text-gray-900">{program.title}</span>
                            <span className="text-blue-600 font-bold">{program.price}/mo</span>
                        </div>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr className="border-b">
                <td className="py-4 px-6 font-medium">Duration</td>
                {programs.map(program => (
                    <td key={program.id} className="py-4 px-6 text-center">{program.duration}</td>
                ))}
            </tr>
            <tr className="border-b">
                <td className="py-4 px-6 font-medium">Sessions</td>
                {programs.map(program => (
                    <td key={program.id} className="py-4 px-6 text-center">{program.features[0]}</td>
                ))}
            </tr>
            <tr className="border-b">
                <td className="py-4 px-6 font-medium">Intensity</td>
                {programs.map(program => (
                    <td key={program.id} className="py-4 px-6 text-center">
                        <Badge variant="outline">{program.intensity}</Badge>
                    </td>
                ))}
            </tr>
            <tr className="border-b">
                <td className="py-4 px-6 font-medium">Support Level</td>
                {programs.map(program => (
                    <td key={program.id} className="py-4 px-6 text-center">
                        {program.features.find(f => f.includes('support')) || 'Basic Support'}
                    </td>
                ))}
            </tr>
            <tr>
                <td className="py-4 px-6"></td>
                {programs.map(program => (
                    <td key={program.id} className="py-4 px-6 text-center">
                        <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            asChild
                        >
                            <a href={program.link}>Choose Plan</a>
                        </Button>
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
);

const ProgressChart = ({ program }) => (
    <div className="h-[300px] w-full">
        <ResponsiveContainer>
            <LineChart data={program.improvements}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="strength" stroke="#2563eb" />
                <Line type="monotone" dataKey="endurance" stroke="#16a34a" />
                <Line type="monotone" dataKey="technique" stroke="#9333ea" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);
export default function Programs() {
    return (
        <PageLayout>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Training Programs
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Find the perfect program that matches your fitness level and goals
                    </p>
                </motion.div>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <Tabs defaultValue="comparison" className="mb-12 ">
                        <TabsList className=" mb-8 justify-center w-full bg- white">
                            <TabsTrigger value="comparison">Side-by-Side Comparison</TabsTrigger>
                            <TabsTrigger value="progress">Expected Progress</TabsTrigger>
                            <TabsTrigger value="testimonials">Success Stories</TabsTrigger>
                        </TabsList>

                        <TabsContent value="comparison">
                            <Card>
                                <CardContent className="pt-6">
                                    <ProgramComparison />
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="progress">
                            <div className="grid md:grid-cols-3 gap-8">
                                {programs.map(program => (
                                    <Card key={program.id}>
                                        <CardHeader>
                                            <h3 className="font-bold text-lg">{program.title}</h3>
                                            <p className="text-sm text-gray-500">{program.tag} Level</p>
                                        </CardHeader>
                                        <CardContent>
                                            <ProgressChart program={program} />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="testimonials">
                            <div className="grid md:grid-cols-3 gap-8">
                                {programs.map(program => (
                                    <div key={program.id}>
                                        <h3 className="font-bold text-lg mb-4">{program.title}</h3>
                                        <div className="space-y-4">
                                            {program.reviews.map(review => (
                                                <Card key={review.id}>
                                                    <CardContent className="pt-6">
                                                        <p className="italic text-gray-600 mb-4">&#34;{review.text}&#34;</p>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                                {review.avatar}
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold">{review.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    {new Date(review.date).toLocaleDateString()}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <MobileComparisonSheet />

                    {/* Quick Contact */}
                    <div className="flex gap-2 mb-6">
                        <Button variant="outline" className="flex-1" asChild>
                            <a href="tel:+1234567890">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Us
                            </a>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                            <a href="mailto:info@example.com">
                                <Mail className="w-4 h-4 mr-2" />
                                Email
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Program Cards */}
                    <div className="space-y-4">
                        {programs.map(program => (
                            <MobileProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                </div>

                {/* FAQ Section - Optimized for both desktop and mobile */}
                <section className="mt-12 md:mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        {Object.entries(faqCategories).map(([category, questions]) => (
                            <Accordion key={category} type="single" collapsible className="mb-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">{category}</h3>
                                {questions.map((item) => (
                                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                                        <AccordionTrigger className="text-left">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}