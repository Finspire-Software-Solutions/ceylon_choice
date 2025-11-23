```json
{
  "project_name": "ceylon-choice-website",
  "description": "A professional food products website for Ceylon Choice with hero slider, products catalog, about page, and contact functionality",
  "tech_stack": {
    "framework": "React",
    "package_manager": "pnpm",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "ui_components": "shadcn/ui",
    "state_management": "none (no context)"
  },
  "color_palette": {
    "primary": "#BC0606",
    "secondary": "#E36712",
    "accent_light": "#FFB576",
    "accent_medium": "#FFC58A",
    "accent_lightest": "#FFE4A3",
    "dark_bg": "#3D0B0B",
    "text_dark": "#1A1A1A",
    "text_light": "#666666"
  },
  "project_structure": {
    "src": {
      "components": {
        "layout": [
          "Navbar.tsx - Navigation with logo and menu items",
          "Footer.tsx - Footer with company info, social links, quick links, and newsletter"
        ],
        "home": [
          "HeroSlider.tsx - Auto-playing hero slider with images and text",
          "HeroSlide.tsx - Individual slide component"
        ],
        "products": [
          "ProductCard.tsx - Product display card with image and details",
          "ProductGrid.tsx - Grid layout for products",
          "ProductFilter.tsx - Filter tabs (All, Grocery Items, Chips Items)"
        ],
        "about": [
          "AboutSection.tsx - About content with image"
        ],
        "contact": [
          "ContactForm.tsx - Contact form with validation",
          "ContactInfo.tsx - Contact information cards",
          "SocialLinks.tsx - Social media links",
          "Map.tsx - Embedded Google Maps"
        ]
      },
      "pages": [
        "Home.tsx - Home page with hero slider",
        "Products.tsx - Products listing page with filters",
        "ProductDetail.tsx - Single product detail page",
        "About.tsx - About us page",
        "Contact.tsx - Contact page with form and map"
      ],
      "data": [
        "content.ts - Centralized content management (text, images, etc.)",
        "products.ts - Product catalog data",
        "heroSlides.ts - Hero slider content"
      ],
      "types": [
        "index.ts - TypeScript type definitions"
      ],
      "lib": [
        "utils.ts - Utility functions"
      ],
      "App.tsx": "Main app component with routing",
      "main.tsx": "Entry point"
    }
  },
  "data_models": {
    "product_types": {
      "base_product": {
        "id": "string - unique identifier",
        "name": "string - product name",
        "category": "'snacks' | 'grocery'",
        "image": "string - path to product image",
        "price": {
          "eur": "number - price in euros",
          "lkr": "number - price in LKR"
        },
        "madeIn": "string - country of origin",
        "quantity": "string - e.g., '1KG', '500G', '250ML'",
        "mfd": "string - manufacturing date",
        "exp": "string - expiry date",
        "manufacturer": {
          "name": "string - manufacturer company name",
          "address": "string - manufacturer address",
          "contact": "string - manufacturer contact"
        },
        "distributer": {
          "name": "string - distributer company name",
          "address": "string - distributer address",
          "contact": "string - distributer contact"
        }
      },
      "snack_product": {
        "extends": "base_product",
        "additional_fields": {
          "ingredients": "string[] - list of ingredients",
          "nutritionalFacts": {
            "servingSize": "string - e.g., '100g'",
            "calories": "number",
            "totalFat": "string - e.g., '15g'",
            "saturatedFat": "string",
            "transFat": "string",
            "cholesterol": "string",
            "sodium": "string",
            "totalCarbohydrates": "string",
            "dietaryFiber": "string",
            "sugars": "string",
            "protein": "string"
          },
          "dietaryInfo": {
            "isVegetarian": "boolean",
            "isNonVegetarian": "boolean",
            "isHalal": "boolean"
          }
        }
      },
      "grocery_product": {
        "extends": "base_product",
        "note": "Uses only base product fields, no additional fields needed"
      }
    }
  },
  "typescript_types": {
    "src/types/index.ts": {
      "code_structure": [
        "// Price interface",
        "interface Price {",
        "  eur: number;",
        "  lkr: number;",
        "}",
        "",
        "// Company info interface",
        "interface CompanyInfo {",
        "  name: string;",
        "  address: string;",
        "  contact: string;",
        "}",
        "",
        "// Nutritional facts interface",
        "interface NutritionalFacts {",
        "  servingSize: string;",
        "  calories: number;",
        "  totalFat: string;",
        "  saturatedFat: string;",
        "  transFat: string;",
        "  cholesterol: string;",
        "  sodium: string;",
        "  totalCarbohydrates: string;",
        "  dietaryFiber: string;",
        "  sugars: string;",
        "  protein: string;",
        "}",
        "",
        "// Dietary info interface",
        "interface DietaryInfo {",
        "  isVegetarian: boolean;",
        "  isNonVegetarian: boolean;",
        "  isHalal: boolean;",
        "}",
        "",
        "// Base product interface",
        "interface BaseProduct {",
        "  id: string;",
        "  name: string;",
        "  category: 'snacks' | 'grocery';",
        "  image: string;",
        "  price: Price;",
        "  madeIn: string;",
        "  quantity: string;",
        "  mfd: string;",
        "  exp: string;",
        "  manufacturer: CompanyInfo;",
        "  distributer: CompanyInfo;",
        "}",
        "",
        "// Snack product interface",
        "interface SnackProduct extends BaseProduct {",
        "  category: 'snacks';",
        "  ingredients: string[];",
        "  nutritionalFacts: NutritionalFacts;",
        "  dietaryInfo: DietaryInfo;",
        "}",
        "",
        "// Grocery product interface",
        "interface GroceryProduct extends BaseProduct {",
        "  category: 'grocery';",
        "}",
        "",
        "// Union type for all products",
        "type Product = SnackProduct | GroceryProduct;",
        "",
        "export type {",
        "  Product,",
        "  SnackProduct,",
        "  GroceryProduct,",
        "  BaseProduct,",
        "  Price,",
        "  CompanyInfo,",
        "  NutritionalFacts,",
        "  DietaryInfo",
        "};"
      ]
    }
  },
  "product_data_examples": {
    "snack_example": {
      "id": "snack-001",
      "name": "Spicy Potato Chips",
      "category": "snacks",
      "image": "/images/products/spicy-chips.jpg",
      "price": {
        "eur": 2.99,
        "lkr": 300
      },
      "ingredients": [
        "Potatoes",
        "Vegetable Oil",
        "Spicy Seasoning",
        "Salt",
        "Sugar",
        "Chili Powder",
        "Onion Powder",
        "Garlic Powder"
      ],
      "nutritionalFacts": {
        "servingSize": "100g",
        "calories": 536,
        "totalFat": "34g",
        "saturatedFat": "12g",
        "transFat": "0g",
        "cholesterol": "0mg",
        "sodium": "480mg",
        "totalCarbohydrates": "52g",
        "dietaryFiber": "4g",
        "sugars": "2g",
        "protein": "6g"
      },
      "dietaryInfo": {
        "isVegetarian": true,
        "isNonVegetarian": false,
        "isHalal": true
      },
      "madeIn": "Sri Lanka",
      "quantity": "100G",
      "mfd": "2024-01-15",
      "exp": "2024-07-15",
      "manufacturer": {
        "name": "CEYLON CHOICE PVT LTD",
        "address": "AmbalKulam, Kilinochchi",
        "contact": "+94 74 290 3651"
      },
      "distributer": {
        "name": "CEYLON CHOICE UK LTD",
        "address": "123 Braemar Road, London",
        "contact": "+94 74 315 1452"
      }
    },
    "grocery_example": {
      "id": "grocery-001",
      "name": "Parboiled Red Rice",
      "category": "grocery",
      "image": "/images/products/red-rice.jpg",
      "price": {
        "eur": 4.99,
        "lkr": 500
      },
      "madeIn": "Sri Lanka",
      "quantity": "1KG",
      "mfd": "2024-01-01",
      "exp": "2025-01-01",
      "manufacturer": {
        "name": "CEYLON CHOICE PVT LTD",
        "address": "AmbalKulam, Kilinochchi",
        "contact": "+94 74 290 3651"
      },
      "distributer": {
        "name": "CEYLON CHOICE UK LTD",
        "address": "123 Braemar Road, London",
        "contact": "+94 74 315 1452"
      }
    }
  },
  "product_card_display": {
    "list_view": {
      "shows": [
        "Product image",
        "Product name",
        "Price (both EUR and LKR)",
        "Category badge",
        "Quick info: Quantity, Made In",
        "Dietary badges for snacks (Vegetarian/Non-Veg/Halal icons)"
      ]
    },
    "detail_view": {
      "layout": "Two column layout",
      "left_column": [
        "Large product image",
        "Image gallery if multiple images"
      ],
      "right_column": {
        "common_for_all": [
          "Product name (heading)",
          "Price display (EUR and LKR)",
          "Category badge",
          "Made In",
          "Quantity",
          "Manufacturing date",
          "Expiry date"
        ],
        "snacks_only": [
          "Dietary badges (Vegetarian/Non-Veg/Halal)",
          "Ingredients list",
          "Nutritional facts table"
        ],
        "bottom_section": [
          "Manufacturer information card",
          "Distributer information card"
        ]
      }
    }
  },
  "product_card_components": {
    "badges": {
      "vegetarian": {
        "icon": "Leaf or green circle",
        "color": "green",
        "text": "Vegetarian"
      },
      "non_vegetarian": {
        "icon": "Red circle/triangle",
        "color": "red",
        "text": "Non-Vegetarian"
      },
      "halal": {
        "icon": "Halal symbol",
        "color": "primary",
        "text": "Halal Certified"
      }
    },
    "price_display": {
      "format": "€2.99 / Rs. 300",
      "styling": "Large, bold, primary color"
    },
    "nutritional_facts_table": {
      "layout": "Two column table",
      "styling": "Border, alternating row colors",
      "columns": ["Nutrient", "Amount per serving"]
    }
  },
  "pages_specification": {
    "home": {
      "sections": [
        {
          "name": "Hero Slider",
          "description": "Auto-playing carousel with customizable slides",
          "features": [
            "Auto-swipe every 5 seconds",
            "Manual navigation dots",
            "Slide content: heading, subheading, description, CTA button, background image",
            "Smooth transitions",
            "Responsive design"
          ]
        },
        {
          "name": "Products Preview",
          "description": "Featured products section",
          "features": [
            "4-column grid on desktop",
            "View all products CTA"
          ]
        }
      ]
    },
    "products": {
      "sections": [
        {
          "name": "Product Catalog",
          "features": [
            "Filter tabs: All, Grocery Items, Chips Items",
            "Product cards with image, name, price, dietary badges",
            "Pagination (10 items per page)",
            "Click to view product details",
            "Responsive grid layout"
          ]
        }
      ]
    },
    "product_detail": {
      "sections": [
        {
          "name": "Product Details",
          "features": [
            "Large product image",
            "Complete product information based on category",
            "Ingredients list (snacks only)",
            "Nutritional facts table (snacks only)",
            "Dietary badges (snacks only)",
            "Manufacturer and distributor info cards",
            "Related products section"
          ]
        }
      ]
    },
    "about": {
      "sections": [
        {
          "name": "About Content",
          "features": [
            "Two-column layout",
            "Text content on left",
            "Image on right",
            "Social media links"
          ]
        }
      ]
    },
    "contact": {
      "sections": [
        {
          "name": "Contact Form",
          "features": [
            "Fields: First name, Last name, Email, Message",
            "Form validation",
            "Submit button"
          ]
        },
        {
          "name": "Contact Information",
          "features": [
            "Email with icon (links to mailto)",
            "Address with icon",
            "Phone number with icon (links to WhatsApp)",
            "Social media links"
          ]
        },
        {
          "name": "Map",
          "features": [
            "Embedded Google Maps",
            "Location: Ambalkulam, Kilinochchi"
          ]
        }
      ]
    }
  },
  "common_components": {
    "navbar": {
      "features": [
        "Logo on left (Ceylon Choice)",
        "Navigation links: Home, Products, Contact Us, About Us",
        "Contact Us button (red) on right",
        "Sticky on scroll",
        "Mobile responsive with hamburger menu"
      ]
    },
    "footer": {
      "features": [
        "Dark maroon background (#3D0B0B)",
        "Three columns: Company Info, Stay Connected (newsletter), Quick Links",
        "Company logo and details",
        "Social media icons (WhatsApp, Instagram, Facebook)",
        "Newsletter subscription form",
        "Quick links to all pages",
        "Copyright notice"
      ]
    }
  },
  "content_management": {
    "approach": "Centralized data files for easy content updates",
    "files": {
      "src/data/content.ts": {
        "purpose": "Main content configuration",
        "contains": [
          "Site metadata (title, description)",
          "Company information",
          "Contact details",
          "Social media links",
          "Footer content"
        ]
      },
      "src/data/heroSlides.ts": {
        "purpose": "Hero slider configuration",
        "contains": [
          "Array of slide objects",
          "Each slide: title, subtitle, description, CTA text, CTA link, background image path"
        ]
      },
      "src/data/products.ts": {
        "purpose": "Product catalog",
        "contains": [
          "Array of product objects (SnackProduct and GroceryProduct)",
          "Snacks with full nutritional and dietary information",
          "Groceries with basic product information"
        ],
        "structure": "export const products: Product[] = [...]"
      },
      "public/images": {
        "purpose": "Image assets",
        "structure": [
          "/hero - Hero slider images",
          "/products - Product images",
          "/about - About page images",
          "/logo - Logo files",
          "/icons - Dietary and category icons"
        ]
      }
    },
    "instructions": "All text and images can be updated by editing the data files in src/data/. Images should be placed in public/images/ and referenced by path in the data files. Product information is type-safe with TypeScript."
  },
  "shadcn_components_to_use": [
    "Button - For CTAs and form submissions",
    "Card - For product cards and info cards",
    "Input - For form inputs",
    "Textarea - For message field",
    "Tabs - For product filtering",
    "Badge - For product categories and dietary info",
    "Table - For nutritional facts display",
    "Carousel - For hero slider",
    "Form - For contact form with validation",
    "Sheet - For mobile menu",
    "Separator - For dividing sections",
    "Label - For form labels"
  ],
  "routing": {
    "library": "react-router-dom",
    "routes": [
      "/ - Home page",
      "/products - Products listing",
      "/products/:id - Product detail",
      "/about - About page",
      "/contact - Contact page"
    ]
  },
  "special_features": {
    "whatsapp_integration": {
      "description": "Contact phone number links to WhatsApp",
      "format": "https://wa.me/94743151452"
    },
    "google_maps": {
      "description": "Embedded map in contact page",
      "location": "Ambalkulam, Kilinochchi, Sri Lanka",
      "implementation": "Use Google Maps Embed API or iframe"
    },
    "auto_slider": {
      "description": "Hero slider auto-advances every 5 seconds",
      "features": [
        "Pause on hover",
        "Manual navigation with dots",
        "Smooth fade transitions"
      ]
    },
    "dietary_filters": {
      "description": "Filter snacks by dietary requirements",
      "options": [
        "All",
        "Vegetarian",
        "Non-Vegetarian",
        "Halal"
      ]
    }
  },
  "responsive_design": {
    "breakpoints": {
      "mobile": "< 640px",
      "tablet": "640px - 1024px",
      "desktop": "> 1024px"
    },
    "grid_layouts": {
      "products": {
        "mobile": "1 column",
        "tablet": "2 columns",
        "desktop": "4 columns"
      },
      "product_detail": {
        "mobile": "1 column (stacked)",
        "tablet": "1 column (stacked)",
        "desktop": "2 columns (image left, info right)"
      }
    }
  },
  "typography": {
    "headings": "font-bold with appropriate sizing",
    "body": "font-normal, text-base",
    "colors": {
      "headings": "text-gray-900",
      "body": "text-gray-600",
      "links": "text-primary hover:text-secondary"
    }
  },
  "setup_instructions": {
    "steps": [
      "1. Initialize React + TypeScript project with Vite",
      "2. Install dependencies: pnpm add react-router-dom lucide-react",
      "3. Initialize shadcn/ui: npx shadcn-ui@latest init",
      "4. Add required shadcn components: button, card, input, textarea, tabs, badge, table, carousel, form, sheet, separator, label",
      "5. Configure Tailwind with custom colors in tailwind.config.js",
      "6. Create folder structure as specified",
      "7. Create TypeScript types in src/types/index.ts",
      "8. Create data files with sample products",
      "9. Build components following atomic design",
      "10. Implement routing with react-router-dom",
      "11. Add dietary icons and badges",
      "12. Test responsiveness and type safety"
    ]
  },
  "deployment": {
    "build_command": "pnpm build",
    "recommended_platforms": [
      "Vercel",
      "Netlify",
      "GitHub Pages"
    ]
  },
  "additional_notes": [
    "Type-safe product data with TypeScript discriminated unions",
    "Conditional rendering based on product category",
    "No backend required - static site",
    "Contact form can be connected to email service or WhatsApp",
    "SEO optimization with proper meta tags",
    "Loading states for images",
    "Accessibility features (alt tags, ARIA labels, semantic HTML)",
    "Performance optimization (lazy loading, image optimization)",
    "Print-friendly product detail pages for labels",
    "Multi-currency display (EUR and LKR)"
  ]
}
```