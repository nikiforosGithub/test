import {
    Medal,
    Clock,
    Dumbbell,
    ArrowRight,
    Instagram,
    Facebook,
    Youtube,
    GraduationCap,
    Trophy,
    Heart, Target, Brain, Users, MessageSquare, Calendar, MapPin, Mail, Phone
} from "lucide-react";
import trainer from "@/app/assets/img_2.png";


const features = [
    {
        id: 1,
        title: "Customized Workouts",
        description: "Personalized training programs tailored to your goals and fitness level",
        icon: "Dumbbell",
        link: '/features/customized-workouts',
        status: "Active",
    },
    {
        id: 2,
        title: "Flexible Schedule",
        description: "Training sessions that fit your busy lifestyle",
        icon: "Clock",
        link: '/features/flexible-schedule',
        status: "Active",
    },
    {
        id: 3,
        title: "Expert Guidance",
        description: "Professional support throughout your fitness journey",
        icon: "Medal",
        link: '/features/expert-guidance',
        status: "Active",
    },
    {
        id: 4,
        title: "Nutrition Coaching",
        description: "Personalized meal plans and nutrition advice to complement your training",
        icon: "Apple",
        link: '/features/nutrition-coaching',
        status: "Active",
    },
    {
        id: 5,
        title: "Progress Tracking",
        description: "Detailed progress tracking to monitor your improvements and set new goals",
        icon: "ChartLine",
        link: '/features/progress-tracking',
        status: "Active",
    },
    {
        id: 8,
        title: "Strength Assessment",
        description: "Comprehensive assessment of your current strength levels to guide your workouts",
        icon: "BicepsFlexed",
        link: '/features/strength-assessment',
        status: "Active",
    },
];

const programs = [
    {
        id: 1,
        title: "Beginner Foundations",
        description: "A foundational program to kickstart your fitness journey with ease",
        big_description: "The Beginner Foundations program is tailored for those new to fitness or looking to establish a consistent routine. It focuses on essential exercises, safe form, and building strength gradually. This program is an ideal choice for beginners aiming to develop confidence and create sustainable fitness habits for a healthier lifestyle.",
        link: '/programs/beginner',
        price: "$49",
        duration: "4 weeks",
        intensity: "Low",
        status: "Active",
        tag: "Beginner",
        features: [
            "2 sessions per week",
            "Basic nutrition guide",
            "Progress tracking",
            "Email support"
        ],
        improvements: [
            { week: 1, strength: 10, endurance: 5, technique: 15 },
            { week: 2, strength: 20, endurance: 15, technique: 30 },
            { week: 3, strength: 35, endurance: 30, technique: 45 },
            { week: 4, strength: 45, endurance: 40, technique: 60 }
        ],
        reviews: [
            {
                id: 1,
                name: "Sarah Johnson",
                rating: 5,
                text: "Perfect program for beginners! I've never felt stronger and more confident in the gym.",
                date: "2024-03-15",
                avatar: "SJ"
            },
            {
                id: 2,
                name: "Mike Thompson",
                rating: 5,
                text: "The structured approach really helped me build a solid foundation. Great support from the team!",
                date: "2024-02-28",
                avatar: "MT"
            }
        ]
    },
    {
        id: 2,
        title: "Strength & Conditioning",
        description: "A balanced program to enhance strength and endurance",
        big_description: "Our Strength & Conditioning program combines targeted strength workouts with effective conditioning exercises, ideal for those seeking to build muscle, boost stamina, and improve overall fitness. With expert guidance and a structured nutrition plan, this program is perfect for individuals looking to elevate their fitness journey.",
        link: '/programs/intermediate',
        price: "$79",
        duration: "8 weeks",
        intensity: "Medium",
        featured: true,
        status: "Active",
        tag: "Intermediate",
        features: [
            "3 sessions per week",
            "Detailed nutrition plan",
            "Weekly check-ins",
            "Priority support"
        ],
        improvements: [
            { week: 1, strength: 15, endurance: 10, technique: 20 },
            { week: 2, strength: 30, endurance: 25, technique: 35 },
            { week: 3, strength: 45, endurance: 40, technique: 50 },
            { week: 4, strength: 60, endurance: 55, technique: 65 },
            { week: 5, strength: 70, endurance: 65, technique: 75 },
            { week: 6, strength: 80, endurance: 75, technique: 85 },
            { week: 7, strength: 90, endurance: 85, technique: 90 },
            { week: 8, strength: 100, endurance: 90, technique: 95 }
        ],
        reviews: [
            {
                id: 1,
                name: "David Chen",
                rating: 5,
                text: "Incredible results! The combination of strength and conditioning workouts is perfect.",
                date: "2024-03-20",
                avatar: "DC"
            },
            {
                id: 2,
                name: "Emily Roberts",
                rating: 4,
                text: "Great program! The nutrition guidance really helped maximize my results.",
                date: "2024-03-10",
                avatar: "ER"
            },
            {
                id: 3,
                name: "James Wilson",
                rating: 5,
                text: "The weekly check-ins kept me accountable and motivated throughout the program.",
                date: "2024-02-25",
                avatar: "JW"
            }
        ]
    },
    {
        id: 3,
        title: "Elite Performance",
        description: "An advanced program to achieve peak performance and results",
        big_description: "Designed for experienced fitness enthusiasts, the Elite Performance program pushes boundaries with high-intensity training, customized meal plans, and advanced tracking. This program incorporates cutting-edge techniques to optimize performance and support elite fitness goals, making it ideal for individuals aiming to reach peak physical condition.",
        link: '/programs/advanced',
        price: "$129",
        duration: "12 weeks",
        intensity: "High",
        status: "Active",
        tag: "Advanced",
        features: [
            "5 sessions per week",
            "Custom meal plans",
            "Daily check-ins",
            "24/7 support"
        ],
        improvements: [
            { week: 1, strength: 20, endurance: 15, technique: 25 },
            { week: 3, strength: 40, endurance: 35, technique: 45 },
            { week: 5, strength: 60, endurance: 55, technique: 65 },
            { week: 7, strength: 75, endurance: 70, technique: 80 },
            { week: 9, strength: 85, endurance: 80, technique: 90 },
            { week: 12, strength: 100, endurance: 95, technique: 100 }
        ],
        reviews: [
            {
                id: 1,
                name: "Alex Martinez",
                rating: 5,
                text: "This program took my training to the next level. The daily support is exceptional!",
                date: "2024-03-18",
                avatar: "AM"
            },
            {
                id: 2,
                name: "Rachel Kim",
                rating: 5,
                text: "Worth every penny! The customized approach and constant feedback helped me achieve my best form ever.",
                date: "2024-03-05",
                avatar: "RK"
            },
            {
                id: 3,
                name: "Chris Taylor",
                rating: 5,
                text: "Challenging but incredibly rewarding. The results speak for themselves!",
                date: "2024-02-20",
                avatar: "CT"
            }
        ]
    }
];

// Update this section in your data.js

const faq = [
    // Getting Started
    {
        id: 1,
        question: "How do I know which program is right for me?",
        answer: "We'll help you choose based on your current fitness level, goals, and time commitment. The Beginner Foundations is perfect for newcomers, Strength & Conditioning for those with some experience, and Elite Performance for advanced fitness enthusiasts.",
        category: "Getting Started"
    },
    {
        id: 2,
        question: "What happens after I sign up?",
        answer: "You'll receive a welcome email with your program details and login credentials. We'll then schedule your initial consultation to assess your fitness level, discuss your goals, and customize your program accordingly.",
        category: "Getting Started"
    },
    {
        id: 3,
        question: "Do I need any special equipment?",
        answer: "Equipment requirements vary by program. Beginner Foundations requires minimal equipment, while advanced programs may require access to a full gym. We'll provide a complete equipment list after enrollment.",
        category: "Getting Started"
    },

    // Program Details
    {
        id: 4,
        question: "Can I switch between programs?",
        answer: "Yes! You can upgrade or change your program as you progress. We'll help you transition smoothly and adjust your training plan accordingly.",
        category: "Program Details"
    },
    {
        id: 5,
        question: "How long are the workout sessions?",
        answer: "Workout sessions typically range from 45-60 minutes for Beginner Foundations, 60-75 minutes for Strength & Conditioning, and 60-90 minutes for Elite Performance.",
        category: "Program Details"
    },
    {
        id: 6,
        question: "What's included in the nutrition guidance?",
        answer: "Each program includes nutrition support tailored to its level. This ranges from basic guidelines in Beginner Foundations to detailed meal plans in Elite Performance. All include macro tracking and supplement recommendations.",
        category: "Program Details"
    },

    // Support & Guidance
    {
        id: 7,
        question: "What kind of support can I expect?",
        answer: "Support varies by program level, from email support in Beginner Foundations to daily check-ins and 24/7 access in Elite Performance. All programs include regular progress tracking and form checks.",
        category: "Support & Guidance"
    },
    {
        id: 8,
        question: "How are progress and results tracked?",
        answer: "We use a combination of performance metrics, body composition measurements, and progress photos. You'll have access to our tracking app to log workouts and view your progress over time.",
        category: "Support & Guidance"
    },
    {
        id: 9,
        question: "What if I need to take a break or pause my program?",
        answer: "We understand life happens! You can pause your program for up to 30 days while maintaining access to your materials. Just let us know in advance to adjust your schedule.",
        category: "Support & Guidance"
    }
];


const aboutPage = {
    hero: {
        title: "Transforming Lives Through Fitness",
        subtitle: "With over a decade of experience in personal training and fitness coaching, I'm dedicated to helping you achieve your fitness goals through personalized training and expert guidance.",
        image: trainer, // Use your trainer image here
        stats: {
            count: "500+",
            label: "Satisfied Clients"
        }
    },

    certifications: [
        {
            id: 1,
            name: "NASM Certified Personal Trainer",
            org: "National Academy of Sports Medicine",
            year: "2018",
            icon: Medal,
            description: "Advanced certification in personal training and exercise science"
        },
        {
            id: 2,
            name: "Precision Nutrition Level 2",
            org: "Precision Nutrition",
            year: "2019",
            icon: GraduationCap,
            description: "Advanced nutrition coaching certification"
        },
        {
            id: 3,
            name: "Strength & Conditioning Specialist",
            org: "NSCA",
            year: "2020",
            icon: Trophy,
            description: "Specialized certification in strength training and athletic conditioning"
        },
        {
            id: 4,
            name: "Corrective Exercise Specialist",
            org: "NASM",
            year: "2021",
            icon: Medal,
            description: "Specialized in identifying and correcting movement dysfunctions"
        }
    ],

    values: [
        {
            icon: Heart,
            title: "Passion",
            description: "Dedicated to transforming lives through fitness and well-being"
        },
        {
            icon: Target,
            title: "Results-Driven",
            description: "Focused on achieving measurable outcomes for every client"
        },
        {
            icon: Brain,
            title: "Education",
            description: "Committed to continuous learning and evidence-based methods"
        },
        {
            icon: Users,
            title: "Community",
            description: "Building a supportive environment for sustainable success"
        }
    ],

    timeline: [
        {
            year: "2014",
            title: "Started Personal Training",
            description: "Began my journey helping clients achieve their fitness goals at a local gym"
        },
        {
            year: "2016",
            title: "Opened First Studio",
            description: "Established a dedicated training space for personalized coaching"
        },
        {
            year: "2018",
            title: "Advanced Certifications",
            description: "Achieved NASM certification and specialized training credentials"
        },
        {
            year: "2020",
            title: "Online Programs Launch",
            description: "Expanded services to reach clients worldwide with digital training solutions"
        },
        {
            year: "2024",
            title: "Continuous Growth",
            description: "Now helping more clients than ever transform their lives through fitness"
        }
    ],

    specialties: [
        {
            title: "Strength Training",
            description: "Expert guidance in building strength and muscle"
        },
        {
            title: "Weight Loss",
            description: "Specialized programs for sustainable fat loss"
        },
        {
            title: "Muscle Building",
            description: "Targeted hypertrophy and body composition"
        },
        {
            title: "Sports Performance",
            description: "Athletic development and sports-specific training"
        },
        {
            title: "Nutrition Planning",
            description: "Customized meal plans and nutrition guidance"
        },
        {
            title: "Injury Prevention",
            description: "Corrective exercise and rehabilitation"
        },
        {
            title: "Mobility Work",
            description: "Flexibility and movement optimization"
        },
        {
            title: "Contest Prep",
            description: "Competition preparation and peak performance"
        }
    ]
};

const socialLinks = [
    {
        id: 1,
        platform: "Instagram",
        icon: "Instagram",
        url: "https://instagram.com/yourhandle"
    },
    {
        id: 2,
        platform: "Facebook",
        icon: "Facebook",
        url: "https://facebook.com/yourpage"
    },
    {
        id: 3,
        platform: "YouTube",
        icon: "Youtube",
        url: "https://youtube.com/@yourchannel"
    }
];

const stats = {
    clientCount: "500+",
    clientLabel: "Happy Clients",
    experience: "10+ Years",
    experienceLabel: "Experience",
    successRate: "95%",
    successRateLabel: "Success Rate"
};

const heroSection = {
    badge: "Transform Your Life",
    title: {
        start: "Your Journey to a",
        highlight: "Better You",
        end: "Starts Here"
    },
    description: "Expert personal training tailored to your goals. Whether you're just starting or looking to level up, I'm here to guide you every step of the way.",
    cta: {
        primary: {
            text: "Start Now",
            link: "/contact"
        },
        secondary: {
            text: "View Programs",
            link: "/programs"
        }
    },
    image: trainer
};
const contactPage = {
    hero: {
        title: "Let's Start Your Journey",
        subtitle: "Ready to transform your fitness goals into reality? Get in touch and let's create your personalized plan.",
        image: trainer
    },

    contactInfo: [
        {
            id: 1,
            title: "Phone",
            value: "+1 (555) 123-4567",
            icon: Phone,
            link: "tel:+15551234567"
        },
        {
            id: 2,
            title: "Email",
            value: "coach@fitpro.com",
            icon: Mail,
            link: "mailto:coach@fitpro.com"
        },
        {
            id: 3,
            title: "Location",
            value: "Heraklion",
            icon: MapPin,
            link: "https://maps.google.com"
        },
        {
            id: 4,
            title: "Hours",
            value: "Mon-Fri: 6am - 9pm",
            icon: Clock,
            link: null
        }
    ],

    contactReasons: [
        {
            icon: MessageSquare,
            title: "Program Inquiries",
            description: "Learn more about our training programs and find the perfect fit for your goals."
        },
        {
            icon: Calendar,
            title: "Schedule Consultation",
            description: "Book your initial consultation to discuss your fitness journey."
        }
    ],

    formFields: {
        name: {
            label: "Full Name",
            placeholder: "Enter your full name",
            required: true
        },
        email: {
            label: "Email",
            placeholder: "Enter your email address",
            required: true
        },
        phone: {
            label: "Phone Number",
            placeholder: "Enter your phone number",
            required: false
        },
        program: {
            label: "Interested Program",
            options: [
                "Beginner Foundations",
                "Strength & Conditioning",
                "Elite Performance",
                "Not sure yet"
            ],
            required: true
        },
        message: {
            label: "Message",
            placeholder: "Tell us about your fitness goals and any questions you have",
            required: true
        }
    },

    faqs: [
        {
            question: "How soon will I hear back?",
            answer: "We typically respond within 24 hours during business days."
        },
        {
            question: "What happens after I submit the form?",
            answer: "We'll review your information and contact you to schedule a consultation."
        },
        {
            question: "Do you offer virtual consultations?",
            answer: "Yes! We can arrange video calls for remote clients."
        }
    ]
};
export {
    features,
    programs,
    faq,
    socialLinks,
    stats,
    heroSection,
    aboutPage,
    contactPage
};