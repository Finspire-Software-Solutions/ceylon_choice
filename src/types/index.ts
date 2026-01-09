interface Price {
  eur: number;
  lkr: number;
  gbp?: number;
}

interface PricePerKg {
  eur: number;
  lkr: number;
  gbp: number;
}

interface CompanyInfo {
  name: string;
  address: string;
  contact: string;
}

interface NutritionalFacts {
  servingSize: string;
  // calories: number;
  totalFat: string;
  saturatedFat: string;
  // transFat: string;
  // cholesterol: string;
  // sodium: string;
  // totalCarbohydrates: string;
  // dietaryFiber: string;
  sugars: string;
  // protein: string;
  energy: string;
}

interface DietaryInfo {
  isVegetarian: boolean;
  isNonVegetarian: boolean;
  isHalal: boolean;
}

interface BaseProduct {
  id: string;
  name: string;
  category: 'snacks' | 'grocery';
  image: string;
  price: Price;
  madeIn: string;
  quantity: string;
  mfd: string;
  exp: string;
  manufacturer: CompanyInfo;
  distributer: CompanyInfo;
}

interface SnackProduct extends BaseProduct {
  category: 'snacks';
  ingredients: string[];
  nutritionalFacts: NutritionalFacts;
  dietaryInfo: DietaryInfo;
  pricePerKg?: PricePerKg;
}

interface GroceryProduct extends BaseProduct {
  category: 'grocery';
}

// Image-only category types - these categories only display images without product details
type ImageOnlyCategory = 'dryFish' | 'fish' | 'spice' | 'vegetable' | 'meat' | 'fruits';

interface ImageOnlyProduct {
  id: string;
  name: string;
  category: ImageOnlyCategory;
  image: string;
}

type Product = SnackProduct | GroceryProduct;
type AllProduct = Product | ImageOnlyProduct;

export type {
  Product,
  AllProduct,
  SnackProduct,
  GroceryProduct,
  ImageOnlyProduct,
  ImageOnlyCategory,
  BaseProduct,
  Price,
  CompanyInfo,
  NutritionalFacts,
  DietaryInfo,
};