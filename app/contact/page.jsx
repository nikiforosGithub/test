'use client'

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/mycomps/PageLayout";
import { contactPage } from '@/data/data';

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    };

    return (
        <PageLayout>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 md:py-20"
                >
                    <div className="text-center mb-12">
                        <Badge className="bg-blue-100 text-blue-700 mb-4">Contact Us</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {contactPage.hero.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {contactPage.hero.subtitle}
                        </p>
                    </div>
                </motion.section>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {contactPage.contactInfo.map((info) => (
                                <Card key={info.id} className="border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                                            <info.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="font-medium text-gray-900 mb-1">{info.title}</h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600">{info.value}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Contact Reasons */}
                        <div className="space-y-4">
                            {contactPage.contactReasons.map((reason) => (
                                <Card key={reason.title} className="border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                <reason.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">{reason.title}</h3>
                                                <p className="text-gray-600">{reason.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* FAQs */}
                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="space-y-2">
                                {contactPage.faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        {/* Name Field */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">
                                                {contactPage.formFields.name.label}
                                                {contactPage.formFields.name.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <Input
                                                placeholder={contactPage.formFields.name.placeholder}
                                                required={contactPage.formFields.name.required}
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">
                                                {contactPage.formFields.email.label}
                                                {contactPage.formFields.email.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder={contactPage.formFields.email.placeholder}
                                                required={contactPage.formFields.email.required}
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">
                                                {contactPage.formFields.phone.label}
                                                {contactPage.formFields.phone.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <Input
                                                type="tel"
                                                placeholder={contactPage.formFields.phone.placeholder}
                                                required={contactPage.formFields.phone.required}
                                            />
                                        </div>

                                        {/* Program Selection */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">
                                                {contactPage.formFields.program.label}
                                                {contactPage.formFields.program.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a program" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {contactPage.formFields.program.options.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">
                                                {contactPage.formFields.message.label}
                                                {contactPage.formFields.message.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <Textarea
                                                placeholder={contactPage.formFields.message.placeholder}
                                                required={contactPage.formFields.message.required}
                                                className="h-32"
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                        Send Message <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Map Section */}
                <section className="py-12 md:py-20">
                    <Card className="border-none shadow-lg overflow-hidden">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986673029237!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1655071228猫"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </Card>
                </section>
            </div>
        </PageLayout>
    );
}