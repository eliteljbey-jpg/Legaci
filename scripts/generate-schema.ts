// Regenerates supabase/schema.sql (including the product seed) from src/data/site.ts.
// Run with: npm run schema
import { writeFileSync } from 'node:fs';
import { products } from '../src/data/site.ts';

const q = (s: string) => `'${s.replaceAll("'", "''")}'`;
const rows = products.map((p) =>
  `  (${q(p.slug)}, ${q(p.name)}, ${q(p.line)}, ${q(p.description)}, ${p.price_cents ?? 'null'}, ${q(JSON.stringify(p.colors))}::jsonb, ${q(JSON.stringify(p.sizes))}::jsonb, ${q(p.image_path)}, ${p.active})`).join(',\n');

writeFileSync('supabase/schema.sql', `-- LJ Bey website. Run once in the Supabase SQL editor. Safe to run again.

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
${rows}
on conflict (slug) do update set
  name = excluded.name, line = excluded.line, description = excluded.description,
  colors = excluded.colors, sizes = excluded.sizes, image_path = excluded.image_path;
`);
console.log(`schema.sql written with ${products.length} products`);
