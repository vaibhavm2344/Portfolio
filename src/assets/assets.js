
export const projects = [
    {
        title : 'Master Anything',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'MasterAnything is a full-stack MERN web application where users can generate personalized learning plans by simply entering a topic and number of days. Built with JWT authentication, the platform assigns and retrieves user-specific courses using an LLM-powered backend.',
        features : [ 
            'Secure login & signup using JWT.',
            'Generate day-wise study plans using Gemini.',
            'Only see your own generated courses.',
            'Built with React, Tailwind, Axios & Router.',
            'Courses stored in MongoDB with Mongoose.',
            'Node.js + Express backend for secure data flow.'
        ],
        techStack : ['React','Tailwind','Node.js','Express.js','MongoDB','GeminiAPI'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/masterAnything',
    },
    {
        title : 'Imager',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'Imager is a web-based application that allows users to generate stunning AI images by simply typing a prompt. Built with modern frontend tools and backed by a powerful image-generation API.',
        features:[],
        techStack : ['React','Tailwind','Node.js','Express.js','MongoDB','GeminiAPI'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/imager',
    },
    {
        title : 'Notes App',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'QuickNotes is a simple and intuitive React-based Notes Application that helps users capture ideas, manage tasks, and stay organized. With built-in login and registration features, users can securely access their personal notes from any device.',
        features:[
            'Add notes with title and description',
            'Dynamically renders all added notes',
            'Material UI icons (delete, add)',
            'Responsive and minimal UI'
        ],
        techStack : ['React','Tailwind','Node.js','Express.js','MongoDB','GeminiAPI'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/notes-app',
    },
    {
        title : 'To-Do List',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'A simple and elegant To-Do List web application built with Node.js, Express, EJS, and PostgreSQL. This project allows users to manage their tasks efficiently with features like adding, editing, deleting, and checking off completed tasks.',
        features:[
            'Add new tasks',
            'Edit existing tasks',
            'Delete tasks via checkbox',
            'Organize tasks by list title (e.g., "Today", "Work")',
            'Persistent data storage using PostgreSQL',
            'Clean and responsive UI with EJS templating'
        ],
        techStack : ['React','Node.js','Express.js','Postgresql'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/To-Do-List',
    },
    {
        title : 'Bouncing Ball Game',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'A fun computer vision game where you control a paddle using your index finger tracked via webcam! Made with OpenCV, MediaPipe, and Python.',
        features:[
            'Hand tracking with MediaPipe',
            'Ball bouncing physics',
            'Paddle controlled by index finger',
            'Score tracking',
            'Lives system',
            'Increasing ball speed per bounce',
            'Sound effects for hit, miss, and game over'
        ],
        techStack : ['Python','OpenCV','Mdediapipe'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/bouncing-ball-game',
    },
    {
        title : 'Volume by gesture',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'Control your system volume with hand gestures using Python, OpenCV, MediaPipe, and Pycaw. This project detects your hand in real-time and adjusts the system volume based on the distance between your thumb and index finger.',
        features:[
            'Real-time hand tracking using MediaPipe',
            'Distance-based gesture detection (Thumb-Index finger pinch)',
            'Smooth volume control mapped to hand movement',
            'FPS display on screen',
        ],
        techStack : ['Python','OpenCV','MediaPipe','Pycaw '],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/volume-by-gesture',
    },
    {
        title : 'Eye Wheel',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'A real-time eye-tracking system to control wheelchair movement using gaze direction and blinking for hands-free navigation.',
        features:[
            'Real-time eye tracking using webcam',
            'Detects gaze direction and blink',
            'Sends control signals to Arduino using pyFirmata',
            'Motors move in the desired direction (left, right, forward, stop)',
        ],
        techStack : ['Python','OpenCV','pyFirmata','GazeTracking Library'],
        hardware:['Arduino Uno','Motor Driver (e.g., L298N)','2 DC motors'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/eye-controlled-wheelchair',
    },
    {
        title : 'Banking System (OOPs)',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        description : 'This project simulates a simple banking system using core Object-Oriented Programming (OOP) principles in C++. It allows users to create and manage Savings and Current accounts with real-world functionalities like deposits, withdrawals, overdrafts, and interest calculation.',
        features:[
            'Create Savings and Current accounts',
            'Deposit and withdraw funds',
            'Calculate interest for Savings Accounts',
            'Handle overdrafts for Current Accounts',
            'Display account details',
            'Menu-driven CLI interface'
        ],
        techStack : ['C++'],
        date : '',
        demo : '',
        github : 'https://github.com/vaibhavm2344/Banking-System-OOP',
    },
]

export const tech = ['React.js','Next.js','Tailwind CSS','JavaScript','Node.js','Express.js','REST API','MongoDB',
    'Mongoose', 'Git & GitHub', 'Docker', 'Postman', 'Figma'
]