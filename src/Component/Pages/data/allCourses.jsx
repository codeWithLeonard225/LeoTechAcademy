// src/data/allCourses.js (This will contain only FREE courses)

export const allCourses = [
  {
    id: 'html-fundamentals',
    title: 'HTML Fundamentals',
    description: 'Learn the essential building blocks of web pages with HTML5.',
    instructor: 'Jane Doe',
    level: 'Beginner',
    duration: '2 Weeks / 10 Lessons',
    price: 'Free', // Explicitly marked as Free
    category: 'IT & Digital Skills',
    image: 'https://via.placeholder.com/400x250/f87171/ffffff?text=HTML',
    totalWeeks: 2, // Added totalWeeks for consistency
    weeklyContent: [
      {
        week: 1,
        title: 'Introduction to HTML & Basic Structure',
        lessons: [
          'What is HTML?',
          'HTML Document Structure (html, head, body)',
          'Text Formatting Tags (h1-h6, p, strong, em)',
          'Lists (ul, ol, li)',
          'Links (a tag) and Images (img tag)'
        ],
        videos: [
          { title: 'Your First HTML Page', url: 'https://www.youtube.com/intl/ALL_au/howyoutubeworks/our-commitments/sharing-revenue/' },
          { title: 'Working with Text and Links', url: 'https://www.youtube.com/howyoutubeworks/creator-economy/' }
        ],
        readings: ['Article: History of HTML', 'MDN HTML Basics'],
        assignments: ['Build a simple personal webpage with text and links']
      },
      {
        week: 2,
        title: 'Advanced HTML Elements & Forms',
        lessons: [
          'Tables for Tabular Data',
          'Forms: Input Types, Labels, Buttons',
          'Semantic HTML5 Elements (header, nav, main, footer, article, section, aside)',
          'Embedding Media (audio, video, iframe)',
          'HTML Entities and Comments'
        ],
        videos: [
          { title: 'Creating HTML Forms', url: 'https://www.youtube.com/intl/ALL_uk/howyoutubeworks/product-features/monetization/' },
          { title: 'Understanding Semantic HTML', url: 'https://www.youtube.com/watch?v=KSoBnylyF-o' }
        ],
        readings: ['Article: HTML Forms Best Practices', 'MDN Semantic HTML'],
        assignments: ['Create a feedback form', 'Restructure your personal webpage with semantic tags']
      }
    ]
  },
  {
    id: 'css-styling-basics',
    title: 'CSS Styling Basics',
    description: 'Learn to style your web pages with Cascading Style Sheets (CSS).',
    instructor: 'David Lee',
    level: 'Beginner',
    duration: '2 Weeks / 10 Lessons',
    price: 'Free', // Explicitly marked as Free
    category: 'IT & Digital Skills',
    image: 'https://via.placeholder.com/400x250/60a5fa/ffffff?text=CSS',
    totalWeeks: 2, // Added totalWeeks for consistency
    weeklyContent: [
      {
        week: 1,
        title: 'Introduction to CSS & Selectors',
        lessons: [
          'What is CSS? Inline, Internal, External Styles',
          'CSS Syntax: Selectors, Properties, Values',
          'Type, Class, and ID Selectors',
          'Combinator Selectors',
          'Understanding the Cascade, Specificity, and Inheritance'
        ],
        videos: [
          { title: 'CSS Introduction and How to Link CSS', url: 'https://www.youtube.com/intl/en_mt/howyoutubeworks/our-commitments/sharing-revenue/#:~:text=How%20does%20YouTube%20make%20money,Chat%2C%20channel%20memberships%20and%20merchandise' },
          { title: 'Mastering CSS Selectors', url: 'https://www.youtube.com/intl/en_mt/howyoutubeworks/our-commitments/sharing-revenue/' }
        ],
        readings: ['Article: CSS Basics for Beginners', 'MDN CSS Introduction'],
        assignments: ['Apply different styles to your HTML webpage using various selectors']
      },
      {
        week: 2,
        title: 'Box Model, Layout & Basic Styling',
        lessons: [
          'The CSS Box Model: Margin, Border, Padding, Content',
          'Setting Width and Height',
          'Display Properties (block, inline, inline-block)',
          'Introduction to Flexbox for Layouts',
          'Basic Typography (font-family, font-size, color) and Backgrounds'
        ],
        videos: [
          { title: 'The CSS Box Model Explained', url: 'https://www.youtube.com/watch?v=IuSH0VHazcA' },
          { title: 'Flexbox Crash Course', url: 'www.youtube.com' }
        ],
        readings: ['Article: A Complete Guide to Flexbox', 'MDN Box Model'],
        assignments: ['Re-layout your personal webpage using Flexbox', 'Style text and background colors']
      }
    ]
  }
];