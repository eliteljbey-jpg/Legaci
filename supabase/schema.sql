-- LJ Bey website. Run once in the Supabase SQL editor. Safe to run again.

create table if not exists public.email_signups (
  id uuid primary key default gen_random_uuid(),
  first_name text check (char_length(first_name) <= 100),
  email text not null unique check (char_length(email) <= 320 and email ~ '^[^@[:space:]]+@[^@[:space:]]+$'),
  source_page text check (char_length(source_page) <= 200),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) <= 320 and email ~ '^[^@[:space:]]+@[^@[:space:]]+$'),
  topic text check (char_length(topic) <= 100),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  line text not null,
  description text,
  price_cents integer check (price_cents is null or price_cents >= 0),
  colors jsonb not null default '[]'::jsonb,
  sizes jsonb not null default '[]'::jsonb,
  image_path text,
  active boolean not null default true
);

alter table public.email_signups enable row level security;
alter table public.contact_messages enable row level security;
alter table public.products enable row level security;

-- Visitors can add a signup or a message but can never read, change or delete them.
revoke all on public.email_signups, public.contact_messages, public.products from anon, authenticated;
grant insert (first_name, email, source_page) on public.email_signups to anon, authenticated;
grant insert (name, email, topic, message) on public.contact_messages to anon, authenticated;
grant select on public.products to anon, authenticated;

drop policy if exists "public can sign up" on public.email_signups;
create policy "public can sign up" on public.email_signups for insert to anon, authenticated with check (true);

drop policy if exists "public can send messages" on public.contact_messages;
create policy "public can send messages" on public.contact_messages for insert to anon, authenticated with check (true);

drop policy if exists "public can read active products" on public.products;
create policy "public can read active products" on public.products for select to anon, authenticated using (active = true);

-- Product seed. Re-running refreshes names and art but never overwrites a price you set.
insert into public.products (slug, name, line, description, price_cents, colors, sizes, image_path, active) values
  ('saturn-hoodie', 'Saturn Hoodie', 'Core Saturn', 'Saturn up front, the number 8 on the back. Time and discipline, worn.', null, '["Cream","Saturn Plum"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/mockup-saturn-hoodie.webp', true),
  ('saturn-crewneck', 'Saturn Crewneck', 'Core Saturn', 'The lead character, ring tilted, ready to fall in love with Earth.', null, '["Saturn Plum"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/mockup-saturn-crewneck.webp', true),
  ('saturn-tshirt', 'Saturn T-Shirt', 'Core Saturn', 'Saturn, all potential and no ground. The story starts here.', null, '["Saturn Plum"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/mockup-saturn-tshirt.webp', true),
  ('saturn-hat', 'Saturn Hat', 'Core Saturn', 'A small gold-ringed Saturn for everyday orbit.', null, '["Cream"]'::jsonb, '["One size"]'::jsonb, '/assets/mockup-saturn-hat.webp', true),
  ('sun-hoodie', 'Sun Hoodie', 'Planet', 'Ego and fame, in full shine. The Sun loves a spotlight.', null, '["Gold"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-sun.webp', true),
  ('moon-crewneck', 'Moon Crewneck', 'Planet', 'For dreams, memory and grief, and the coffee that gets you through them.', null, '["Indigo"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-moon.webp', true),
  ('mercury-tee', 'Mercury T-Shirt', 'Planet', 'The messenger, mid-stride. All talk and hustle.', null, '["Seafoam"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-mercury.webp', true),
  ('venus-hat', 'Venus Hat', 'Planet', 'Love as guide, tempter and teacher, stitched in Venus''s pink.', null, '["Pink"]'::jsonb, '["One size"]'::jsonb, '/assets/merch-planet-venus.webp', true),
  ('earth-hoodie', 'Earth Hoodie', 'Planet', 'Home and grounding. Where the story ends up.', null, '["Green"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-earth.webp', true),
  ('mars-crewneck', 'Mars Crewneck', 'Planet', 'Conflict and drive, fists up.', null, '["Red"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-mars.webp', true),
  ('jupiter-tee', 'Jupiter T-Shirt', 'Planet', 'Abundance, blessing and just a little excess, crown included.', null, '["Orange"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-jupiter.webp', true),
  ('uranus-hat', 'Uranus Hat', 'Planet', 'The rebel. Sudden change, ring sideways.', null, '["Ice Blue"]'::jsonb, '["One size"]'::jsonb, '/assets/merch-planet-uranus.webp', true),
  ('neptune-hoodie', 'Neptune Hoodie', 'Planet', 'Illusion and spirit in deep blue water.', null, '["Blue"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-planet-neptune.webp', true),
  ('root-saturn-tee', 'Saturn Root Chakra Tee', 'Chakra Mandala', 'Saturn stands on the red Root mandala: time, discipline, the ground beneath it all.', null, '["Red"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/mockup-saturn-root-chakra-tee.webp', true),
  ('sacral-jupiter-crewneck', 'Jupiter Sacral Chakra Crewneck', 'Chakra Mandala', 'Jupiter on the orange Sacral mandala: abundance and blessing.', null, '["Orange"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-chakra-sacral-jupiter.webp', true),
  ('solar-mars-tee', 'Mars Solar Plexus Chakra Tee', 'Chakra Mandala', 'Mars on the yellow Solar Plexus mandala: conflict and drive.', null, '["Yellow"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-chakra-solar-mars.webp', true),
  ('heart-venus-crew', 'Venus Heart Chakra Crewneck', 'Chakra Mandala', 'Venus on the green Heart mandala: love as guide, tempter and teacher.', null, '["Cream"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/mockup-venus-heart-chakra-crew.webp', true),
  ('throat-mercury-hoodie', 'Mercury Throat Chakra Hoodie', 'Chakra Mandala', 'Mercury on the blue Throat mandala: the messenger, talk and hustle.', null, '["Sky Blue"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-chakra-throat-mercury.webp', true),
  ('third-eye-moon-crewneck', 'Moon Third Eye Chakra Crewneck', 'Chakra Mandala', 'Moon on the indigo Third Eye mandala: dreams, memory, grief.', null, '["Indigo"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-chakra-third-eye-moon.webp', true),
  ('crown-sun-tee', 'Sun Crown Chakra Tee', 'Chakra Mandala', 'Sun on the violet Crown mandala: ego and fame in the spotlight.', null, '["Violet"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/merch-chakra-crown-sun.webp', true),
  ('number-saturn', 'Saturn Number Piece', 'Planetary Numbers', 'Saturn in its own colors. Time, discipline, the lead.', null, '["Red"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-saturn.webp', true),
  ('number-sun', 'Sun Number Piece', 'Planetary Numbers', 'Sun in its own colors. Ego and fame; the spotlight.', null, '["Violet"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-sun.webp', true),
  ('number-moon', 'Moon Number Piece', 'Planetary Numbers', 'Moon in its own colors. Dreams, memory, grief.', null, '["Indigo"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-moon.webp', true),
  ('number-jupiter', 'Jupiter Number Piece', 'Planetary Numbers', 'Jupiter in its own colors. Abundance, blessing, excess.', null, '["Orange"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-jupiter.webp', true),
  ('number-mars', 'Mars Number Piece', 'Planetary Numbers', 'Mars in its own colors. Conflict and drive.', null, '["Yellow"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-mars.webp', true),
  ('number-venus', 'Venus Number Piece', 'Planetary Numbers', 'Venus in its own colors. Love: guide, tempter, teacher.', null, '["Green"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-venus.webp', true),
  ('number-mercury', 'Mercury Number Piece', 'Planetary Numbers', 'Mercury in its own colors. The messenger; talk and hustle.', null, '["Blue"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-mercury.webp', true),
  ('number-earth', 'Earth Number Piece', 'Planetary Numbers', 'Earth in its own colors. Home and grounding.', null, '["Green"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-earth.webp', true),
  ('number-uranus', 'Uranus Number Piece', 'Planetary Numbers', 'Uranus in its own colors. The rebel; sudden change.', null, '["Ice blue"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-uranus.webp', true),
  ('number-neptune', 'Neptune Number Piece', 'Planetary Numbers', 'Neptune in its own colors. Illusion and spirit.', null, '["Deep blue"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-neptune.webp', true),
  ('college-saturn', 'Saturn Universe City', 'University College', 'Saturn in college colors with the Universe City badge.', null, '["Cream","Saturn Plum"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/univ-saturn-college.webp', true),
  ('college-venus', 'Venus Universe City', 'University College', 'Venus in her varsity jacket with the Universe City badge.', null, '["Pink","Cream"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/univ-venus-college.webp', true),
  ('college-crew', 'Universe City Crew', 'University College', 'All ten Planet Heads, enrolled. Universe City badges on every one.', null, '["Cream"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/univ-crew-college.webp', true),
  ('crew-lineup-one', 'Planet Heads Lineup One', 'Crew', 'Sun, Moon, Mercury, Venus and Mars, all in one piece.', null, '["Cream"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-heads-lineup-1.webp', true),
  ('crew-lineup-two', 'Planet Heads Lineup Two', 'Crew', 'Jupiter, Earth, Uranus and Neptune, side by side.', null, '["Cream"]'::jsonb, '["S","M","L","XL","2XL"]'::jsonb, '/assets/planet-heads-lineup-2.webp', true)
on conflict (slug) do update set
  name = excluded.name, line = excluded.line, description = excluded.description,
  colors = excluded.colors, sizes = excluded.sizes, image_path = excluded.image_path;
