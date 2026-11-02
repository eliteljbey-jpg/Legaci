import { products as local, type Product } from '../data/site';
import { supabase } from './supabase';

/** Live products when the database is ready, otherwise the local data file. Art for extra views stays local. */
export async function getProducts(): Promise<Product[]> {
  if (!supabase) return local;
  try {
    const { data, error } = await supabase.from('products').select('slug,name,line,description,price_cents,colors,sizes,image_path,active').eq('active', true);
    if (error || !data?.length) return local;
    const extras = new Map(local.map((p) => [p.slug, p.alt_images]));
    const order = new Map(local.map((p, i) => [p.slug, i]));
    return (data as Product[])
      .map((p) => ({ ...p, alt_images: extras.get(p.slug) }))
      .sort((a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999));
  } catch {
    return local;
  }
}

export const formatPrice = (cents: number | null) => (cents == null ? '' : `$${(cents / 100).toFixed(cents % 100 ? 2 : 0)}`);
