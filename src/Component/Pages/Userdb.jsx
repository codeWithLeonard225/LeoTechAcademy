// src/data/users.js

export const users = [
  {
    id: 'USER123456',
    username: 'John Doe',
    profilePhoto: 'https://via.placeholder.com/150/007bff/ffffff?text=JD',
    tel: '+232 76 123456',
    address: '123 Main St, Freetown, Sierra Leone',
    email: 'john.doe@example.com',
    enrolledCourseIds: [
      'html-fundamentals',
      'css-styling-basics',
      'solar-installation-fundamentals',
      'intro-web-dev-react',
      'mobile-phone-repair',
    ],
    userProgress: {
      'html-fundamentals': { completedWeeks: [1, 2], lastAccessedWeek: 2 },
      'css-styling-basics': { completedWeeks: [1], lastAccessedWeek: 1 },
      'solar-installation-fundamentals': { completedWeeks: [1], lastAccessedWeek: 1 },
      'intro-web-dev-react': { completedWeeks: [1], lastAccessedWeek: 1 },
      'mobile-phone-repair': { completedWeeks: [1, 2], lastAccessedWeek: 2 },
    },
  },

  {
    id: 'USER654321',
    username: 'Mary Johnson',
    profilePhoto: 'https://via.placeholder.com/150/f54291/ffffff?text=MJ',
    tel: '+232 77 654321',
    address: '456 Lumley Beach Rd, Freetown, Sierra Leone',
    email: 'mary.johnson@example.com',
    enrolledCourseIds: [
      'html-fundamentals',
      'mobile-phone-repair',
      'solar-installation-fundamentals',
    ],
    userProgress: {
      'html-fundamentals': { completedWeeks: [1], lastAccessedWeek: 1 },
      'mobile-phone-repair': { completedWeeks: [1], lastAccessedWeek: 1 },
      'solar-installation-fundamentals': { completedWeeks: [], lastAccessedWeek: 0 },
    },
  },
];
