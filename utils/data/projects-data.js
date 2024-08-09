import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

import dineSmart from '/public/image/dine-smart.jpg';
import spotOn from '/public/image/spot-on.jpg';
import ecommerce from '/public/image/ecommerce.jpg';
import socialMedia from '/public/image/social-media.jpg';
import portfolio from '/public/image/portfolio.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DineSmart',
        description: 'Smart Dining platform to order food digitally with features like QR code scanning, real-time food preparation tracking, and a user-friendly interface. The platform allows multiple restaurants to join and use this service.',
        tools: ['Flutter', 'AWS', 'Firebase', 'Dart', 'QR Code Scanner'],
        role: 'Flutter Developer',
        code: '',
        demo: '',
        image: dineSmart, // Replace with the correct image import
    },
    {
        id: 2,
        name: 'SpotOn',
        description: 'Machine Learning project for detecting skin cancer. The application uses Convolutional Neural Networks (CNN) and deep learning techniques to analyze images of skin and predict the likelihood of cancer.',
        tools: ['Machine Learning', 'CNN', 'Deep Learning', 'Flutter', 'Firebase', 'TensorFlow', 'Keras', 'OpenCV'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: spotOn, // Replace with the correct image import
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'VideoConnect',
        description: 'Developed a cross-platform video calling and streaming application named VideoConnect. The app supports real-time video calls, group video conferencing, and live video streaming. Implemented features such as chat integration, screen sharing, and dynamic bandwidth adjustment to ensure smooth streaming. The app also allows users to create and join live streaming events.',
        tools: ['Flutter', 'Dart', 'WebRTC', 'Firebase', 'Agora SDK', 'Cloud Firestore', 'Provider', 'RTMP'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla, 
    },
    
    {
        id: 5,
        name: 'E-commerce Platform',
        description: 'Developed a cross-platform e-commerce platform featuring user authentication, product listings, shopping cart functionality, and order processing. Integrated payment gateways and built an admin panel for managing products and orders.',
        tools: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'Provider', 'Cloud Firestore', 'Cloud Functions'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ecommerce,
    },
    {
        id: 6,
        name: 'Social Media Dashboard',
        description: 'Created a cross-platform social media dashboard that aggregates data from multiple platforms. Implemented features such as user profile management, analytics, and notifications. Utilized real-time data updates and advanced filtering options.',
        tools: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'REST API', 'Provider'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: socialMedia,
    },
    {
        id: 7,
        name: 'Personal Portfolio App',
        description: 'Designed and developed a personal portfolio mobile application to showcase projects, skills, and experiences. Features include a blog section, contact form, and dynamic content updates. Focused on responsive design and SEO optimization.',
        tools: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'GetX'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: portfolio,
    }    
];
