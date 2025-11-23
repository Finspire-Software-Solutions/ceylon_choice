import { useMemo, useState } from 'react';
import { products } from '../data/products';
import ProductFilter from '../components/products/ProductFilter';
import ProductGrid from '../components/products/ProductGrid';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [filter, setFilter] = useState<'all' | 'grocery' | 'snacks'>('all');
  const nav = useNavigate();
  const filtered = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);
  return (
    <main className="container">
      <div className="mt-6">
        <div className="text-2xl font-bold text-center">Products</div>
        <div className="mt-4 flex justify-center">
          <ProductFilter value={filter} onChange={setFilter} />
        </div>
      </div>
      <div className="mt-6">
        <ProductGrid products={filtered} onSelect={(id) => nav(`/products/${id}`)} />
      </div>
    </main>
  );
}