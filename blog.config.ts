import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 4,
  defaultLayout: 'featured',
  locale: 'en',

  theme: {
    accent: '#ffd700',           // --color-yellow
    background: '#ffffff',       // --color-white (body bg)
    surface: '#f3f4f6',          // --color-gray-100
    text: '#1a1a1a',             // --color-black
    muted: '#6b7280',            // --color-gray-500
    mutedLight: '#9ca3af',       // --color-gray-400
    border: '#e5e7eb',           // --color-gray-200
    black: '#111827',            // --color-gray-900
    white: '#ffffff',
    fontHeading: '"Barlow Condensed", sans-serif',  // --font-heading
    fontBody: '"Inter", sans-serif',                // --font-body
    fontMono: '"JetBrains Mono", monospace',
    fontDisplay: '"Barlow Condensed", sans-serif',  // mismo que heading
    containerMax: '80rem',       // --container-max
  },

  hero: {
    tagline: 'Our Blog',
    titleLine1: 'Latest',
    titleLine2: 'Articles',
    description: 'Welcome to our blog.',
  },

  ui: {
    readMoreLabel: 'Read more',
    btnPrev: 'Previous',
    btnNext: 'Next',
    commentButtonColor: 'var(--bk-accent)',       // yellow
    commentButtonTextColor: 'var(--bk-black)',    // dark text sobre yellow
    paginationStyle: 'minimal',

    paginationBtnBg: '#ffd700',         // --color-yellow
    paginationBtnText: '#1a1a1a',       // --color-black (igual que .btn-primary)
    paginationBtnHoverBg: '#1a1a1a',    // hover invertido: negro
    paginationBtnHoverText: '#ffd700',  // texto yellow sobre negro
    paginationActiveBg: '#ffd700',
    paginationActiveText: '#1a1a1a',
  },
});