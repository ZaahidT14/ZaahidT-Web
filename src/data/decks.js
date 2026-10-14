// Collects every deck from competitions and clubs into one list, so the Decks page,
// the badges and the home page can all use it. You don't need to edit this file:
// add decks to competitions.js or clubs.js and they appear here automatically.
import { competitions } from './competitions.js';
import { clubs } from './clubs.js';

export const allDecks = [
  ...competitions.flatMap((c) =>
    c.decks.map((d) => ({ ...d, source: c.name, sourceShort: c.short, kind: 'Competition', page: `competitions/${c.slug}.html` })),
  ),
  ...clubs.flatMap((c) =>
    c.decks.map((d) => ({ ...d, source: c.name, sourceShort: c.short, kind: 'Club', page: `clubs/${c.slug}.html` })),
  ),
];
