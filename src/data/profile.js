// Who you are, plus the scrolling ticker. Edit freely.

export const profile = {
  name: 'Zaahid Tinwala',
  eyebrow: 'NTU · Applied Computing in Finance · Class of 2029',
  lede:
    "NTU Applied Computing in Finance student who's interested in markets. I'm most interested in how political news and macro move prices, and I'm learning derivatives and microstructure to understand how trades get built.",
  status: 'Open to 2027 summer internships',
  email: 'zaahid.tinwala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zaahidtinwala/',
  github: 'https://github.com/ZaahidT14',
};

// The scrolling strip at the top of every page, written like a news crawl.
//   code:   short desk-style tag
//   text:   what it is, in plain words
//   value:  the number or result
//   dir:    'up' (green ▲), 'flat' (white ■) or 'down' (red ▼)
//   href:   optional page it links to
export const ticker = [
  { code: 'ITCC 26', text: 'Trafigura × NTU CEIT trading case', value: 'Top 16 · Merit Award', dir: 'up', href: 'competitions/itcc-2026.html' },
  { code: 'DECK', text: 'Project BluEnergy: $85m LR1 jetty recommendation', value: 'read the deck', dir: 'flat', href: 'competitions/itcc-2026.html#slides' },
  { code: 'SIG', text: 'Susquehanna Brainteaser Battle SG', value: '3rd place', dir: 'up', href: 'competitions/susquehanna-brainteaser.html' },
  { code: 'ENDOWUS', text: 'AI outreach pipeline reply rate', value: '18.6% on 328 prospects', dir: 'up', href: 'experience.html' },
  { code: 'ENDOWUS', text: 'Prospect universe across 4 verticals', value: '1,000+', dir: 'up', href: 'experience.html' },
  { code: 'NTU RA', text: 'ES vs DAX · NKY · HSI · SX5E lead-lag', value: 'ms-scale', dir: 'flat', href: 'experience.html' },
  { code: 'FINMECH', text: 'FX options matching platform tested with CCIL', value: 'Pre-deployment', dir: 'flat', href: 'experience.html' },
  { code: 'HDB FV', text: 'Resale transactions modelled for fair value', value: '227K', dir: 'flat', href: 'projects.html' },
  { code: 'ABCC 27', text: 'Asian Business Case Competition', value: 'Co-Chair', dir: 'up', href: 'clubs/business-solutions.html' },
  { code: 'SPF', text: 'Commander Commendations, Airport Police', value: '×2', dir: 'up', href: 'experience.html' },
  { code: 'YAC S3', text: 'Recycling NPO funded by Youth Action Challenge', value: '2 grants', dir: 'up', href: 'competitions/youth-action-challenge.html' },
];
