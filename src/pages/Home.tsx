import HeroSlider from '../components/home/HeroSlider';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function pickRandom<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export default function Home() {
  const nav = useNavigate();
  const [featured] = useState<string[]>(() => {
    const key = 'featured_products_v1';
    const raw = localStorage.getItem(key);
    const now = Date.now();
    const sixHours = 6 * 60 * 60 * 1000;
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as { ids: string[]; next: number };
        if (parsed.next > now && parsed.ids?.length) {
          return parsed.ids;
        }
      } catch {
        // ignore parse errors
      }
    }
    const ids = pickRandom(products, 10).map((p) => p.id);
    localStorage.setItem(key, JSON.stringify({ ids, next: now + sixHours }));
    return ids;
  });

  const featuredProducts = useMemo(() => {
    if (!featured.length) return [];
    const set = new Set(featured);
    return products.filter((p) => set.has(p.id));
  }, [featured]);

  return (
    <main>
      <HeroSlider />
      <section className="container mt-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Featured Products</div>
          <button onClick={() => nav('/products')} className="px-4 py-2 rounded bg-[color:var(--color-primary)] text-white">View All</button>
        </div>
        <div className="mt-4">
          <ProductGrid products={featuredProducts} onSelect={(id) => nav(`/products/${id}`)} pageSize={10} />
        </div>
      </section>
    </main>
  );
}