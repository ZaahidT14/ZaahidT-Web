// Every role, newest first. Add a role by copying a block.
//   kind: shown as a small label (Work, Research, Service)

export const experience = [
  {
    org: 'Nanyang Technological University',
    role: 'Undergraduate Research Assistant',
    kind: 'Research',
    dates: 'Sep 2026 – Present',
    place: 'Singapore · Part-time',
    summary:
      'Supporting Assoc Prof Nelson Lau on a study of millisecond-level lead-lag across markets: ES against DAX, Nikkei 225, Hang Seng and Euro Stoxx 50 futures, and Bitcoin perpetuals across Binance, Bybit and OKX.',
    points: [
      'Scope the high-frequency data the study needs and source the data vendors.',
      'Analyse high-frequency market data and test hypotheses in market microstructure.',
    ],
    tags: ['Market microstructure', 'Index futures', 'Crypto perps', 'Tick data'],
  },
  {
    org: 'Endowus',
    role: 'Business Development & Partnerships Intern',
    kind: 'Work',
    dates: 'May 2026 – Present',
    place: 'Singapore · On-site',
    summary:
      'Worked across business development, data analytics and client reporting with the front-office team at a Singapore wealth platform.',
    points: [
      'Built live Bloomberg-linked Excel models (BDP/BDH) that refresh fee and AUA data across wealth platforms and asset managers, benchmarked against the peer median.',
      'Automated LinkedIn Sales Navigator outreach with a Python and LLM pipeline (Playwright MCP): a 328-prospect campaign at an 18.6% reply rate, then scaled across four verticals to 1,000+ prospects.',
      'Built a scoring model in Python that ranks 850+ regional startups into four tiers by likely idle cash, using funding raised and funding stage, and checked the top prospects with primary research.',
      'Built client reporting dashboards in Mode on AWS Athena SQL and automated recurring holdings and transactions reports.',
      'Used SQL on account and market data to build the narrative behind client pitch decks, and updated the Investor Relations deck for prospective institutional investors with sourced industry research and reconciled financials.',
      'Reconciled fee-voucher data for 213 clients against CRM records and found that ~84% of 2026 expiries had no advisor assigned, which prompted client-team follow-up.',
    ],
    tags: ['Bloomberg', 'Python', 'SQL', 'Mode', 'AWS Athena'],
  },
  {
    org: 'FinMechanics',
    role: 'Finance & Technology Analyst Intern',
    kind: 'Work',
    dates: 'Feb 2025 – Jul 2025',
    place: 'Singapore · On-site',
    summary:
      'Worked across FX options, IR/FX derivatives and capital markets platforms: system testing, curve validation, VaR and a platform migration.',
    points: [
      'System-tested the FM COMET FX Options Order Matching Platform with the Clearing Corporation of India, finding logic errors and functional gaps before deployment.',
      'Used options trading mechanics and strategies to widen the test scope for stress testing.',
      'Validated and calculated VaR for FX and equities to check the system’s risk logic before client deployment.',
      'Mapped IR and FX curves from front-office data and validated curve accuracy.',
      'Supported a Singapore digital bank’s migration to FM Converge with LSEG, using Postgres and SQL to manage databases and run data-clearing scripts.',
      'Built and analysed structured Excel test cases to validate front-office functionality on FM Converge.',
      'Built client-facing PowerPoint decks on platform features, used by the sales team in pitches.',
    ],
    tags: ['FX options', 'VaR', 'Rates & FX curves', 'Postgres', 'SQL'],
  },
  {
    org: 'Singapore Police Force',
    role: 'Patrol Officer, Airport Police Division (National Service)',
    kind: 'Service',
    dates: 'Jan 2023 – Nov 2024',
    place: 'Changi Airport',
    summary:
      'Uniformed patrol officer specialising in aviation security, enforcing the law at Changi Airport.',
    points: [
      'Received 2 Commander Commendations for handling high-profile cases and conflict management.',
    ],
    tags: ['Aviation security', 'Conflict management'],
  },
  {
    org: 'Luxoft',
    role: 'Risk Management Intern',
    kind: 'Work',
    dates: 'Nov 2020 – Dec 2020',
    place: 'Singapore',
    summary:
      'Researched liquidity risk management frameworks issued by Southeast Asian central banks and helped draft white papers and presentation decks.',
    points: [],
    tags: ['Liquidity risk', 'Regulation'],
  },
  {
    org: 'Whizpace',
    role: 'Administrative Intern',
    kind: 'Work',
    dates: 'Nov 2020 – Dec 2020',
    place: 'Singapore',
    summary:
      'Handled chip assembly and Excel and PowerPoint admin work at a tech SME, which gave me a close look at how a small business runs.',
    points: [],
    tags: ['Operations', 'Excel'],
  },
];

export const education = [
  {
    school: 'Nanyang Technological University',
    award: 'Bachelor of Applied Computing in Finance (Hons)',
    dates: 'Aug 2025 – May 2029 (expected)',
    detail: 'Relevant courses below.',
  },
  {
    school: 'Victoria Junior College',
    award: 'GCE A-Levels (Physics, Chemistry, Mathematics, Economics)',
    dates: 'Jan 2021 – Dec 2022',
    detail: 'President of the Economics & Business Club. National Games ‘A’ Division tennis team.',
  },
];

export const courses = [
  'BF2219 Investments',
  'BF2223 Fintech in Investment Management',
  'SC2001 Algorithm Design & Analysis',
  'SC1007 Data Structures & Algorithms',
  'SC2002 Object Oriented Design & Programming',
  'SC3021 Data Science Fundamentals',
];

// Skills shown as icon tiles. `icon` is a Tabler icon name (browse them at tabler.io/icons).
export const skills = [
  {
    group: 'Markets',
    items: [
      { name: 'FX options', icon: 'arrows-exchange' },
      { name: 'VaR', icon: 'chart-histogram' },
      { name: 'IR & FX curves', icon: 'chart-line' },
      { name: 'Risk frameworks', icon: 'scale' },
      { name: 'Benchmarking', icon: 'chart-dots-3' },
      { name: 'Financial reporting', icon: 'report-analytics' },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Bloomberg Terminal', icon: 'chart-candle' },
      { name: 'Excel', icon: 'table' },
      { name: 'Mode', icon: 'layout-dashboard' },
      { name: 'AWS Athena', icon: 'cloud-search' },
      { name: 'Playwright MCP', icon: 'browser' },
      { name: 'Claude / LLMs', icon: 'sparkles' },
    ],
  },
  {
    group: 'Code',
    items: [
      { name: 'Python', icon: 'brand-python' },
      { name: 'SQL', icon: 'sql' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'R', icon: 'letter-r' },
      { name: 'Java', icon: 'coffee' },
      { name: 'Git', icon: 'brand-git' },
    ],
  },
];

export const languages = ['English (native)', 'Hindi (native)', 'Gujarati (conversational)'];
