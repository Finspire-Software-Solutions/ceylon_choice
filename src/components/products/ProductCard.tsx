import type { Product } from '../../types';
import { BadgeCheck } from 'lucide-react';

type Props = {
  product: Product;
  onClick?: (id: string) => void;
};

function Price({ eur, lkr }: { eur: number; lkr: number }) {
  return <div className="text-lg font-semibold text-[color:var(--color-primary)]">€{eur.toFixed(2)} / Rs. {lkr}</div>;
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div className="border rounded overflow-hidden bg-white shadow flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{product.name}</div>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">{product.category}</span>
        </div>
        <div className="mt-2">
          <Price eur={product.price.eur} lkr={product.price.lkr} />
        </div>
        <div className="mt-2 text-sm text-gray-600">{product.quantity}</div>
        {product.category === 'snacks' && (
          <div className="mt-2 flex items-center gap-2">
            {product.dietaryInfo.isVegetarian && <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Vegetarian</span>}
            {product.dietaryInfo.isNonVegetarian && <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">Non-Vegetarian</span>}
            {product.dietaryInfo.isHalal && <span className="text-xs px-2 py-1 rounded bg-[color:var(--color-accent-lightest)] text-[color:var(--color-primary)] flex items-center gap-1"><BadgeCheck size={14} /> Halal</span>}
            <span className="ml-auto text-xs text-gray-600">Made in Sri Lanka</span>
          </div>
        )}
        <button onClick={() => onClick && onClick(product.id)} className="mt-auto w-full px-3 py-2 rounded bg-[color:var(--color-secondary)] text-white">View Details</button>
      </div>
    </div>
  );
}