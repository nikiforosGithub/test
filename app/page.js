'use client'

import React from 'react';
import { motion } from "framer-motion";
import {ArrowRight, CheckCircle2, Flame, Timer, Trophy, Users,Star,ArrowUpRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { features, programs, heroSection, socialLinks, stats} from '@/data/data';
import PageLayout from "@/mycomps/PageLayout";
import Header from "@/mycomps/Header";
import Footer from "@/mycomps/Footer";

import Image from "next/image";
import Moving from "@/mycomps/Moving";
import trainer2 from '@/app/assets/img_3.png'
// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const IconComponent = require("lucide-react")[feature.icon];

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
      >
        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <IconComponent className="w-6 h-6 text-blue-500" />
            </div>
            <CardTitle className="text-gray-900">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      </motion.div>
  );
};

const ReviewSection = () => {
  const allReviews = programs.flatMap(program =>
      program.reviews.map(review => ({
        ...review,
        programTitle: program.title,
        programTag: program.tag,
        programIntensity: program.intensity
      }))
  );

  // Duplicate reviews to create seamless loop
  const duplicatedReviews = [...allReviews, ...allReviews];

  const ReviewCard = ({ review }) => (
      <div className="w-[400px] flex-shrink-0 px-4 ">
        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            {/* Program Badge */}
            <div className="flex justify-between items-center mb-4">
              <Badge
                  variant="outline"
                  className={`
                                ${review.programTag === 'Beginner' ? 'bg-green-50 text-green-600 border-green-200' :
                      review.programTag === 'Intermediate' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                          'bg-purple-50 text-purple-600 border-purple-200'}
                            `}
              >
                {review.programTitle}
              </Badge>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                ))}
              </div>
            </div>

            {/* Review Content */}
            <blockquote className="text-gray-600 mb-6">
              &#34;{review.text}&#34;
            </blockquote>

            {/* Reviewer Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-medium text-blue-600">
                {review.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short'
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );

  return (

      <section className="py-20 overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4">Real results from real people</p>
          </div>


            {/* Gradient Overlays */}


            {/* Scrolling Container */}

              <motion.div
                  className="flex gap-6"
                  initial={{ x: 0 }}
                  animate={{ x: `-${100 * allReviews.length}%` }}
                  transition={{
                    duration: 30 * allReviews.length, // Adjust speed here
                    ease: "linear",
                    repeat: Infinity,
                  }}
              >
                {duplicatedReviews.map((review, index) => (
                    <ReviewCard key={`${review.id}-${index}`} review={review} />
                ))}
              </motion.div>


        </div>
      </section>
  );
};

const ProgramCard = ({ program }) => {
  const router = useRouter();
  return (
      <Card className={`relative h-full flex flex-col ${program.featured ? 'border-blue-500 shadow-xl' : 'shadow-lg'}`}>
        {program.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
        )}
        <CardHeader className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <Timer className="w-4 h-4" />
            <span>{program.duration}</span>
            <span>•</span>
            <Flame className="w-4 h-4" />
            <span>{program.intensity}</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-blue-600">{program.price}</span>
            <span className="text-gray-600">/month</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-gray-600 text-center mb-6">{program.description}</p>
          <ul className="space-y-3">
            {program.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
              className={`w-full ${program.featured ? 'bg-blue-600 hover:bg-blue-700' : ''}`} asChild
              onClick={() => {router.push(program.link)}}
          >

              Get Started


          </Button>
        </CardFooter>
      </Card>
  );
};

const StatsSection = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">{stats.clientCount}</div>
          <div className="text-gray-600">{stats.clientLabel}</div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">{stats.experience}</div>
          <div className="text-gray-600">{stats.experienceLabel}</div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">{stats.successRate}</div>
          <div className="text-gray-600">{stats.successRateLabel}</div>
        </motion.div>
      </div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
            >
              <Badge className="bg-blue-100 text-blue-700">About Me</Badge>
              <h2 className="text-4xl font-bold text-gray-900">Dedicated to Your <span className="text-blue-600">Fitness Journey</span></h2>
              <p className="text-gray-600 text-lg">
                With over a decade of experience in personal training and fitness coaching, I&#39;ve helped hundreds of clients achieve their fitness goals. My approach combines scientific principles with practical, sustainable methods.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Certified Trainer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Group Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Expert Coach</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Goal Focused</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Me
              </Button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
            >
              <div className="relative h-[600px] w-full">
                <Image
                    src={trainer2}// You'll need to add this image
                    alt="Personal Trainer"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Certified Trainer</p>
                      <p className="text-gray-600 text-sm">NASM, ACE, ISSA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};


// Main Home Page Component
export default function Home() {
  const router = useRouter();

  return (
      <PageLayout>
        <div>
          {/* Hero Section */}
          <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 px-4 md:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {heroSection.badge}
                  </Badge>
                  <h1 className="text-5xl font-bold text-gray-900">
                    {heroSection.title.start}{' '}
                    <span className="text-blue-600">{heroSection.title.highlight}</span>{' '}
                    {heroSection.title.end}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {heroSection.description}
                  </p>
                  <div className="flex gap-4">
                    <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => router.push(heroSection.cta.primary.link)}
                    >
                      {heroSection.cta.primary.text} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => router.push(heroSection.cta.secondary.link)}
                    >
                      {heroSection.cta.secondary.text}
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                      src={heroSection.image}
                      alt="Trainer"
                      className=" bg-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Stats Section - New */}
          <StatsSection />

          {/* About Section - New */}
          <AboutSection />


          {/* Features Section */}
          <section className="py-20 bg-white rounded-t-3xl border-2 border-b-0 border-blue-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Me</h2>
                <p className="text-gray-600 mt-4">Expert guidance to help you achieve your fitness goals</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="py-20 bg-gray-50 border-x-2 border-blue-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
                <p className="text-gray-600 mt-4">Choose a program that fits your goals</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {programs.map(program => (
                    <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </div>
            <div className={`max-md:hidden`}>
            <ReviewSection />
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className="py-20 bg-blue-100 rounded-b-3xl"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join {stats.clientCount} successful clients who have already transformed their lives. Take the first
                step towards your fitness goals today.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => window.open(socialLinks[0].url, '_blank')}>
                  <ArrowRight className="w-4 h-4"/>
                  Follow Me
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </PageLayout>
  );
}
