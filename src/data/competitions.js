// Each competition gets its own page at /competitions/<slug>.html.
//
// To add a new competition: copy a block, give it a new slug, fill it in. The page,
// the list and the home page update automatically.
//
//   award: true  -> listed under "Awards" (you placed or won something)
//   award: false -> listed under "Also competed in"
//
// Slides: host the deck anywhere public (e.g. a Google Drive file set to
// "Anyone with the link can view") and paste the link:
//   decks: [{ title: 'Round 1 pitch', link: 'https://drive.google.com/file/d/.../view', pages: 50, date: 'Sep 2026' }]
// A file in public/decks/ also works: link: 'decks/my-deck.pdf'
//
// Other files (e.g. a model to download) go in `files` the same way:
//   files: [{ title: 'Financial model (Excel)', link: 'decks/my-model.xlsx' }]

export const competitions = [
  {
    slug: 'itcc-2026',
    award: true,
    short: 'ITCC 2026',
    name: 'International Trading Case Competition 2026',
    host: 'Trafigura × NTU CEIT × NTU International Trading Club',
    date: 'Sep 2026',
    result: 'Merit Award · Top 16',
    role: 'Team Multiverse (with Aryaman and Tanmay): modelling, strategy and the pitch',
    summary:
      'An inter-varsity energy trading case competition. In Round 1, Project BluEnergy, we advised a trading house’s investment committee on where a newly acquired fuel distributor should spend $90m of capex.',
    points: [
      'Recommended Option A, an $85m dedicated LR1 jetty, over Option B, $67m of extra storage.',
      'Showed the $3.5m a year demurrage bill splits into $2.1m of berth congestion (fixed by owning the berth) and $1.4m of ullage (fixed by buying ex-ship and converting one jet tank to diesel for roughly $110k).',
      'Modelled LR1 freight at $1.00/bbl against $2.00/bbl on MR, and stress-tested a Gulf supply cutoff: Option A’s freight bill stays flat at $15.1m, Option B’s rises to $26.5m.',
      'Framed the jetty as an option for the parent trading house: location, freight, crude-routing and blending trades that a standalone distributor could not run.',
    ],
    links: [{ label: 'Read the case write-up', href: 'notes/itcc-bluenergy.html', internal: true }],
    decks: [
      { title: 'Round 1: Project BluEnergy (final submission)', link: 'decks/itcc-2026-bluenergy-round1.pdf', date: 'Sep 2026', pages: 50 },
    ],
  },
  {
    slug: 'susquehanna-brainteaser',
    award: true,
    short: 'SIG Brainteaser Battle',
    name: 'Susquehanna Brainteaser Battle Singapore',
    host: 'Susquehanna International Group (SIG), Singapore office',
    date: 'Sep 2026',
    result: '3rd place',
    role: 'Team of four',
    summary: 'A team brainteaser competition hosted at SIG’s Singapore office.',
    points: [],
    links: [],
    decks: [],
  },
  {
    slug: 'youth-action-challenge',
    award: true,
    short: 'Youth Action Challenge',
    name: 'Youth Action Challenge, Season 3',
    host: 'Youth Action Plan Singapore · team “Kenneth’s Reese’s Puffs”, Victoria Junior College',
    date: 'Sep 2021 – Feb 2023',
    result: 'Merit Grant · Youth Panel Grant',
    role: 'Co-founder',
    summary:
      'Built a non-profit project to raise Singapore’s low recycling rate, and won two grants to fund it.',
    points: [
      'Built an NPO aimed at Singapore’s low recycling rates.',
      'Won a Merit Grant and a Youth Panel Grant through the Youth Action Challenge to pursue the project.',
      'Worked with industry professionals as mentors.',
      'Designed a blueprint and prototype of a game that teaches and rewards kids for sorting recyclables correctly.',
      'Used gaming’s popularity with kids to widen the project’s reach.',
    ],
    links: [
      { label: 'Watch our YAC video (YouTube)', href: 'https://www.youtube.com/watch?v=lQckRButxe8' },
      { label: 'Our official pitch to the grant judges', href: 'https://youthactionplan.sg/YACSeason3/teams/kenneths-reeses-puff/' },
    ],
    decks: [],
  },
  {
    slug: 'junior-achievement',
    award: false,
    short: 'Junior Achievement',
    name: 'Junior Achievement Company of the Year',
    host: 'Junior Achievement Singapore · mentored by Bloomberg',
    date: '2022',
    result: 'Company VP & CFO',
    role: 'Vice President and Chief Financial Officer of the student company',
    summary:
      'A programme where students set up and run a real company for a season, mentored by industry volunteers. Our company was mentored by Bloomberg.',
    points: [],
    links: [],
    decks: [],
  },
  {
    slug: 'nyp-science-tech-challenge',
    award: true,
    short: 'NYP Science & Tech',
    name: 'NYP Science & Tech Challenge 2020',
    host: 'Nanyang Polytechnic',
    date: '2020',
    result: 'National Champion · Energy Harvester',
    role: '',
    summary: 'Won the national title in the Energy Harvester category.',
    points: [],
    links: [],
    decks: [],
  },
  {
    slug: 'accuracy-business-cup',
    short: 'Accuracy Business Cup',
    award: false,
    name: 'Accuracy Business Cup',
    host: 'Accuracy',
    date: 'Jan 2026',
    result: 'Participant',
    role: 'Team with Amaani Paul and Yashita Makhijani',
    summary:
      'A business case competition. Our case: how Toyota should protect its U.S. business if a 200% tariff hit imported automotive equipment.',
    points: [
      'Sized the U.S. light-vehicle market at about 16.3m units a year, roughly a USD 750–780b market, and showed the tariff would push a $35k car to about $48k.',
      'Compared four responses (do nothing, relocate, exit the market, absorb the tariff) and recommended relocating production to the U.S.',
      'Short term: contract-manufacture the RAV4 Prime at the Mazda-Toyota plant in Alabama, targeting 60k units in 2026 and 80k a year after.',
      'Laid out a three-phase roadmap to 2035 and beyond, and built the revenue and cost model behind it.',
    ],
    links: [],
    decks: [{ title: 'Insulating Toyota’s U.S. value chain against global trade volatility', link: 'decks/accuracy-cup-toyota.pdf' }],
    files: [{ title: 'Financial model (Excel)', link: 'decks/accuracy-cup-financials.xlsx' }],
  },
  {
    slug: 'fullerton-sgx-value-up',
    short: 'Fullerton/SGX Value-Up',
    award: false,
    name: 'Fullerton / SGX Value-Up Singapore Equities Challenge',
    host: 'Fullerton Fund Management × SGX Group',
    date: 'Jan – Mar 2026',
    result: 'Participant',
    role: '',
    summary:
      'A six-week trading simulation where student teams build and manage a portfolio of Singapore-listed stocks, researching companies and making allocation calls. The top teams pitch their investment theses at SGX Centre.',
    points: [],
    links: [],
    decks: [],
  },
];
