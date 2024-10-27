'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Timer,
    Flame,
    CheckCircle2,
    Calendar,
    DollarSign,
    Users,
    Target,
    Star,
    ListChecks,
    Clock,
    TrendingUp
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import PageLayout from '@/mycomps/PageLayout';
import { programs } from '@/data/data';

const TestimonialCard = ({ name, avatar, text, rating, date }) => (
    <Card className="border-none shadow-lg">
        <CardContent className="pt-6">
            <div className="flex gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    />
                ))}
            </div>
            <p className="text-gray-600 italic mb-4">"{text}"</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-medium text-blue-600">
                    {avatar}
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const ProgressGraph = ({ improvements }) => {
    return (
        <Card className="border-none shadow-lg">
            <CardHeader>
                <CardTitle>Expected Progress</CardTitle>
                <CardDescription>Projected improvements over the program duration</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={improvements}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="week"
                                label={{ value: 'Week' }}
                            />
                            <YAxis
                                label={{
                                    value: 'Improvement (%)',
                                    angle: -90,
                                    position: 'insideLeft'
                                }}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="strength"
                                stroke="#2563eb"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                name="Strength"
                            />
                            <Line
                                type="monotone"
                                dataKey="endurance"
                                stroke="#16a34a"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                name="Endurance"
                            />
                            <Line
                                type='monotone'
                                dataKey="technique"
                                stroke="#9333ea"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                name="Technique"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

const ProgressSection = ({ program }) => (
    <div className="space-y-4">
        <h3 className="font-semibold text-lg">Program Progress Timeline</h3>
        <div className="relative">
            <div className="absolute left-4 h-full w-px bg-blue-100"></div>
            {Array.from({ length: parseInt(program.duration) }, (_, i) => (
                <div key={i} className="ml-12 mb-6 relative">
                    <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-medium text-gray-900">Week {i + 1}</h4>
                    <p className="text-gray-600 text-sm">
                        {i === 0 ? "Foundation and Assessment" :
                            i === parseInt(program.duration) - 1 ? "Final Evaluation and Next Steps" :
                                `Progress Check and Adjustment`}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

const ProgramDetail = ({ program }) => {
    const router = useRouter();

    return (
        <PageLayout>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center mb-6">
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/programs')}
                            className="mr-4 hover:bg-blue-50"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
                        </Button>
                        <Badge className="bg-blue-100 text-blue-700">
                            {program.tag}
                        </Badge>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gray-900">{program.title}</h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-600">
                            <div className="flex items-center">
                                <Timer className="w-5 h-5 mr-2 text-blue-500" />
                                {program.duration}
                            </div>
                            <div className="flex items-center">
                                <Flame className="w-5 h-5 mr-2 text-blue-500" />
                                {program.intensity} Intensity
                            </div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2 text-blue-500" />
                                {program.tag} Level
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Program Description */}
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle>Program Overview</CardTitle>
                                <CardDescription>Comprehensive training plan tailored to your goals</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    {program.big_description}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Timeline */}
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle>Program Timeline</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ProgressSection program={program} />
                            </CardContent>
                        </Card>

                        {/* Features */}
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle>What's Included</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {program.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{feature}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <ProgressGraph improvements={program.improvements} />

                        {/* Testimonials */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">Member Success Stories</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {program.reviews.map((review) => (
                                    <TestimonialCard key={review.id} {...review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="space-y-6">
                        <div className="sticky top-24">
                            {/* Pricing Card */}
                            <Card className="border-none shadow-lg mb-6">
                                <CardHeader>
                                    <CardTitle>Start Your Journey</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-blue-600 mb-2">
                                            {program.price}
                                            <span className="text-lg text-gray-500">/month</span>
                                        </div>
                                        <p className="text-gray-600">Billed monthly, cancel anytime</p>
                                    </div>
                                    <div className="space-y-3">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                            Join Now
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            Schedule Consultation
                                        </Button>
                                    </div>
                                    <div className="pt-4 border-t">
                                        <p className="text-sm text-gray-500 text-center">
                                            30-day money-back guarantee
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Stats */}
                            <Card className="border-none shadow-lg">
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Duration</span>
                                            <span className="font-medium">{program.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Sessions</span>
                                            <span className="font-medium">{program.features[0]}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Intensity</span>
                                            <Badge variant="outline" className="font-medium">
                                                {program.intensity}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default ProgramDetail;