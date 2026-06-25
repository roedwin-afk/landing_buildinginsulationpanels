import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 6,
  defaultLayout: 'cards',
  locale: 'en',

  theme: {
    accent:       '#facc15',
    background:   '#ffffff',
    surface:      '#f8f8f8',
    text:         '#0a0a0a',
    muted:        '#6b7280',
    mutedLight:   '#4b5563',
    border:       '#e5e7eb',
    black:        '#0a0a0a',
    white:        '#ffffff',
    fontHeading:  'Georgia, serif',
    fontBody:     'system-ui, sans-serif',
    fontMono:     'monospace',
    fontDisplay:  'Georgia, serif',
    containerMax: '1200px',
  },

  hero: {
    tagline:     'Our Blog',
    titleLine1:  'Latest',
    titleLine2:  'Articles',
    description: 'Welcome to our blog.',
  },

  ui: {
    readMoreLabel:          'Read more',
    btnPrev:                'Previous',
    btnNext:                'Next',
    commentButtonColor:     'var(--bk-accent)',
    commentButtonTextColor: 'var(--bk-black)',
    paginationStyle:        'minimal',
    // ── Personalización de paginación (opcional) ──────────────
    // Descomenta y cambia los valores según tu marca.
    // Por defecto usan el accent y black del tema.
    // paginationBtnBg:         '#facc15',  // fondo botón PREV/NEXT
    // paginationBtnText:       '#0a0a0a',  // texto botón PREV/NEXT
    // paginationBtnHoverBg:    '#0a0a0a',  // fondo hover
    // paginationBtnHoverText:  '#ffffff',  // texto hover
    // paginationActiveBg:      '#facc15',  // fondo página activa
    // paginationActiveText:    '#0a0a0a',  // texto página activa
  },
});
