import { useMemo, useState } from 'react';
import { products } from '../data/products';
import { imageOnlyProducts } from '../data/imageOnlyProducts';
import ProductFilter, { type FilterValue } from '../components/products/ProductFilter';
import ProductGrid from '../components/products/ProductGrid';
import ImageOnlyCard from '../components/products/ImageOnlyCard';
import { useNavigate } from 'react-router-dom';

const IMAGE_ONLY_CATEGORIES = ['spice', 'vegetable','dryFish', 'fish',  'meat', 'fruits'] as const;

export default function Products() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const nav = useNavigate();
  
  const isImageOnlyCategory = IMAGE_ONLY_CATEGORIES.includes(filter as typeof IMAGE_ONLY_CATEGORIES[number]);
  
  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products;
    if (isImageOnlyCategory) return [];
    return products.filter((p) => p.category === filter);
  }, [filter, isImageOnlyCategory]);

  const filteredImageOnlyProducts = useMemo(() => {
    if (filter === 'all') return imageOnlyProducts;
    if (isImageOnlyCategory) {
      return imageOnlyProducts.filter((p) => p.category === filter);
    }
    return [];
  }, [filter, isImageOnlyCategory]);

  return (
    <main className="container">
      <div className="mt-6">
        <div className="text-2xl font-bold text-center">Products</div>
        <div className="mt-4 flex justify-center">
          <ProductFilter value={filter} onChange={setFilter} />
        </div>
      </div>
      
      {/* Regular products (snacks & grocery) */}
      {filteredProducts.length > 0 && (
        <div className="mt-6">
          <ProductGrid products={filteredProducts} onSelect={(id) => nav(`/products/${id}`)} pageSize={12} />
        </div>
      )}
      
      {/* Image-only products (dryFish, fish, spice, vegetable) */}
      {filteredImageOnlyProducts.length > 0 && (
        <div className="mt-6">
          {filter === 'all' && filteredProducts.length > 0 && (
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Fresh Products</h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImageOnlyProducts.map((p) => (
              <ImageOnlyCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}