const navData = ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'];

const exploreData = ['Start here', 'Success story', 'Blog', 'Courses', 'About us', 'Contact us'];

const informationData = ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of services']

const cardsData = [
    {
        url: "./immagini/home-5-image-box-01.png",
        title: "Idea Discussion",
        text: "Get teamed up with the specialists who work and teach coding for years at famous universities.",
    },
    {
        url: "./immagini/home-5-image-box-02.png",
        title: "Web Developement",
        text: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
    },
    {
        url: "./immagini/home-5-image-box-03.png",
        title: "System Administration",
        text: "Learners are encouraged to study the mechanism and structure of system administration.",
    },
    {
        url: "./immagini/home-5-image-box-04.png",
        title: "Graphic Design",
        text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",
    }
]
const accordiumData = [
    {
        accTitle: 'Multiple Platforms Supported for Teaching & Studying',
        accText: 'MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device. ',
        isActive: true
    },
    {
        accTitle: 'Multiple Course Participation at the Same Time',
        accText: 'Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach. ',
        isActive: false
    },
    {
        accTitle: 'Track Study Progress & Deliver Prompt Feedback',
        accText: 'It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility. ',
        isActive: false
    }
]

const coursesData = [
    {
        img: './immagini/finance-course-thumbnail-04-480x298.jpg',
        teacher: "Owen Christ",
        teacheImg: './immagini/blache.jpeg',
        course: 'Personal Finance: Financial Security Thinking & Principles',
        lesson: '2',
        student: '281',
        price: 'Free'
    },
    {
        img: './immagini/course-02-480x298.jpg',
        teacher: "Blanche Fields",
        teacheImg: './immagini/blache.jpeg',
        course: 'Learning to Write as a Professional Author',
        lesson: '20',
        student: '75',
        price: '$40.00'
    },
    {
        img: './immagini/stock-full-hd-03-480x298.jpg',
        teacher: "Maggie Strickland",
        teacheImg: './immagini/maggie.jpeg',
        course: 'Customer-centric Info-Tech Strategies',
        lesson: '24',
        student: '950',
        price: 'Free'
    },
    {
        img: './immagini/stock-full-hd-04-480x298.jpg',
        teacher: "Maggie Strickland",
        teacheImg: './immagini/maggie.jpeg',
        course: 'Open Programming Courses for Everyone: Python',
        lesson: '17',
        student: '66',
        price: '$19.00'
    },
    {
        img: './immagini/stock-full-hd-06-480x298.jpg',
        teacher: "Blanche Fields",
        teacheImg: './immagini/blache.jpeg',
        course: 'Academic Listening and Note-taking',
        lesson: '14',
        student: '68',
        price: '$26.00'
    },
    {
        img: './immagini/course-featured-image-01-480x298.jpg',
        teacher: "Blanche Fields",
        teacheImg: './immagini/blache.jpeg',
        course: 'Master jQuery in a Short Period of Time',
        lesson: '6',
        student: '51',
        price: '$39.00'
    },
]

const eventsData = [
    {
        city: 'Texas, US',
        conferenceName: "Storytelling Workshop",
        data: '22',
        mounth: 'APR',
    },
    {
        city: 'New York, US',
        conferenceName: "Painting Art Contest 2020",
        data: '10',
        mounth: 'OCT',
    },
    {
        city: 'Hamburg, Germany',
        conferenceName: "International Art Fair 2020",
        data: '23',
        mounth: 'NOV',
    },
    {
        city: 'Illinois, US',
        conferenceName: "Street Performance: Call for Artist",
        data: '15',
        mounth: 'DEC',
    },
    {
        city: 'Illinois, US',
        conferenceName: "Consumer Food Safety Education Conference",
        data: '22',
        mounth: 'JUL',
    },
    {
        city: 'Dubai',
        conferenceName: "How meditation improve your mental health?",
        data: '12',
        mounth: 'AUG',
    },
]

const caruselCoach = [
    {
        imgCoach: './immagini/testimonial-avata-02.jpg',
        presentation: "I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.	",
        nameCoach: 'Mina Hollace',
        professionCoach: '/Freelance',
    },
    {
        imgCoach: './immagini/testimonial-avata-04.jpg',
        presentation: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
        nameCoach: 'Madley Pondor',
        professionCoach: '/IT Specialist',
    },
    {
        imgCoach: './immagini/testimonial-avata-01.jpg',
        presentation: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation.",
        nameCoach: 'Luvic Dubble',
        professionCoach: '/Private Tutor',
    },
    {
        imgCoach: './immagini/testimonial-avata-03.jpg',
        presentation: "I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me",
        nameCoach: 'Florence Themes',
        professionCoach: '/Multimedia Admin',
    },
]


export { navData, exploreData, informationData, cardsData, accordiumData, coursesData, eventsData, caruselCoach };

// Home: [
//     'MaxCoach Education',
//     'HOT',
//     'Course Portal',
//     'Distant Learning',
//     'HOT',
//     'Multimedia Pedagogy',
//     'Modern Schooling',
//     'Remote Training',
//     'Health Coaching',
//     'Gym Coaching',
//     'Business',
//     'Artist',
//     'Kitchen Coach',
//     'Motivation',
//     'Dancing',
//     'Guitar',
//     'Yoga',
//     'Photography',
//     'Personal Finance',
//     'Sales Coaching',
//     'NEW',
//     'Mental Therapy',
//     'NEW'
// ],
// Pages: [
//     'Start Here',
//     'Success Story',
//     'About me',
//     'About us 01',
//     'About us 02',
//     'About us 03',
//     'Contact me',
//     'Contact us',
//     'Purchase Guide',
//     'Privacy Policy',
//     'Terms of Service'
// ],
// Courses: [
//     'Courses Grid 01',
//     'Courses Grid 02',
//     'Courses Grid 03',
//     'Membership Levels',
//     'Become a Teacher',
//     'Profile',
//     'Checkout',
//     'Single Layout'
// ],
// Features: [
//     'Events',
//     'Zoom Meetings'
// ],
// Blog: [
//     'Blog Grid',
//     'Blog Masonry',
//     'Blog Classic',
//     'Blog List'
// ],
// Shop: [
//     'Shop Left Sidebar',
//     'Shop Right Sidebar',
//     'Cart',
//     'Wishlist',
//     'Single Product'
// ],
// };