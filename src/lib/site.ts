export const topNav = ['Categories', 'Collections', 'Compare', 'New', 'Featured'];

export const categories = [
  { title: 'AI Search', href: '/categories/ai-llms', icon: '⌘', accent: 'blue' },
  { title: 'Productivity', href: '/categories/productivity', icon: '✦', accent: 'violet' },
  { title: 'Design', href: '/categories/design-creative', icon: '◌', accent: 'emerald' },
  { title: 'Development', href: '/categories/engineering-development', icon: '</>', accent: 'slate' },
  { title: 'Marketing', href: '/categories/marketing-sales', icon: '◔', accent: 'rose' },
  { title: 'API Tools', href: '/tools/zapier', icon: '◫', accent: 'blue' },
];

export const featuredArtifacts = [
  {
    title: 'Claude 3.5 Sonnet',
    href: '/tools/claude',
    tag: 'Best for creators',
    kicker: 'Anthropic',
    description:
      'A next-generation model that excels at reasoning, writing, and technical code generation with nuance.',
    image: '/images/hero-dark.png',
    large: true,
  },
  {
    title: 'Notion',
    href: '/tools/notion',
    tag: 'Beginner friendly',
    kicker: 'Productivity',
    description: 'The connected workspace for notes, databases, and teams.',
  },
  {
    title: 'Midjourney',
    href: '/categories/design-creative',
    tag: 'Top rated',
    kicker: 'Design',
    description: 'Expand imaginative powers with state-of-the-art generative art.',
  },
  {
    title: 'Cursor',
    href: '/categories/engineering-development',
    tag: 'Elite pick',
    kicker: 'Development',
    description: 'The AI code editor designed for pair programming and speed.',
  },
  {
    title: 'Perplexity',
    href: '/tools/chatgpt',
    tag: 'New tech',
    kicker: 'AI Search',
    description: 'The AI search engine that answers with cited sources from the web.',
  },
];

export const heroBanners = [
  {
    title: 'Stay ahead of the curve.',
    description: 'Join 25,000+ builders receiving weekly curated tool drops and launch picks.',
  },
];

export const compareRows = [
  ['Data ownership', 'Cloud-hosted, exportable', 'Local Markdown, no lock-in'],
  ['Customization', 'Blocks, icons, visual layouts', 'Infinite CSS and plugins'],
  ['Collaboration', 'Real-time workspaces', 'Single-user by design'],
];
