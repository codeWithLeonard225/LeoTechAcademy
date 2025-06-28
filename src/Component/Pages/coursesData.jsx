// src/data/coursesData.js

// You can also include learningPaths data here if you want to keep all course-related data together
export const coursesData = [
  // --- Existing Courses ---
  {
    id: 'computer-base-windows',
    title: 'Computer Base (Windows)',
    description: 'Start your digital journey by learning how to use the Windows operating system, typing, manage files, install programs, and personalize your PC for work or study.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 300',
    category: 'IT Fundamentals',
    image: '/images/ComputerBasics.png',
    whatYouWillLearn: [
      'Navigate and customize the Windows desktop environment',
      'Manage files and folders efficiently',
      'Install and uninstall software programs',
      'Use typing skills for digital communication',
      'Personalize your PC settings for productivity',
      'Understand basic computer security and maintenance'
    ]
  }
  ,
  {
    id: 'ms-word',
    title: 'Microsoft Word Essentials',
    description: 'Learn to create, format, and edit documents professionally. Master text editing, tables, page layout, and printing.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 250',
    category: 'Microsoft Office',
    image: '/images/MSWord.png',
    whatYouWillLearn: [
      'Create and format professional documents',
      'Work efficiently with text editing tools',
      'Insert and manage tables and images',
      'Apply page layout settings for print-ready documents',
      'Use headers, footers, and page numbers',
      'Proofread and finalize documents for printing or sharing'
    ]
  }
  ,
  {
    id: 'ms-excel',
    title: 'Microsoft Excel Fundamentals',
    description: 'Master spreadsheets for data entry, calculations, charts, and analysis. Learn formulas, functions, and data organization.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '5 Weeks',
    price: 'SLL 300',
    category: 'Microsoft Office',
    image: '/images/MSExcel.png',
    whatYouWillLearn: [
      'Create and analyze Sales Reports for business insights',
      'Build and manage Grade Books for schools',
      'Track Employee Attendance with spreadsheets',
      'Design automated School Report Cards',
      'Understand and apply data validation for error-free data entry',
      'Prepare spreadsheets optimized for printing and sharing'
    ]
  }
  ,
  {
    id: 'ms-excel-advanced',
    title: 'Advanced Microsoft Excel',
    description: 'Take your Excel skills to the next level with pivot tables, Power Query, advanced formulas, and automation using Macros and VBA. Learn to create dynamic dashboards and perform powerful data analysis.',
    instructor: 'LeoTech',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    price: 'SLL 700',
    category: 'Microsoft Office',
    image: '/images/MSExcelAdvanced.jpg',
    whatYouWillLearn: [
      'Create and analyze data using Pivot Tables and Pivot Charts',
      'Import, transform, and clean data with Power Query',
      'Write and apply advanced formulas (INDEX/MATCH, IF with multiple conditions, array formulas)',
      'Design interactive and visually appealing dashboards',
      'Automate repetitive tasks with Macros recording',
      'Introduction to VBA programming for custom Excel automation',
      'Best practices for data organization and error checking'
    ]
  }
  ,
  {
    id: 'ms-powerpoint',
    title: 'Microsoft PowerPoint for Presentations',
    description: 'Create professional slide decks with text, images, transitions, and animations. Perfect for public speaking and teaching.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 250',
    category: 'Microsoft Office',
    image: '/images/MSPowerPoint.png',
    whatYouWillLearn: [
      'Create a Project Proposal presentation',
      'Design a Financial Report slide deck',
      'Build a Conference Presentation',
      'Develop Animated Storytelling slides',
      'Prepare presentations for public speaking',
      'Export and share presentations effectively'
    ]

  }
  ,
  {
    id: 'ms-access',
    title: 'Microsoft Access for Databases',
    description: 'Learn to build simple databases, create forms and reports, and manage data for small businesses or institutions.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '2 Months',
    price: 'SLL 550',
    category: 'Microsoft Office',
    image: '/images/MSAccess.png',
    whatYouWillLearn: [
      'Design and build a School Database',
      'Create and manage a Patient Database',
      'Develop an Employees Database',
      'Build a Police Station Database',
      'Set up a Football League Database',
      'Create forms and reports to manage data efficiently'
    ]
  }
  ,
  {
    id: 'ms-access-advanced',
    title: 'Advanced Microsoft Access',
    description: 'Master complex database design, advanced queries, automation, and reporting. Learn to build efficient, scalable Access databases for professional use.',
    instructor: 'LeoTech',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    price: 'SLL 700',
    category: 'Microsoft Office',
    image: '/images/MSAccessAdvanced.png',
    whatYouWillLearn: [
      'Design and optimize relational databases with advanced table relationships',
      'Create complex queries using SQL and parameter queries',
      'Develop advanced forms with subforms and conditional formatting',
      'Automate tasks using Macros and VBA programming',
      'Generate professional reports with grouping, sorting, and calculated fields',
      'Implement user-level security and database maintenance techniques',
      'Integrate Access databases with other Microsoft Office applications'
    ]
  }
  ,
  {
    id: 'ms-publisher',
    title: 'Microsoft Publisher for Design',
    description: 'Design flyers, newsletters, and brochures. Perfect for business and school print designs with easy-to-use templates.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 250',
    category: 'Microsoft Office',
    image: '/images/MSPublisher.png',
    whatYouWillLearn: [
      'Create professional Newsletters',
      'Design Book Report Covers',
      'Make eye-catching Posters',
      'Design Flyers for events',
      'Create Certificates for awards and recognition'
    ]
  },
  {
    id: 'google-workspace-essentials',
    title: 'Google Workspace Essentials',
    description: 'Boost your productivity by mastering Gmail, Google Docs, Sheets, Slides, and collaboration tools. Learn to manage your calendar and tasks efficiently with Google Calendar and Keep.',
    instructor: 'LeoTech',
    level: 'Beginner to Intermediate',
    duration: '6 Weeks',
    price: 'SLL 700',
    category: 'Productivity Tools',
    image: '/images/GoogleWorkspace.PNG',
    whatYouWillLearn: [
      'Effectively manage emails and labels in Gmail',
      'Create, edit, and collaborate on documents with Google Docs',
      'Build and analyze data with Google Sheets',
      'Design engaging presentations using Google Slides',
      'Share and collaborate on files in real-time',
      'Organize your schedule with Google Calendar',
      'Track tasks and notes using Google Keep'
    ]
  },
  {
    id: 'data-analysis-excel-powerbi',
    title: 'Data Analysis with Excel & Power BI',
    description: 'Learn fundamental data analysis techniques using Excel and Power BI. Create insightful reports and interactive dashboards to support informed decision-making.',
    instructor: 'LeoTech',
    level: 'Intermediate',
    duration: '5 Weeks',
    price: 'SLL 750',
    category: 'Data Analysis & Visualization',
    image: '/images/DataAnalysisPowerBI.png',
    whatYouWillLearn: [
      'Perform data cleaning and transformation in Excel',
      'Use Excel formulas and functions for data analysis',
      'Create PivotTables and PivotCharts for summary insights',
      'Introduction to Power BI interface and features',
      'Import and model data in Power BI',
      'Design interactive and dynamic dashboards',
      'Publish and share reports for business insights'
    ]
  },

  // --- New Programming & Web Development Courses ---
  {
    id: 'html-basics',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of the web by mastering HTML tags, elements, and page structure. Ideal for university exam prep.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '3 Weeks',
    price: 'SLL 300',
    category: 'Programming',
    image: '/images/HTML.png',
    whatYouWillLearn: [
      'Create a Personal Portfolio Website to showcase your skills and projects',
      'Build a Product Landing Page with images, descriptions, and calls to action',
      'Design an Event Invitation Page including date, location, and RSVP form',
      'Develop multi-page websites with navigation links',
      'Construct a Restaurant Menu using tables and images for visual appeal'
    ]
  }
  ,
  {
    id: 'css-basics',
    title: 'CSS Basics and Styling',
    description: 'Style web pages with CSS. Learn selectors, properties, layouts, and responsive design for your university projects.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: '350',
    category: 'Programming',
    image: '/images/CSS.png',
    whatYouWillLearn: [
      'Style your Personal Portfolio Website with colors, fonts, and spacing',
      'Create layouts using Flexbox and CSS Grid for responsive design',
      'Design navigation menus and interactive buttons',
      'Implement responsive design for mobile and desktop',
      'Enhance your website with animations and transitions'
    ]
  }
  ,
  {
    id: 'js-basics',
    title: 'JavaScript Essentials',
    description: 'Learn core JavaScript concepts like variables, functions, events, and DOM manipulation for interactive web pages.',
    instructor: 'LeoTech',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks',
    price: 'SLL 300',
    category: 'Programming',
    image: '/images/JavaScript.png',
    whatYouWillLearn: [
      'Add interactivity to your Portfolio Website with DOM manipulation',
      'Create dynamic features like to-do lists and image sliders',
      'Use event handling to respond to user actions',
      'Write reusable functions and manage program flow with conditionals and loops',
      'Build a functional interactive quiz or calculator'
    ]

  }
  ,
  {
    id: 'java-basics',
    title: 'Java Programming Basics',
    description: 'Get started with Java programming. Learn syntax, object-oriented concepts, and develop simple console applications.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '5 Weeks',
    price: 'SLL 350',
    category: 'Programming',
    image: '/images/Java.png',
    whatYouWillLearn: [
      'Set up Java development environment',
      'Write basic Java programs with variables and control structures',
      'Understand classes, objects, and methods',
      'Work with arrays and collections',
      'Hands-on practice: Create a basic student record management system'
    ]
  },
  {
    id: 'python-basics',
    title: 'Python for Beginners',
    description: 'Learn Python programming fundamentals including data types, control flow, functions, and basic file handling.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 350',
    category: 'Programming',
    image: '/images/Python.png',
    whatYouWillLearn: [
      'Understand Python syntax and data types',
      'Use conditionals and loops for control flow',
      'Define and call functions',
      'Perform file input/output',
      'Hands-on practice: Build a simple calculator app'
    ]
  },
  {
    id: 'cpp-basics',
    title: 'C++ Programming Introduction',
    description: 'Learn fundamental C++ programming concepts with emphasis on syntax, data types, and procedural programming.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '5 Weeks',
    price: 'SLL 450',
    category: 'Programming',
    image: '/images/Cpp.png',
    whatYouWillLearn: [
      'Set up a C++ development environment',
      'Understand variables, data types, and operators',
      'Control program flow using conditionals and loops',
      'Create and use functions',
      'Hands-on practice: Write a simple banking system program'
    ]
  }
  ,
  {
    id: 'csharp-basics',
    title: 'C# Fundamentals',
    description: 'Master C# basics including object-oriented programming, data types, and building simple Windows applications.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '5 Weeks',
    price: 'SLL 450',
    category: 'Programming',
    image: '/images/CSharp.png',
    whatYouWillLearn: [
      'Understand C# syntax and OOP concepts',
      'Work with classes, objects, and inheritance',
      'Use collections and exception handling',
      'Build basic GUI applications with Windows Forms',
      'Hands-on practice: Develop a contact management app'
    ]
  }
  ,
  {
    id: 'php-basics',
    title: 'PHP Programming Basics',
    description: 'Learn PHP fundamentals for server-side web development including syntax, forms handling, and database connectivity.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 300',
    category: 'Programming',
    image: '/images/PHP.png',
    whatYouWillLearn: [
      'Understand PHP syntax and server-side scripting',
      'Process HTML forms using PHP',
      'Connect to MySQL databases',
      'Manage sessions and cookies',
      'Hands-on practice: Build a simple login system'
    ]
  }
  ,
  {
    id: 'spss-basics',
    title: 'SPSS for Data Analysis',
    description: 'Learn to use SPSS software for statistical analysis, data management, and reporting in social sciences and research.',
    instructor: 'LeoTech',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 'SLL 450',
    category: 'Data Analysis',
    image: '/images/SPSS.png',
    whatYouWillLearn: [
      'Navigate the SPSS interface and import data',
      'Perform descriptive and inferential statistics',
      'Run correlation and regression analyses',
      'Create charts and graphs',
      'Hands-on practice: Analyze survey data'
    ]
  }
  ,
  {
    id: 'vba-basics',
    title: 'VBA for Automation',
    description: 'Automate repetitive tasks in Microsoft Office with VBA programming. Learn macros, custom functions, and event-driven programming.',
    instructor: 'LeoTech',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks',
    price: 'SLL 500',
    category: 'Programming & Automation',
    image: '/images/VBA.png',
    whatYouWillLearn: [
      'Record and edit macros in Excel and Access',
      'Write VBA code for automation',
      'Create custom functions and user forms',
      'Use event-driven programming techniques',
      'Hands-on practice: Automate report generation'
    ]
  }
  ,

];

export const learningPaths = [
  {
    id: 'frontend-dev-path',
    title: 'Frontend Web Developer Career Path',
    description: 'Become a skilled frontend developer by mastering the foundational tools of the web—HTML, CSS, and JavaScript. Perfect for building real-world websites and preparing for future technologies like React.',
    courses: ['HTML Fundamentals', 'CSS Styling & Layout Basics', 'JavaScript Essentials'],
    duration: '16 Weeks',
    image: '/images/web_dev.png',
    projectsYouWillBuild: [
      'Personal Portfolio Website',
      'Product Landing Page',
      'Interactive To-Do List App',
      'Survey Form with Form Validation',
      'Multi-page Blog Website with Navigation',
      'Event Registration Page',
      'Simple Image Gallery with Filters',
      'Mini Quiz App (DOM interaction)'
    ]
  }
  ,
  {
    id: 'react-dev-path',
    title: 'React.js Developer Career Path   (Frontend framework)',
    description: 'Build dynamic user interfaces with React. Learn components, state management, routing, and integrate APIs for real-world applications.',
    courses: [
      'React Fundamentals',
      'React Hooks & State Management',
      'Routing with React Router',
      'API Integration & Axios',
      'Form Handling and Validation',
      'Project: Task Manager or Blog App'
    ],
    duration: '8 Weeks',
    image: '/images/ReactJs.png',
    projectsYouWillBuild: [
      'Task Management App',
      'Blog Platform with React Router',
      'Weather App using API',
      'Form Validation System'
    ]
  }
  ,
  {
    id: 'vue-dev-path ',
    title: 'Vue.js Developer Career Path  (Frontend framework)',
    description: 'Master Vue to create reactive and efficient web applications. Includes Vue components, directives, state, Vue Router, and Vuex.',
    courses: [
      'Vue 3 Fundamentals',
      'Single File Components & Composition API',
      'Vue Router for Navigation',
      'Vuex for State Management',
      'Handling APIs and Forms',
      'Project: Inventory Dashboard or Portfolio CMS'
    ],
    duration: '6 Weeks',
    image: '/images/Vue.png',
    projectsYouWillBuild: [
      'Personal Portfolio CMS',
      'Inventory Dashboard',
      'Vue-based Quiz App',
      'API-driven News Feed'
    ]
  },
  {
    id: 'angular-dev-path ',
    title: 'Angular Developer Career Path  (Frontend framework)',
    description: 'Learn Angular framework to build robust and scalable enterprise-level apps. Cover components, services, routing, and RxJS.',
    courses: [
      'Angular Fundamentals',
      'Component-Based Architecture',
      'Services & Dependency Injection',
      'Routing and Navigation',
      'RxJS and Observables',
      'Project: Employee Management System'
    ],
    duration: '3 Months',
    image: '/images/angular.png',
    projectsYouWillBuild: [
      'Employee Management System',
      'Data Table with Pagination & Filters',
      'Angular Form App with Validation',
      'Customer Feedback Tracker'
    ]
  },
  {
    id: 'mysql-phpmyadmin-path',
    title: 'MySQL with phpMyAdmin Path (Database)',
    description: 'Master SQL database management using phpMyAdmin. Ideal for schools, hospitals, and administrative systems in Sierra Leone.',
    courses: [
      'Database Design & Relationships',
      'SQL Fundamentals (SELECT, INSERT, UPDATE, DELETE)',
      'Normalization and Constraints',
      'phpMyAdmin Interface & Operations',
      'Data Import/Export & Backup'
    ],
    duration: '4 Months',
    image: '/images/MsqlphpMyAdmin.png',
    projectsYouWillBuild: [
      'Hospital Management System',
      'School Report Card Database',
      'Police Complaint Tracker',
      'Birth & Testimonial Certificate Record'
    ]
  },
  {
    id: 'firebase-db-path',
    title: 'Firebase Realtime & Firestore Path (Database)',
    description: 'Build fast, real-time, cloud-powered apps with Firebase Firestore and Authentication. Perfect for mobile and e-learning apps.',
    courses: [
      'Firebase Console & Setup',
      'Firestore Database Structure',
      'Authentication with Email & Google',
      'Realtime Data Sync & Rules',
      'Deploying with Firebase Hosting'
    ],
    duration: '3 months',
    image: '/images/firebase.png',
    projectsYouWillBuild: [
      'Quiz App with Login',
      'Student Tracker System',
      'Live Chat App',
      'Realtime Feedback Board'
    ]
  },
  {
    id: 'mongodb-node-path',
    title: 'MongoDB & Node.js Backend Path (Database)',
    description: 'Learn to build flexible, modern web apps using MongoDB and Mongoose with Node.js. Ideal for scalable systems and modern backend services.',
    courses: [
      'MongoDB Basics & Atlas Setup',
      'Mongoose for Node.js Integration',
      'Schema Design & CRUD APIs',
      'Advanced Queries & Aggregation',
      'Connecting to Frontend with Express'
    ],
    duration: '3 Months',
    image: '/images/mongodb.png',
    projectsYouWillBuild: [
      'Student API Backend',
      'E-learning Progress Tracker',
      'Inventory Manager',
      'Blog or News Backend System'
    ]
  },
  {
    id: 'graphic-design-path',
    title: 'Graphic Design Career Path',
    description: 'Develop creative design skills using industry-standard tools like Photoshop and CorelDRAW,  Perfect for freelancers, marketing teams, and creatives.',
    courses: [
      'Photoshop Fundamentals & Photo Editing',
      'Design Posters & Flyers with CorelDRAW',
      'Typography, Branding & Layout Principles',
      'Portfolio Building & Export for Print'
    ],
    duration: '3 Months',
    image: '/images/graphicsDesign.png',
    projectsYouWillBuild: [
      'Business Logo Set',
      'Event Flyer & Certificate',
      'Product Package Design',
      'Social Media Graphic Set'
    ]
  },
  {
    id: 'app-development-path',
    title: 'Mobile App Development Career Path',
    description: 'Build mobile applications using React Native, Flutter, and Android Studio. Learn to design, build, test, and publish apps for Android and iOS.',
    courses: [
      'Introduction to Mobile App Development',
      'React Native Basics & Expo',
      'Flutter Widgets & Dart Syntax',
      'Building UI & Navigation',
      'Publishing Apps with Android Studio & Play Store'
    ],
    duration: '6 months Per program',
    image: '/images/appdev.png',
    projectsYouWillBuild: [
      'Community Chat App',
      'Student Quiz App',
      'News Reader App',
      'Tour Guide Mobile App for Sierra Leone'
    ]
  },
   {
    id: 'git-github-path',
    title: 'Git & GitHub Version Control Path',
    description: 'Learn how to use Git for version control and collaborate on projects with GitHub. Essential for developers and teams.',
    courses: [
      'Git Basics: init, commit, branch',
      'Cloning and Pulling from GitHub',
      'Resolving Merge Conflicts',
      'GitHub Pull Requests & Issues',
      'Collaborative Project Management'
    ],
    duration: '3 Weeks',
    image: '/images/gitGitub.png',
    projectsYouWillBuild: [
      'Personal Portfolio Repository',
      'Team Project with Collaboration Workflow',
      'Issue Tracking System with GitHub Projects',
      'Contribution to Open Source Repo'
    ]
  }

];