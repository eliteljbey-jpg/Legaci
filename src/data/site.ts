// ─────────────────────────────────────────────────────────────────────────────
// THE ONE FILE TO EDIT. Every link, date, price, number and contact on the site
// is rendered from here. Search for [CONFIRM], [TO SET] and [NEEDS JULIUS].
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'LJ Bey',
  legalName: 'Julius Deshon Jackson',
  url: 'https://ljbey.com',
  tagline: 'R&B, hip-hop and RnBass from the Born on Saturn universe.',
  // [CONFIRM BEFORE GO-LIVE]
  contactEmail: 'juliusdjackson@gmail.com',
  logo: {
    primary: '/assets/logo-primary.webp', // swap the brand logo here: one line
    wordmark: '/assets/logo-wordmark.webp',
    monogram: '/assets/logo-monogram.webp',
    stacked: '/assets/logo-stacked.webp',
  },
  // [CONNECT AT GO-LIVE] Kit (ConvertKit), account "URBN Zen". Paste the form's
  // embed script URL here and it renders beneath the signup form.
  kitEmbedSrc: '',
};

export const nav = [
  { href: '/music/', label: 'Music' },
  { href: '/the-fruit-of-love/', label: 'The Fruit Of Love' },
  { href: '/planet-heads/', label: 'Planet Heads' },
  { href: '/merch/', label: 'Merch' },
  { href: '/epk/', label: 'EPK' },
  { href: '/sync/', label: 'Sync' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export const listen = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/5j6PYWTweugU5o1dXo4mSK' },
  { label: 'Apple Music', href: 'https://music.apple.com/us/artist/lj-bey/927231896' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/lj-bey' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCU-c9q6oU3GW2Fo6p5xVdnA' },
];

export const social = [
  { label: 'Instagram @LJ_Bey', href: 'https://www.instagram.com/LJ_Bey' },
  { label: 'TikTok @juliusdeshonjackson', href: 'https://www.tiktok.com/@juliusdeshonjackson' },
  { label: 'TikTok @legacijackson', href: 'https://www.tiktok.com/@legacijackson' },
  { label: 'Threads @LJ_Bey', href: 'https://www.threads.net/@LJ_Bey' },
  // [NEEDS JULIUS] Facebook page URL. Add { label: 'Facebook', href: '…' } here.
];

export const bio = {
  short:
    "LJ Bey is an independent R&B and hip-hop artist and producer from Benicia, California, based in Sacramento. A BMI songwriter with 211 registered works, his instrumental cues have earned television royalties on Basketball Wives LA, RuPaul's Drag Race All Stars, Real Housewives of NYC and Catfish. His 39-song album The Fruit Of Love rolls out as weekly singles through 2027.",
  long:
    "LJ Bey (Julius Deshon Jackson) is an independent R&B, hip-hop and RnBass artist and producer from Benicia, California, now based in Sacramento. Writing and producing under his own Elite House imprint, he is a BMI-registered songwriter ('Jackson Julius') with 211 works. Around 2015 his instrumental production cues were placed in Basketball Wives LA, RuPaul's Drag Race All Stars, The Real Housewives of New York City and Catfish (VH1, LOGO, Bravo) through publisher London Cage Music, and those past placements still earn performance royalties on reruns. His releases include the Black Rose EP, the single 'Im In Love,' and a feature catalog spanning Thug Misses, Nia Rene and Mistah F.A.B. In December 2026 he begins The Fruit Of Love: 39 songs released as weekly singles, culminating in the full album on March 24, 2027 — a serialized love story told through his Born on Saturn universe and its Planet Heads characters.",
};

export const highlights = [
  'BMI writer "Jackson Julius," IPI 760006674 — 211 registered works',
  "TV instrumental cues placed ~2015: Basketball Wives LA, RuPaul's Drag Race All Stars, Real Housewives of NYC, Catfish (VH1/LOGO/Bravo) — still earning rerun royalties (BMI statements of record)",
  'Seven writing credits on Thug Misses\' Queen of the Bay; co-composer of French Vanilla\'s "French Vanilla" (2016)',
  'Features: CHEF CURRY with Mistah F.A.B. (2026); "Maybe" with Nia Rene; "Tantra" with F; JG Eargazm\'s "The Flight"',
  'Healing album Healing Centered Engagement Meditations (2025) as Julius Deshon Jackson',
];

export const placements = [
  'Basketball Wives LA',
  "RuPaul's Drag Race All Stars",
  'Real Housewives of NYC',
  'Catfish',
];
export const placementNetworks = 'VH1, LOGO, Bravo';

// ── Campaign ─────────────────────────────────────────────────────────────────
export const campaign = {
  firstSingle: '2026-12-04',
  albumDate: '2027-03-24',
  lastSingle: '2027-08-27',
  preSaveUrl: '', // [TO SET] shows a "coming soon" state until filled
  albumUrl: '', // [TO SET]
};

const LJ = 'LJ Bey';
type RawTrack = { title: string; short: string; producer?: string; feat?: string; explicit?: boolean; action: string };

const rawTracks: RawTrack[] = [
  { title: 'Act III Chapter 1 (Saturn VI)', short: 'Saturn VI', action: "Saturn stands at the rim of his station, leaning out over his orbit's edge, hand cupped behind his ear, listening down toward a tiny glowing Earth; his tilted ring trembles like an antenna tuned to a love song." },
  { title: 'Act III Chapter 2 (Jax Bomaye)', short: 'Jax Bomaye', action: 'Saturn free-falls through a river of fire, fists clenched, shouting wordlessly, his ring spinning too fast and shedding sparks.' },
  { title: 'Act III, Chapter 3 (Scream)', short: 'Scream', feat: 'A.T. Wally', action: "Saturn throws his head back mid-plummet and screams at the sky, rings of golden light pulsing from his mouth, aimed like a comet at Earth's carnival lights." },
  { title: 'Act III Chapter 4 (Circus)', short: 'Circus', action: 'Saturn storms out of the crimson-and-gold circus tent, stops three steps into the dark, turns back, and picks up the glowing heart he left on his ringside seat.' },
  { title: 'Act III Chapter 5 (Poison)', short: 'Poison', action: 'At a dark kitchen sink at 3 a.m., Saturn pours out bottle after bottle and sets the last empty in a neat row like evidence at his own trial.' },
  { title: 'Break Loose / Run It Up', short: 'Break Loose / Run It Up', action: "Saturn plants his feet on the Moon's bright rim and holds perfectly still, arms open, calling the Beloved home with his ring's light instead of chasing her." },
  { title: 'F Wit a Boss', short: 'F Wit a Boss', producer: 'Reeup & Anonimiss', explicit: true, action: 'Saturn signs his name slow and steady on a contract at a glass desk, ring level for the first time, Mercury counting the stacks beside him.' },
  { title: 'Culture', short: 'Culture', action: 'Saturn sets a dinner table for two in a walled garden, placing the second plate while hot takes streak like tracer fire over the wall — he never turns around.' },
  { title: 'Indonesia', short: 'Indonesia', action: 'Saturn drives one-handed down an indigo night freeway, the Beloved asleep against his shoulder, free hand easy on the wheel.' },
  { title: 'Juicy (Money Alwayz Beat)', short: 'Juicy', producer: 'Money Alwayz', action: 'Saturn dances barefoot in the Malibu surf at sunset, spinning the Beloved through the foam as a wave soaks them both to the knee.' },
  { title: 'Private Dancer', short: 'Private Dancer', action: 'Saturn sits deep in an armchair in a rose-petal suite, champagne untouched, hands folded like prayer, watching her dance for him alone in gold lamplight.' },
  { title: 'Sex on the beach remix', short: 'Sex on the beach remix', action: 'Ankle-deep in moonlit shallows, Saturn raises a saxophone and makes the surf answer him, wave for note, note for wave.' },
  { title: 'Sex on the Beach', short: 'Sex on the Beach', action: 'Saturn kneels in the sand at dusk arranging red candles in a circle around two yoga mats, then looks up through the flames at the sky in something close to prayer.' },
  { title: 'Punch Drunk', short: 'Punch Drunk', producer: 'Money Alwayz', action: 'Saturn sways in a violet-lit lounge, gripping a chair back to keep the room still, staring at the fresh drink he poured past his own limit.' },
  { title: 'Medicine (Interlude)', short: 'Medicine', action: 'Before an apothecary shelf of glowing bottles, Saturn measures one careful spoonful of the rose one into water and leaves every other bottle untouched.' },
  { title: 'Fly', short: 'Fly', action: 'Saturn races the Beloved through a starfield, arms wide, swooping around the Moon and past Mars, laughing like a kid who stole the sky.' },
  { title: 'Scream Remix', short: 'Scream Remix', action: 'Saturn leans off a neon rooftop ledge, arms spread, then dives head-first toward the city lights just to hear her scream his name.' },
  { title: 'Weekend Lovers', short: 'Weekend Lovers', action: 'Saturn tears the Friday page off a wall calendar — five grey weekdays behind it — and runs into the moonlight to take her hand and finally say it out loud.' },
  { title: 'Show Off', short: 'Show Off', action: 'Saturn struts down a runway of golden light in his best fit, performing for a front row of exactly one, checking her unreadable smile mid-strut.' },
  { title: 'Tantra', short: 'Tantra', action: 'Cross-legged across from the Beloved in candlelight, palms open, Saturn lights sage and incense and matches his breath to hers, slower and slower, rain on the window behind them.' },
  { title: 'You Da One', short: 'You Da One', action: 'Saturn walks through a crowd of golden, blurred faces and stops dead in front of the one face in perfect focus, setting his traveling bag down at her feet.' },
  { title: 'Im in Love (Extended)', short: 'Im in Love', action: 'On a cliff edge above a river of light at dawn, Saturn falls backward into her arms while an older copy of himself peels away mid-air and dissolves like ash off a coal.' },
  { title: 'Sweet Love', short: 'Sweet Love', action: 'Saturn pours morning tea for two at a sunlit table, drizzling honey into her cup, both still glowing from the night before.' },
  { title: 'Home (Heart Center Beta Waves)', short: 'Home', action: 'Saturn turns a key in the door of a small house on a green hill and carries the last box across the threshold, looking back once at the long road down.' },
  { title: 'This Ring (432 Hz. w_ 528hz Love Frequency)', short: 'This Ring', action: "Kneeling, Saturn lifts his own golden ring — detached, glowing — in both hands and offers it toward the Beloved's open palm as the room fills with gold-green light." },
  { title: 'Wedding Bells', short: 'Wedding Bells', action: "Under a great gold-and-cream bell at sunrise, Saturn holds the Beloved's hands and looks up with her as rings of visible sound ripple out over all ten Planet Heads." },
  { title: 'God Body', short: 'God Body', action: "Saturn moves through a slow martial form in a dawn garden, bare feet planted, every Planet Head's color reflecting one by one across his level ring." },
  { title: '321', short: '321', action: "As an inner count falls — three, two, one — three glowing copies of Saturn's old selves (the rusher, the overwhelmed, the circus fighter) bow to him and dissolve into gold dust." },
  { title: 'Mantra For Love', short: 'Mantra For Love', action: 'Saturn waters a garden at dawn beside the sleeping house, speaking his mantra over the rows, each word rising off his lips as light.' },
  { title: 'Love Triangle', short: 'Love Triangle', action: 'On his own doorstep at night, Saturn faces a flickering silhouette shaped like an old flame, shakes his head once, closes the door gently, and turns back toward the warm light inside.' },
  { title: 'Faithful', short: 'Faithful', action: 'Saturn stacks small flat stones into a steady tower beside the garden path — one stone for every day he showed up — set down slow, level, unhurried.' },
  { title: 'Infinite Love', short: 'Infinite Love', producer: 'Jason "JG" Gibbs', action: "On a hilltop at night, arms at his sides, Saturn watches his ring's glow expand until it becomes the horizon, breathing it in without reaching for it." },
  { title: 'Be Now', short: 'Be Now', producer: 'Jason "JG" Gibbs', action: "Saturn sits perfectly still at the center of his own ring like the heart of a mandala, the Beloved's head on his shoulder, the whole cosmos rotating slowly around their stillness." },
  { title: 'Still water Pineal Gland Theta Waves', short: 'Still water', action: 'Kneeling at a violet night lake, Saturn lowers his forehead toward the glass-still surface as a small indigo light kindles between his brows, his reflection unrippled.' },
  { title: 'Live Free', short: 'Live Free', producer: 'Jason "JG" Gibbs', action: 'Saturn runs hand-in-hand with the Beloved through a wide-open gate, laughing — then slows to a walk, because there is nothing left to run from.' },
  { title: 'Live Free. Live Fly', short: 'Live Free. Live Fly', action: 'Saturn rises slowly and upright through gold cloud, arms relaxed — one serene straight line, the exact inverse of his Act I plummet.' },
  { title: 'Kingdom of Love', short: 'Kingdom of Love', action: 'Saturn walks the ring-shaped plaza of a garden city laid out like a golden mandala, greeting each Planet Head in their province, on his way to a bench built for two at its center.' },
  { title: 'This Ring (Remix)', short: 'This Ring (Remix)', action: "At golden hour, Saturn slips a diamond band onto the Beloved's finger, then lifts her onto his shoulders as they both laugh, the ring refracting light between them like a prism." },
  { title: 'Go The Distance', short: 'Go The Distance', action: 'Saturn walks an ordinary golden road beside the Beloved through turning seasons, feet flat on the ground, ring perfectly level, keeping her pace mile after mile — neither rushing nor stopping.' },
];

const addWeeks = (iso: string, weeks: number) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + weeks * 7);
  return d.toISOString().slice(0, 10);
};

/** Schedule rule: tracks 1–16 weekly from Dec 4 2026; the album lands Mar 24 2027; tracks 17–39 weekly from Mar 26 2027. */
export const tracks = rawTracks.map((t, i) => {
  const number = i + 1;
  return {
    ...t,
    number,
    producer: t.producer ?? LJ,
    date: number <= 16 ? addWeeks(campaign.firstSingle, i) : addWeeks('2027-03-26', i - 16),
    act: number <= 6 ? 'Act I' : number <= 26 ? 'Act II' : 'Act III',
  };
});
export type Track = (typeof tracks)[number];

export const formatDate = (iso: string, opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { ...opts, timeZone: 'UTC' });

export const acts = [
  { name: 'Act I', range: 'Tracks 1–6', text: 'Restlessness, the scream, the circus and poison of the world below, breaking loose.', color: 'var(--c-root)' },
  { name: 'Act II', range: 'Tracks 7–26', text: "Earth life — ambition, desire, and love's lessons, guided and tempted by Venus.", color: 'var(--c-heart)' },
  { name: 'Act III', range: 'Tracks 27–39', text: "The Grounding — discipline and devotion; Saturn's ring becomes not an accident of birth but a vow it chose.", color: 'var(--c-crown)' },
];

// ── Planet Heads ─────────────────────────────────────────────────────────────
// number: null = [CONFIRM]. It stays hidden on the site until you fill it in.
export const planets = [
  { slug: 'saturn', name: 'Saturn', number: 8 as number | null, chakra: 'Root', colors: 'Red, gold ring', role: 'Time, discipline, the lead', accent: '#c62828', tint: '#fde4dc', mandala: 'mandala-root' },
  { slug: 'sun', name: 'Sun', number: 1 as number | null, chakra: 'Crown', colors: 'Violet and gold', role: 'Ego and fame; the spotlight', accent: '#7b3fc4', tint: '#efe4fb', mandala: 'mandala-crown' },
  { slug: 'moon', name: 'Moon', number: 2 as number | null, chakra: 'Third Eye', colors: 'Indigo and silver', role: 'Dreams, memory, grief', accent: '#3b3a9c', tint: '#e4e5f8', mandala: 'mandala-third-eye' },
  { slug: 'jupiter', name: 'Jupiter', number: 5 as number | null, chakra: 'Sacral', colors: 'Orange', role: 'Abundance, blessing, excess', accent: '#d9660a', tint: '#fde8d2', mandala: 'mandala-sacral' },
  { slug: 'mars', name: 'Mars', number: null as number | null, chakra: 'Solar Plexus', colors: 'Yellow and red', role: 'Conflict and drive', accent: '#a86a00', tint: '#fdf3c4', mandala: 'mandala-solar-plexus' }, // [CONFIRM] number
  { slug: 'venus', name: 'Venus', number: null as number | null, chakra: 'Heart', colors: 'Green and pink', role: 'Love: guide, tempter, teacher', accent: '#1f7a3f', tint: '#fbe3ea', mandala: 'mandala-heart' }, // [CONFIRM] number
  { slug: 'mercury', name: 'Mercury', number: null as number | null, chakra: 'Throat', colors: 'Blue', role: 'The messenger; talk and hustle', accent: '#0f6fa8', tint: '#dcf1fa', mandala: 'mandala-throat' }, // [CONFIRM] number
  { slug: 'earth', name: 'Earth', number: null as number | null, chakra: null as string | null, colors: 'Green and blue', role: 'Home and grounding', accent: '#2c7a46', tint: '#e2f3e4', mandala: null as string | null }, // [CONFIRM] number
  { slug: 'uranus', name: 'Uranus', number: null as number | null, chakra: null as string | null, colors: 'Ice blue', role: 'The rebel; sudden change', accent: '#2f7c9c', tint: '#e2f2f7', mandala: null as string | null }, // [CONFIRM] number
  { slug: 'neptune', name: 'Neptune', number: null as number | null, chakra: null as string | null, colors: 'Deep blue and teal', role: 'Illusion and spirit', accent: '#1d5f8f', tint: '#dbeef2', mandala: null as string | null }, // [CONFIRM] number
];
export const saturnArt = '/assets/saturn-main.webp';

export const duos = [
  { file: 'duo-saturn-venus', alt: 'Saturn and Venus side by side' },
  { file: 'duo-saturn-moon', alt: 'Saturn and Moon sharing a coffee' },
  { file: 'duo-saturn-jupiter', alt: 'Saturn and Jupiter side by side' },
  { file: 'duo-venus-mars', alt: 'Venus and Mars facing off' },
  { file: 'duo-sun-moon', alt: 'Sun and Moon back to back' },
  { file: 'duo-mercury-venus', alt: 'Mercury delivering a love letter to Venus' },
];

// ── Merch ────────────────────────────────────────────────────────────────────
// price_cents null = [TO SET]: no price is shown anywhere until you set one.
// [TO SET] Sizes are placeholders until your print supplier is chosen.
const APPAREL = ['S', 'M', 'L', 'XL', '2XL'];
const HAT = ['One size'];

export const productLines = [
  { key: 'Core Saturn', blurb: 'The lead, front and center.' },
  { key: 'Planet', blurb: 'A piece for every planet, in its own colors.' },
  { key: 'Chakra Mandala', blurb: 'Each governed planet standing on the mandala of its chakra.' },
  { key: 'Planetary Numbers', blurb: 'Each Planet Head with its number, in its colors.' },
  { key: 'University College', blurb: 'The crew in college outfits with the Universe City badge.' },
  { key: 'Crew', blurb: 'The whole family together.' },
];

export type Product = {
  slug: string; name: string; line: string; description: string; price_cents: number | null;
  colors: string[]; sizes: string[]; image_path: string; alt_images?: string[]; active: boolean;
};

const p = (slug: string, name: string, line: string, description: string, image: string, colors: string[], sizes = APPAREL, alt_images?: string[]): Product => ({
  slug, name, line, description, price_cents: null, colors, sizes, image_path: `/assets/${image}.webp`, alt_images: alt_images?.map((a) => `/assets/${a}.webp`), active: true,
});

export const products: Product[] = [
  p('saturn-hoodie', 'Saturn Hoodie', 'Core Saturn', 'Saturn up front, the number 8 on the back. Time and discipline, worn.', 'mockup-saturn-hoodie', ['Cream', 'Saturn Plum'], APPAREL, ['mockup-saturn-hoodie-back-8']),
  p('saturn-crewneck', 'Saturn Crewneck', 'Core Saturn', 'The lead character, ring tilted, all potential, no ground.', 'mockup-saturn-crewneck', ['Saturn Plum']),
  p('saturn-tshirt', 'Saturn T-Shirt', 'Core Saturn', 'Saturn, all potential and no ground. The story starts here.', 'mockup-saturn-tshirt', ['Saturn Plum']),
  p('saturn-hat', 'Saturn Hat', 'Core Saturn', "A small gold-ringed Saturn for everyday orbit.", 'mockup-saturn-hat', ['Cream'], HAT),

  p('sun-hoodie', 'Sun Hoodie', 'Planet', 'Ego and fame, in full shine. The Sun loves a spotlight.', 'merch-planet-sun', ['Gold']),
  p('moon-crewneck', 'Moon Crewneck', 'Planet', 'For dreams, memory and grief, and the coffee that gets you through them.', 'merch-planet-moon', ['Indigo']),
  p('mercury-tee', 'Mercury T-Shirt', 'Planet', 'The messenger, mid-stride. All talk and hustle.', 'merch-planet-mercury', ['Seafoam']),
  p('venus-hat', 'Venus Hat', 'Planet', "Love as guide, tempter and teacher, stitched in Venus's pink.", 'merch-planet-venus', ['Pink'], HAT),
  p('earth-hoodie', 'Earth Hoodie', 'Planet', 'Home and grounding. Where the story ends up.', 'merch-planet-earth', ['Green']),
  p('mars-crewneck', 'Mars Crewneck', 'Planet', 'Conflict and drive, fists up.', 'merch-planet-mars', ['Red']),
  p('jupiter-tee', 'Jupiter T-Shirt', 'Planet', 'Abundance, blessing and just a little excess, crown included.', 'merch-planet-jupiter', ['Orange']),
  p('uranus-hat', 'Uranus Hat', 'Planet', 'The rebel. Sudden change, ring sideways.', 'merch-planet-uranus', ['Ice Blue'], HAT),
  p('neptune-hoodie', 'Neptune Hoodie', 'Planet', 'Illusion and spirit in deep blue water.', 'merch-planet-neptune', ['Blue']),

  p('root-saturn-tee', 'Saturn Root Chakra Tee', 'Chakra Mandala', 'Saturn stands on the red Root mandala: time, discipline, the ground beneath it all.', 'mockup-saturn-root-chakra-tee', ['Red']),
  p('sacral-jupiter-crewneck', 'Jupiter Sacral Chakra Crewneck', 'Chakra Mandala', 'Jupiter on the orange Sacral mandala: abundance and blessing.', 'merch-chakra-sacral-jupiter', ['Orange']),
  p('solar-mars-tee', 'Mars Solar Plexus Chakra Tee', 'Chakra Mandala', 'Mars on the yellow Solar Plexus mandala: conflict and drive.', 'merch-chakra-solar-mars', ['Yellow']),
  p('heart-venus-crew', 'Venus Heart Chakra Crewneck', 'Chakra Mandala', 'Venus on the green Heart mandala: love as guide, tempter and teacher.', 'mockup-venus-heart-chakra-crew', ['Cream']),
  p('throat-mercury-hoodie', 'Mercury Throat Chakra Hoodie', 'Chakra Mandala', 'Mercury on the blue Throat mandala: the messenger, talk and hustle.', 'merch-chakra-throat-mercury', ['Sky Blue']),
  p('third-eye-moon-crewneck', 'Moon Third Eye Chakra Crewneck', 'Chakra Mandala', 'Moon on the indigo Third Eye mandala: dreams, memory, grief.', 'merch-chakra-third-eye-moon', ['Indigo']),
  p('crown-sun-tee', 'Sun Crown Chakra Tee', 'Chakra Mandala', 'Sun on the violet Crown mandala: ego and fame in the spotlight.', 'merch-chakra-crown-sun', ['Violet']),

  ...planets.map((pl) =>
    p(`number-${pl.slug}`, `${pl.name} Number Piece`, 'Planetary Numbers', `${pl.name} in its own colors. ${pl.role}.`, `planet-${pl.slug}`, [pl.colors.split(/,| and /)[0].trim()]),
  ),

  p('college-saturn', 'Saturn Universe City', 'University College', 'Saturn in college colors with the Universe City badge.', 'univ-saturn-college', ['Cream', 'Saturn Plum']),
  p('college-venus', 'Venus Universe City', 'University College', 'Venus in a varsity jacket with the Universe City badge.', 'univ-venus-college', ['Pink', 'Cream']),
  p('college-crew', 'Universe City Crew', 'University College', 'All ten Planet Heads, enrolled. Universe City badges on every one.', 'univ-crew-college', ['Cream']),

  p('crew-lineup-one', 'Planet Heads Lineup One', 'Crew', 'Sun, Moon, Mercury, Venus and Mars, all in one piece.', 'planet-heads-lineup-1', ['Cream']),
  p('crew-lineup-two', 'Planet Heads Lineup Two', 'Crew', 'Jupiter, Earth, Uranus and Neptune, side by side.', 'planet-heads-lineup-2', ['Cream']),
];

// ── Discography ──────────────────────────────────────────────────────────────
export type Disc = { title: string; kind: string; year?: string; note?: string; href?: string; cover?: string; searchTerm?: string };

export const releases: Disc[] = [
  { title: 'The Fruit Of Love', kind: 'Album, weekly singles', year: '2026–27', note: '39 songs. See the full schedule.', href: '/the-fruit-of-love/', cover: '/assets/covers/cover-01.webp' },
  { title: 'CHEF CURRY', kind: 'Single', year: '2026', note: 'feat. Mistah F.A.B.' },
  { title: 'Healing Centered Engagement Meditations', kind: 'Album', year: '2025', note: 'As Julius Deshon Jackson. Includes I AM HEALED.', searchTerm: 'Healing Centered Engagement Meditations Julius Deshon Jackson' },
  { title: 'Im In Love', kind: 'Single', year: '2017' },
  { title: 'Rise To Crown', kind: 'Mixtape', year: '2016' },
  { title: '#GoDaddy', kind: 'Single', year: '2016', note: 'Includes Trump Trump Remix feat. Hazel Bey.' },
  { title: 'Bob Marley', kind: 'Single', year: '2016', note: 'feat. Nia & Dre' },
  { title: 'Wood For You', kind: 'Single', year: '2016' },
  { title: 'Street Sweepa', kind: 'Single', year: '2015' },
  { title: 'Black Rose', kind: 'EP', year: '2014', note: 'Includes Love Mantra, Classy Girl, Street Sweepa.' },
];

export const features: Disc[] = [
  { title: 'Tantra', kind: 'F feat. LJ Bey' },
  { title: 'Queen of the Bay', kind: 'Thug Misses', note: '"Superficial" feat. LJ Bey. Seven writing credits.' },
  { title: 'Twenty Two', kind: 'Thug Misses', note: '"Superficial" feat. LJ Bey.' },
  { title: 'Maybe', kind: 'Nia Rene feat. LJ Bey' },
  { title: 'The Flight', kind: 'JG Eargazm with Thug Misses, DopeWurdz, LJ Bey' },
  { title: 'She On Me', kind: 'DJ Bille Knight' },
];

export const writingCredits: Disc[] = [
  { title: 'Queen of the Bay', kind: 'Thug Misses', note: 'Seven writing credits.' },
  { title: 'French Vanilla', kind: 'French Vanilla', year: '2016', note: 'Co-composer.' },
  { title: 'TV instrumental cues', kind: 'VH1, LOGO, Bravo', year: '~2015', note: "Basketball Wives LA, RuPaul's Drag Race All Stars, Real Housewives of NYC, Catfish." },
  { title: 'BMI catalog', kind: 'Writer "Jackson Julius"', note: 'IPI 760006674. 211 registered works.' },
];

export const syncAvailable = [
  { title: 'Elite House instrumentals and beats', text: 'Production written and produced under the Elite House imprint.' },
  { title: 'The Fruit Of Love songs', text: 'The 39-song album, released weekly from December 2026.' },
  { title: 'Healing Centered Engagement Meditations', text: 'The 2025 wellness album, released as Julius Deshon Jackson.' },
];
