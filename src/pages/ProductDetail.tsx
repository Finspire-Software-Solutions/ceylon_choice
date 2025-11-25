import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/content';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <main className="container mt-6">Not found</main>;

  return (
    <main className="container mt-8 grid gap-8 lg:grid-cols-2">
      <Card className="overflow-hidden lg:sticky lg:top-24 h-fit">
        <CardHeader>
          <CardTitle className="sr-only">Image</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
        </CardContent>
      </Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">{product.name}</div>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">{product.category}</span>
        </div>
        <div className="text-lg font-semibold text-[color:var(--color-primary)]">€{product.price.eur.toFixed(2)} / Rs. {product.price.lkr}</div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>Made In: {product.madeIn}</div>
          <div>Quantity: {product.quantity}</div>
          <div>MFD: {product.mfd}</div>
          <div>EXP: {product.exp}</div>
        </div>

        {product.category === 'snacks' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {product.dietaryInfo.isVegetarian && <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Vegetarian</span>}
              {product.dietaryInfo.isNonVegetarian && <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">Non-Vegetarian</span>}
              {product.dietaryInfo.isHalal && <span className="text-xs px-2 py-1 rounded bg-[color:var(--color-accent-lightest)] text-[color:var(--color-primary)]">Halal Certified</span>}
            </div>

            <Card className="border-l-4 border-[color:var(--color-secondary)]">
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                  {product.ingredients.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[color:var(--color-accent-medium)] bg-[color:var(--color-accent-lightest)]">
              <CardHeader>
                <CardTitle>Nutritional Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(product.nutritionalFacts).map(([k, v]) => (
                    <div key={k} className="border rounded p-2 flex items-center justify-between"><span className="capitalize">{k}</span><span>{String(v)}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-l-4 border-[color:var(--color-primary)]">
            <CardHeader>
              <CardTitle>Manufacturer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-700">{product.manufacturer.name}</div>
              <div className="text-sm text-gray-700">{product.manufacturer.address}</div>
              <div className="text-sm text-gray-700">{product.manufacturer.contact}</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-[color:var(--color-secondary)]">
            <CardHeader>
              <CardTitle>Distributer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-700">{product.distributer.name}</div>
              <div className="text-sm text-gray-700">{product.distributer.address}</div>
              <div className="text-sm text-gray-700">{product.distributer.contact}</div>
            </CardContent>
          </Card>
        </div>

        <div className="pt-2 my-6">
          <Button asChild
          
          className='bg-green-500'>
            <a href={`${contact.whatsappLink}?text=${encodeURIComponent('I would like to know more about ' + product.name)}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </main>
  );
}