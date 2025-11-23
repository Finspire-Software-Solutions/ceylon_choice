import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <main className="container mt-6">Not found</main>;

  return (
    <main className="container mt-6 grid gap-8 lg:grid-cols-2">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded" />
      </div>
      <div>
        <div className="text-3xl font-bold">{product.name}</div>
        <div className="mt-2 text-sm px-2 py-1 rounded bg-gray-100 inline-block">{product.category}</div>
        <div className="mt-3 text-lg font-semibold text-[color:var(--color-primary)]">€{product.price.eur.toFixed(2)} / Rs. {product.price.lkr}</div>
        <div className="mt-2 text-sm text-gray-700">Made In: {product.madeIn}</div>
        <div className="mt-1 text-sm text-gray-700">Quantity: {product.quantity}</div>
        <div className="mt-1 text-sm text-gray-700">MFD: {product.mfd}</div>
        <div className="mt-1 text-sm text-gray-700">EXP: {product.exp}</div>

        {product.category === 'snacks' && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              {product.dietaryInfo.isVegetarian && <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Vegetarian</span>}
              {product.dietaryInfo.isNonVegetarian && <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">Non-Vegetarian</span>}
              {product.dietaryInfo.isHalal && <span className="text-xs px-2 py-1 rounded bg-[color:var(--color-accent-lightest)] text-[color:var(--color-primary)]">Halal Certified</span>}
            </div>
            <div>
              <div className="font-semibold">Ingredients</div>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {product.ingredients.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold">Nutritional Facts</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                {Object.entries(product.nutritionalFacts).map(([k, v]) => (
                  <div key={k} className="border rounded p-2 flex items-center justify-between"><span className="capitalize">{k}</span><span>{String(v)}</span></div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border rounded p-3">
            <div className="font-semibold">Manufacturer</div>
            <div className="text-sm text-gray-700">{product.manufacturer.name}</div>
            <div className="text-sm text-gray-700">{product.manufacturer.address}</div>
            <div className="text-sm text-gray-700">{product.manufacturer.contact}</div>
          </div>
          <div className="border rounded p-3">
            <div className="font-semibold">Distributer</div>
            <div className="text-sm text-gray-700">{product.distributer.name}</div>
            <div className="text-sm text-gray-700">{product.distributer.address}</div>
            <div className="text-sm text-gray-700">{product.distributer.contact}</div>
          </div>
        </div>
      </div>
    </main>
  );
}