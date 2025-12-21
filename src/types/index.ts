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

type Product = SnackProduct | GroceryProduct;

export type {
  Product,
  SnackProduct,
  GroceryProduct,
  BaseProduct,
  Price,
  CompanyInfo,
  NutritionalFacts,
  DietaryInfo,
};