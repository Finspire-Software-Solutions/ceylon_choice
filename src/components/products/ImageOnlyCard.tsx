import type { ImageOnlyProduct } from '@/types';
import { Card } from '@/components/ui/card';

type Props = {
  product: ImageOnlyProduct;
};

export default function ImageOnlyCard({ product }: Props) {
  return (
    <Card className="overflow-hidden transition hover:shadow-xl hover:-translate-y-1 group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy" 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{product.name}</h3>
          <span className="text-xs px-2 py-1 rounded bg-white/20 text-white capitalize">
            {product.category === 'dryFish' ? 'Dry Fish' : product.category}
          </span>
        </div>
      </div>
    </Card>
  );
}
