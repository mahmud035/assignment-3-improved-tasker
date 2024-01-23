const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Responsive Design',
    description:
      'Responsive web design is about creating web pages that look good on all devices!',
    tags: ['web', 'html', 'css'],
    priority: 'High',
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript & TypeScript',
    description:
      'Learn how to use JavaScript and TypeScript to create front-end applications with Vite.',
    tags: ['javascript', 'typescript', 'web'],
    priority: 'High',
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'React & its Ecosystem',
    description: 'The library for web and native user interfaces.',
    tags: ['react', 'routing', 'data fetching'],
    priority: 'High',
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn NEXTjs',
    description:
      'The React Framework for the Web to create full-stack Web applications.',
    tags: ['nextjs', 'react', 'web'],
    priority: 'High',
    isFavorite: false,
  },
];

export { initialTasks };
