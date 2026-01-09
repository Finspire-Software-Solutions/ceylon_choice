import type { Product } from '@/types';
import { BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  product: Product;
  onClick?: (id: string) => void;
};

function Price({ eur, lkr, gbp, perKg }: { eur: number; lkr: number; gbp?: number; perKg?: boolean }) {
  return (
    <div className="font-semibold text-[color:var(--color-primary)]">
      {perKg && <span className="text-xs text-gray-500 block mb-1">Price per kg</span>}
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-base">
        <span>€{eur.toFixed(2)}</span>
        <span>Rs. {lkr}</span>
        {gbp !== undefined && <span>£{gbp.toFixed(2)}</span>}
      </div>
    </div>
  );
}

export default function ProductCard({ product, onClick }: Props) {
  // For snacks, use pricePerKg if available
  const isSnack = product.category === 'snacks';
  const displayPrice = isSnack && product.pricePerKg ? product.pricePerKg : product.price;
  const showPerKg = isSnack && !!product.pricePerKg;

  return (
    <Card className="flex flex-col transition hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-auto object-cover rounded-t-lg" />
        <div className="flex items-center justify-between pt-4">
          <CardTitle>{product.name}</CardTitle>
          {product.category === 'snacks' && <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">{product.category}</span>}
          {product.category === 'grocery' && <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">{product.category}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Price eur={displayPrice.eur} lkr={displayPrice.lkr} gbp={displayPrice.gbp} perKg={showPerKg} />
        <div className="mt-2 text-sm text-gray-600">{product.quantity}</div>
        <span className="ml-auto text-xs text-gray-600">Made in {product.madeIn}</span>
        {product.category === 'snacks' && (
          <div className="mt-2 flex items-center gap-2">
            {product.dietaryInfo.isVegetarian && <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Vegetarian</span>}
            {product.dietaryInfo.isNonVegetarian && <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">Non-Vegetarian</span>}
            {product.dietaryInfo.isHalal && <span className="text-xs px-2 py-1 rounded bg-[color:var(--color-accent-lightest)] text-[color:var(--color-primary)] flex items-center gap-1"><BadgeCheck size={14} /> Halal</span>}    
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={() => onClick && onClick(product.id)} className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}