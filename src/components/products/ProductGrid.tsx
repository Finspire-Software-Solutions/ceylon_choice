import { useMemo, useState } from 'react';
import type { Product } from '../../types';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
  onSelect: (id: string) => void;
  pageSize?: number;
};

export default function ProductGrid({ products, onSelect, pageSize = 10 }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return products.slice(start, start + pageSize);
  }, [products, page, pageSize]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} onClick={onSelect} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50">Prev</button>
          <div className="text-sm">Page {page} of {totalPages}</div>
          <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50">Next</button>
        </div>
      )}
    </div>
  );
}