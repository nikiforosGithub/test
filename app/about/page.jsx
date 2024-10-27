'use client'

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/mycomps/PageLayout";
import { aboutPage, stats } from '@/data/data';

export default function About() {
    return (
        <PageLayout>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 md:py-20"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-blue-100 text-blue-700">About Me</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {aboutPage.hero.title.split('Through').map((part, index) => (
                                    <span key={index}>
                                        {part}
                                        {index === 0 && <span className="text-blue-600"> Through </span>}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl text-gray-600">{aboutPage.hero.subtitle}</p>
                            <div className="flex gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="outline">
                                    View Programs
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src={aboutPage.hero.image}
                                    alt="Personal Trainer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <Card className="absolute -bottom-6 -left-6 md:w-64 shadow-xl">
                                <CardContent className="p-6">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">
                                        {aboutPage.hero.stats.count}
                                    </div>
                                    <div className="text-gray-600">{aboutPage.hero.stats.label}</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </motion.section>

                {/* Values Section */}
                <section className="py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">What drives us to deliver excellence</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {aboutPage.values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center h-full border-none shadow-lg">
                                    <CardContent className="pt-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                            <value.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Journey Timeline */}
                <section className="py-12 md:py-20 bg-gray-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
                        <p className="text-xl text-gray-600">A decade of dedication to fitness</p>
                    </div>
                    <div className="max-w-3xl mx-auto relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 md:left-1/2 max-md:hidden" />
                        {aboutPage.timeline.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`mb-8 flex items-center  ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                <div className="max-md:hidden flex-1 w-full md:w-1/2" />
                                <div className="flex-1 w-full md:w-1/2 relative">
                                    <div className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-blue-500 
                                        ${index%2 ? 'md:left-0 md:-ml-2' : 'md:right-0 md:-mr-2'} max-md:hidden`} />
                                    <Card className=" md:ml-8 md:mx-8">
                                        <CardContent className="p-6">
                                            <div className="text-blue-600 font-bold mb-2">{event.year}</div>
                                            <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                                            <p className="text-gray-600">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
                        <p className="text-xl text-gray-600">Professional qualifications and education</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aboutPage.certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                            <cert.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">{cert.org}</p>
                                        <Badge variant="outline">{cert.year}</Badge>
                                        <p className="text-gray-600 text-sm mt-3">{cert.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Specialties */}
                <section className="py-12 md:py-20 bg-gray-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
                        <p className="text-xl text-gray-600">Specialized training focus areas</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aboutPage.specialties.map((specialty, index) => (
                            <motion.div
                                key={specialty.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="border-none shadow-lg h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            <h3 className="font-medium text-gray-900">{specialty.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">{specialty.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-20">
                    <Card className="bg-blue-500 border-none">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                            <p className="text-xl mb-8 text-blue-100">
                                Let&#39;s work together to achieve your fitness goals
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                    Get Started Now
                                </Button>
                                <Button variant="outline" className="gap-2" >
                                    View Programs
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </PageLayout>
    );
}