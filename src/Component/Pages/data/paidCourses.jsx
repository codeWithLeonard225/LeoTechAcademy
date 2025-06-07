// src/data/paidCourses.js

export const paidCourses = [
  {
    id: 'solar-installation-fundamentals',
    title: 'Solar Panel Installation Fundamentals',
    description: 'Master the basics of solar energy, panel installation, and maintenance for residential and commercial systems.',
    instructor: 'John Kamara',
    level: 'Beginner',
    duration: '4 Weeks / 20 Lessons',
    price: '$50 USD / SLL 1,250,000',
    category: 'Technical Trades',
    image: 'https://via.placeholder.com/400x250/38a169/ffffff?text=Solar+Install',
    
    // NEW: Detailed weekly content breakdown
    weeklyContent: [
      {
        week: 1,
        title: 'Introduction to Solar Energy & Safety',
        lessons: [
          'What is Solar Energy? Types of Solar Systems (PV vs. Thermal)',
          'Benefits of Solar Energy in Sierra Leone',
          'Basic Electrical Concepts (Voltage, Current, Resistance)',
          'Safety Protocols for Solar Installation Work'
        ],
        videos: [
          { title: 'Understanding Solar Power Basics', url: '/demo.mp4' },
          { title: 'Electrical Safety for Beginners', url: '/2b.mp4' }
        ],
        readings: [
          'Article: The Rise of Solar in West Africa',
          'PDF: Basic Electrical Theory Handbook'
        ],
        assignments: [
          'Quiz 1: Solar Energy Concepts',
          'Discussion: Local Applications of Solar Power'
        ]
      },
      {
        week: 2,
        title: 'Solar Panel Components & Sizing',
        lessons: [
          'Types of Solar Panels (Monocrystalline, Polycrystalline, Thin-Film)',
          'Inverters: On-grid vs. Off-grid systems',
          'Batteries: Types, Storage, and Maintenance',
          'Charge Controllers and Wiring Principles',
          'Basic Load Calculation & System Sizing'
        ],
        videos: [
          { title: 'Choosing the Right Solar Panel', url: '/demo.mp4' },
          { title: 'Inverter Types Explained', url: '/2a.mp4' },
          { title: 'Sizing Your Solar System', url: '/2c.mp4' }
        ],
        assignments: [
          'Exercise: Calculate daily energy consumption for a household',
          'Project: Design a small off-grid system for a single room'
        ]
      },
      {
        week: 3,
        title: 'Installation Techniques & Mounting Systems',
        lessons: [
          'Site Assessment and Shading Analysis',
          'Roof-mounted vs. Ground-mounted systems',
          'Mounting Hardware and Structural Considerations',
          'Wiring Solar Panels: Series and Parallel Connections',
          'Connecting to Inverters and Charge Controllers'
        ],
        videos: [
          { title: 'Roof Mounting Best Practices', url: '/demo.mp4' },
          { title: 'Solar Panel Wiring Demo', url: '/2a.mp4' }
        ],
        assignments: [
          'Case Study: Analyze a challenging installation scenario',
          'Practical: Simulated panel mounting exercise'
        ]
      },
      {
        week: 4,
        title: 'Testing, Maintenance & Troubleshooting',
        lessons: [
          'System Commissioning and Testing Procedures',
          'Common Solar System Problems and Solutions',
          'Routine Maintenance and Cleaning of Panels',
          'Battery Maintenance and Lifespan Extension',
          'Introduction to Solar Business & Customer Service'
        ],
        videos: [
          { title: 'Solar System Troubleshooting Guide', url: 'https://www.youtube.com/embed/troubleshoot_vid' },
          { title: 'Maintenance Tips for Solar Panels', url: 'https://www.youtube.com/embed/maint_tips_vid' }
        ],
        assignments: [
          'Final Project: Propose a solar solution for a community center',
          'Presentation: My Solar Business Plan'
        ]
      }
    ]
  },
  {
    id: 'intro-web-dev-react',
    title: 'Introduction to Web Development (React Basics)',
    description: 'Learn to build dynamic and interactive user interfaces using React.js, HTML, CSS, and JavaScript.',
    instructor: 'Jane Doe',
    level: 'Beginner',
    duration: '6 Weeks / 30 Lessons',
    price: '$75 USD / SLL 1,875,000',
    category: 'IT & Digital Skills',
    image: 'https://via.placeholder.com/400x250/1a202c/ffffff?text=React+Web+Dev',
    weeklyContent: [
      {
        week: 1,
        title: 'HTML Fundamentals & Web Structure',
        lessons: [
          'Introduction to Web Development',
          'Basic HTML Document Structure (html, head, body)',
          'Text Formatting & Semantic HTML',
          'Lists, Links, and Images',
          'Tables for Tabular Data'
        ],
        videos: [
          { title: 'What is HTML?', url: 'https://www.youtube.com/embed/htmlintro_vid' },
          { title: 'Structuring Your First Webpage', url: 'https://www.youtube.com/embed/htmlstructure_vid' }
        ],
        readings: [],
        assignments: ['Build a simple HTML resume page']
      },
      {
        week: 2,
        title: 'CSS Basics & Styling Your Webpage',
        lessons: [
          'Introduction to CSS: Inline, Internal, External Styles',
          'Selectors, Properties, and Values',
          'The Box Model: Margin, Padding, Border',
          'Basic Typography and Color Theory',
          'Flexbox for Layouts'
        ],
        videos: [
          { title: 'CSS Crash Course', url: 'https://www.youtube.com/embed/cssintro_vid' },
          { title: 'Understanding CSS Box Model', url: 'https://www.youtube.com/embed/cssboxmodel_vid' }
        ],
        readings: [],
        assignments: ['Style your resume page using CSS']
      },
      {
        week: 3,
        title: 'JavaScript Fundamentals',
        lessons: [
          'Introduction to JavaScript: Variables, Data Types',
          'Operators and Expressions',
          'Conditional Statements (if/else, switch)',
          'Loops (for, while)',
          'Functions: Declaration and Invocation'
        ],
        videos: [
          { title: 'JavaScript for Beginners', url: 'https://www.youtube.com/embed/jsintro_vid' },
          { title: 'Working with Functions in JS', url: 'https://www.youtube.com/embed/jsfunctions_vid' }
        ],
        readings: [],
        assignments: ['Create a simple interactive calculator with JS']
      },
      {
        week: 4,
        title: 'DOM Manipulation & Events',
        lessons: [
          'What is the DOM?',
          'Selecting DOM Elements',
          'Modifying HTML, CSS, and Attributes with JS',
          'Event Listeners and Event Handling',
          'Introduction to JSON and API Calls (basic concept)'
        ],
        videos: [
          { title: 'DOM Manipulation Explained', url: 'https://www.youtube.com/embed/domintro_vid' },
          { title: 'Handling User Events with JS', url: 'https://www.youtube.com/embed/jsevents_vid' }
        ],
        readings: [],
        assignments: ['Build a To-Do List application']
      },
      {
        week: 5,
        title: 'Introduction to React.js',
        lessons: [
          'Why React? Understanding Components',
          'Setting up a React Project (Create React App)',
          'JSX: JavaScript XML',
          'Props: Passing Data to Components',
          'State: Managing Component Data'
        ],
        videos: [
          { title: 'React.js Crash Course', url: 'https://www.youtube.com/embed/reactintro_vid' },
          { title: 'Understanding Props and State', url: 'https://www.youtube.com/embed/reactpropsstate_vid' }
        ],
        readings: [],
        assignments: ['Create a simple React component (e.g., a counter)']
      },
      {
        week: 6,
        title: 'React Components & Hooks',
        lessons: [
          'Component Lifecycle (basic understanding)',
          'Handling Events in React',
          'Conditional Rendering',
          'Lists and Keys',
          'Introduction to Hooks (useState, useEffect)',
          'Building a Mini-Project with React'
        ],
        videos: [
          { title: 'React Hooks Explained', url: 'https://www.youtube.com/embed/reacthooks_vid' },
          { title: 'Building a Simple React App', url: 'https://www.youtube.com/embed/reactmini_project' }
        ],
        readings: [],
        assignments: ['Final Project: Build a small interactive web app using React']
      }
    ]
  },
  // ... (add weeklyContent for other courses in a similar structure)
  {
    id: 'mobile-phone-repair',
    title: 'Mobile Phone Repair & Diagnostics',
    description: 'Acquire practical skills in diagnosing and repairing common issues in smartphones and feature phones.',
    instructor: 'Mariama Bangura',
    level: 'Beginner',
    duration: '3 Weeks / 15 Lessons',
    price: '$40 USD / SLL 1,000,000',
    category: 'Technical Trades',
    image: 'https://via.placeholder.com/400x250/f6e05e/000000?text=Phone+Repair',
    weeklyContent: [
      {
        week: 1,
        title: 'Tools, Safety & Basic Disassembly',
        lessons: [
          'Introduction to Mobile Phone Components',
          'Essential Tools for Mobile Repair (Screwdrivers, Spudgers, Heat Gun, Multimeter)',
          'Safety Precautions for Electronics Repair',
          'Proper Disassembly Techniques for Common Smartphones',
          'Identifying Internal Components (Battery, Motherboard, Screen, Camera)'
        ],
        videos: [
          { title: 'Essential Mobile Repair Tools', url: 'https://www.youtube.com/embed/repairtools_vid' },
          { title: 'Safe Phone Disassembly Guide', url: 'https://www.youtube.com/embed/phonedisassembly_vid' }
        ],
        assignments: ['Identify tools and their uses', 'Practice safe phone opening on a dummy device']
      },
      {
        week: 2,
        title: 'Common Repairs & Troubleshooting',
        lessons: [
          'Screen Replacement Procedures (LCD, OLED)',
          'Battery Replacement & Calibration',
          'Charging Port Repair & Soldering Basics',
          'Speaker, Microphone, and Camera Issues',
          'Troubleshooting Software vs. Hardware Problems'
        ],
        videos: [
          { title: 'How to Replace a Phone Screen', url: 'https://www.youtube.com/embed/screencover_vid' },
          { title: 'Charging Port Repair Demo', url: 'https://www.youtube.com/embed/chargingport_vid' }
        ],
        assignments: ['Practice screen replacement on a faulty device', 'Diagnose a non-charging phone problem']
      },
      {
        week: 3,
        title: 'Advanced Diagnostics & Business Skills',
        lessons: [
          'Water Damage Restoration Techniques',
          'Motherboard Diagnostics (Basic Level)',
          'Software Flashing and Firmware Updates',
          'Pricing Repairs & Customer Service',
          'Setting Up Your Mobile Repair Business'
        ],
        videos: [
          { title: 'Water Damage Repair Tips', url: 'https://www.youtube.com/embed/waterdamage_vid' },
          { title: 'Starting Your Repair Business', url: 'https://www.youtube.com/embed/repairbiz_vid' }
        ],
        assignments: ['Case Study: Water damaged phone scenario', 'Develop a simple repair price list']
      }
    ]
  },
  // Add weeklyContent for other courses here following the same structure
  // ... (rest of your courses)
];
