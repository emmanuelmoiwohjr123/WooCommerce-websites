
import { Product, Category } from '@/types/shop';

export const categories: Category[] = [
  {
    id: 1,
    name: "Clothing",
    slug: "clothing",
    description: "Browse our clothing collection",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Electronics",
    slug: "electronics",
    description: "Latest tech products",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=2025&auto=format&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Home & Garden",
    slug: "home-garden",
    description: "Furniture and accessories for your home",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop",
    featured: true
  },
  {
    id: 4,
    name: "Books",
    slug: "books",
    description: "Best selling books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
    featured: false
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    salePrice: 14.99,
    description: "A comfortable white t-shirt made from 100% organic cotton. Perfect for everyday wear and can be easily dressed up or down.",
    shortDescription: "Essential organic cotton t-shirt",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop"
    ],
    category: "clothing",
    tags: ["t-shirt", "essentials", "organic"],
    rating: 4.5,
    stock: 100,
    sku: "TS-WHT-001",
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    description: "These classic slim fit jeans feature a comfortable stretch denim fabric that moves with you. Five-pocket styling with a button closure and zip fly.",
    shortDescription: "Comfortable stretch denim jeans",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "clothing",
    tags: ["jeans", "denim", "casual"],
    rating: 4.3,
    stock: 75,
    sku: "JN-BLU-002",
    featured: true
  },
  {
    id: 3,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    salePrice: 99.99,
    description: "Experience superior sound quality with these comfortable wireless headphones. Featuring 40 hours of battery life, fast charging, and active noise cancellation.",
    shortDescription: "Premium wireless headphones with noise cancellation",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop"
    ],
    category: "electronics",
    tags: ["headphones", "wireless", "bluetooth", "audio"],
    rating: 4.8,
    stock: 50,
    sku: "HP-BLK-003",
    featured: true
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    description: "This feature-packed smartwatch tracks your fitness activities, heart rate, and sleep patterns. With a vibrant touch display and up to 7 days of battery life.",
    shortDescription: "Advanced fitness tracking smartwatch",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
    ],
    category: "electronics",
    tags: ["smartwatch", "fitness", "wearable"],
    rating: 4.6,
    stock: 30,
    sku: "SW-SLV-004",
    featured: true
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    price: 249.99,
    salePrice: 199.99,
    description: "A sleek, modern coffee table with a natural wood finish and black metal legs. The minimalist design complements any living space.",
    shortDescription: "Minimalist wood and metal coffee table",
    images: [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "home-garden",
    tags: ["furniture", "living room", "modern"],
    rating: 4.4,
    stock: 15,
    sku: "CT-WOD-005",
    featured: true
  },
  {
    id: 6,
    name: "Scented Candle Set",
    price: 34.99,
    description: "A set of three hand-poured scented candles made with natural soy wax. Fragrances include vanilla, lavender, and sea breeze.",
    shortDescription: "Set of three aromatic soy candles",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602523069296-50e2ab5c8dd3?q=80&w=1972&auto=format&fit=crop"
    ],
    category: "home-garden",
    tags: ["candles", "home decor", "gifts"],
    rating: 4.7,
    stock: 45,
    sku: "SC-SET-006",
    featured: false
  },
  {
    id: 7,
    name: "Bestselling Novel",
    price: 24.99,
    salePrice: 19.99,
    description: "The latest bestselling fiction novel that has captivated readers worldwide. Available in hardcover with a beautifully designed dust jacket.",
    shortDescription: "Award-winning fiction bestseller",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2048&auto=format&fit=crop"
    ],
    category: "books",
    tags: ["fiction", "bestseller", "hardcover"],
    rating: 4.9,
    stock: 60,
    sku: "BK-FIC-007",
    featured: false
  },
  {
    id: 8,
    name: "Cookbook: World Cuisines",
    price: 39.99,
    description: "Explore recipes from around the world with this comprehensive cookbook featuring 100+ authentic international dishes with step-by-step instructions.",
    shortDescription: "International recipes collection",
    images: [
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2004&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467951591042-f388365db261?q=80&w=2070&auto=format&fit=crop"
    ],
    category: "books",
    tags: ["cookbook", "recipes", "culinary"],
    rating: 4.5,
    stock: 35,
    sku: "BK-COK-008",
    featured: false
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getFeaturedCategories = (): Category[] => {
  return categories.filter(category => category.featured);
};
