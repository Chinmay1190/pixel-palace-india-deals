
import { Product, Category, Brand } from "@/types/product";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Gaming Laptops",
    slug: "gaming-laptops",
    description: "High-performance laptops built for gaming",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat-2",
    name: "Gaming PCs",
    slug: "gaming-pcs",
    description: "Custom-built desktop computers for gaming enthusiasts",
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat-3",
    name: "Smartphones",
    slug: "smartphones",
    description: "Gaming smartphones with high refresh rates and powerful processors",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat-4",
    name: "Headphones",
    slug: "headphones",
    description: "Gaming headphones for immersive audio experience",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat-5",
    name: "Earbuds",
    slug: "earbuds",
    description: "Wireless earbuds for gaming and music",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat-6",
    name: "Accessories",
    slug: "accessories",
    description: "Essential gaming accessories to complete your setup",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=500&auto=format&fit=crop"
  }
];

export const brands: Brand[] = [
  { id: "brand-1", name: "ASUS ROG", logo: "/brands/asus-rog.png" },
  { id: "brand-2", name: "MSI", logo: "/brands/msi.png" },
  { id: "brand-3", name: "Razer", logo: "/brands/razer.png" },
  { id: "brand-4", name: "Alienware", logo: "/brands/alienware.png" },
  { id: "brand-5", name: "Acer Predator", logo: "/brands/acer-predator.png" },
  { id: "brand-6", name: "Apple", logo: "/brands/apple.png" },
  { id: "brand-7", name: "Samsung", logo: "/brands/samsung.png" },
  { id: "brand-8", name: "OnePlus", logo: "/brands/oneplus.png" },
  { id: "brand-9", name: "SteelSeries", logo: "/brands/steelseries.png" },
  { id: "brand-10", name: "HyperX", logo: "/brands/hyperx.png" },
  { id: "brand-11", name: "Logitech G", logo: "/brands/logitech-g.png" },
  { id: "brand-12", name: "Sony", logo: "/brands/sony.png" }
];

export const products: Product[] = [
  // Gaming Laptops
  {
    id: "laptop-1",
    name: "ASUS ROG Strix G17",
    description: "17.3-inch gaming laptop with AMD Ryzen 9 processor and NVIDIA RTX 3080 graphics",
    price: 199999,
    originalPrice: 219999,
    category: "gaming-laptops",
    brand: "ASUS ROG",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    featured: true,
    specifications: {
      processor: "AMD Ryzen 9 5900HX",
      ram: "32GB DDR4",
      storage: "1TB NVMe SSD",
      display: "17.3-inch FHD, 360Hz",
      graphics: "NVIDIA GeForce RTX 3080 16GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "high-performance", "ASUS"],
    createdAt: "2023-01-15T00:00:00Z"
  },
  {
    id: "laptop-2",
    name: "MSI Raider GE76",
    description: "17.3-inch gaming laptop with Intel Core i9 processor and NVIDIA RTX 3080 Ti graphics",
    price: 249999,
    originalPrice: 279999,
    category: "gaming-laptops",
    brand: "MSI",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Intel Core i9-12900HK",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD",
      display: "17.3-inch UHD, 120Hz",
      graphics: "NVIDIA GeForce RTX 3080 Ti 16GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming laptop", "high-performance", "MSI", "RTX 3080 Ti"],
    createdAt: "2023-01-18T00:00:00Z"
  },
  {
    id: "laptop-3",
    name: "Razer Blade 15",
    description: "15.6-inch gaming laptop with Intel Core i7 processor and NVIDIA RTX 3070 Ti graphics",
    price: 179999,
    originalPrice: 189999,
    category: "gaming-laptops",
    brand: "Razer",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      processor: "Intel Core i7-12800H",
      ram: "16GB DDR5",
      storage: "1TB NVMe SSD",
      display: "15.6-inch QHD, 240Hz",
      graphics: "NVIDIA GeForce RTX 3070 Ti 8GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "high-performance", "Razer"],
    createdAt: "2023-01-22T00:00:00Z"
  },
  {
    id: "laptop-4",
    name: "Alienware x15 R2",
    description: "15.6-inch gaming laptop with Intel Core i9 processor and NVIDIA RTX 3080 graphics",
    price: 229999,
    originalPrice: 249999,
    category: "gaming-laptops",
    brand: "Alienware",
    image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    specifications: {
      processor: "Intel Core i9-12900H",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      display: "15.6-inch QHD, 240Hz",
      graphics: "NVIDIA GeForce RTX 3080 8GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "high-performance", "Alienware"],
    createdAt: "2023-01-25T00:00:00Z"
  },
  {
    id: "laptop-5",
    name: "Acer Predator Helios 300",
    description: "15.6-inch gaming laptop with Intel Core i7 processor and NVIDIA RTX 3060 graphics",
    price: 129999,
    originalPrice: 149999,
    category: "gaming-laptops",
    brand: "Acer Predator",
    image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7?q=80&w=500&auto=format&fit=crop",
    rating: 4.5,
    inStock: true,
    specifications: {
      processor: "Intel Core i7-11800H",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      display: "15.6-inch FHD, 144Hz",
      graphics: "NVIDIA GeForce RTX 3060 6GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "mid-range", "Acer"],
    createdAt: "2023-02-01T00:00:00Z"
  },
  {
    id: "laptop-6",
    name: "Lenovo Legion 7i",
    description: "16-inch gaming laptop with Intel Core i9 processor and NVIDIA RTX 3080 graphics",
    price: 189999,
    originalPrice: 209999,
    category: "gaming-laptops",
    brand: "Lenovo",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: false,
    specifications: {
      processor: "Intel Core i9-12900HK",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      display: "16-inch QHD, 165Hz",
      graphics: "NVIDIA GeForce RTX 3080 16GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming laptop", "high-performance", "Lenovo"],
    createdAt: "2023-02-05T00:00:00Z"
  },
  {
    id: "laptop-7",
    name: "HP Omen 16",
    description: "16-inch gaming laptop with AMD Ryzen 7 processor and NVIDIA RTX 3070 graphics",
    price: 149999,
    originalPrice: 169999,
    category: "gaming-laptops",
    brand: "HP",
    image: "https://images.unsplash.com/photo-1527443060795-0402a48a4807?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    specifications: {
      processor: "AMD Ryzen 7 5800H",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      display: "16-inch QHD, 165Hz",
      graphics: "NVIDIA GeForce RTX 3070 8GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "high-performance", "HP"],
    createdAt: "2023-02-10T00:00:00Z"
  },
  {
    id: "laptop-8",
    name: "Dell G15",
    description: "15.6-inch gaming laptop with Intel Core i5 processor and NVIDIA RTX 3050 Ti graphics",
    price: 89999,
    originalPrice: 99999,
    category: "gaming-laptops",
    brand: "Dell",
    image: "https://images.unsplash.com/photo-1615750185825-fc85c6aba18d?q=80&w=500&auto=format&fit=crop",
    rating: 4.3,
    inStock: true,
    specifications: {
      processor: "Intel Core i5-12500H",
      ram: "8GB DDR4",
      storage: "512GB NVMe SSD",
      display: "15.6-inch FHD, 120Hz",
      graphics: "NVIDIA GeForce RTX 3050 Ti 4GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming laptop", "budget", "Dell"],
    createdAt: "2023-02-15T00:00:00Z"
  },

  // Gaming PCs
  {
    id: "pc-1",
    name: "ASUS ROG Strix G35CZ",
    description: "Gaming desktop with Intel Core i9 processor and NVIDIA RTX 4090 graphics",
    price: 399999,
    originalPrice: 429999,
    category: "gaming-pcs",
    brand: "ASUS ROG",
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Intel Core i9-13900K",
      ram: "64GB DDR5",
      storage: "4TB NVMe SSD",
      cooling: "Liquid cooling",
      graphics: "NVIDIA GeForce RTX 4090 24GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming pc", "high-performance", "ASUS"],
    createdAt: "2023-02-20T00:00:00Z"
  },
  {
    id: "pc-2",
    name: "Alienware Aurora R15",
    description: "Gaming desktop with Intel Core i9 processor and NVIDIA RTX 4080 graphics",
    price: 329999,
    originalPrice: 349999,
    category: "gaming-pcs",
    brand: "Alienware",
    image: "https://images.unsplash.com/photo-1602837385569-08ac19ec83af?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Intel Core i9-13900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD",
      cooling: "Liquid cooling",
      graphics: "NVIDIA GeForce RTX 4080 16GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming pc", "high-performance", "Alienware"],
    createdAt: "2023-02-25T00:00:00Z"
  },
  {
    id: "pc-3",
    name: "MSI Aegis RS",
    description: "Gaming desktop with Intel Core i7 processor and NVIDIA RTX 4070 Ti graphics",
    price: 249999,
    originalPrice: 279999,
    category: "gaming-pcs",
    brand: "MSI",
    image: "https://images.unsplash.com/photo-1644337283224-fcabb7050733?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      processor: "Intel Core i7-13700K",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      cooling: "Air cooling",
      graphics: "NVIDIA GeForce RTX 4070 Ti 12GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming pc", "high-performance", "MSI"],
    createdAt: "2023-03-01T00:00:00Z"
  },
  {
    id: "pc-4",
    name: "Acer Predator Orion 5000",
    description: "Gaming desktop with Intel Core i7 processor and NVIDIA RTX 3080 graphics",
    price: 199999,
    originalPrice: 219999,
    category: "gaming-pcs",
    brand: "Acer Predator",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    specifications: {
      processor: "Intel Core i7-12700K",
      ram: "32GB DDR4",
      storage: "1TB NVMe SSD + 2TB HDD",
      cooling: "Air cooling",
      graphics: "NVIDIA GeForce RTX 3080 10GB",
      os: "Windows 11 Home"
    },
    tags: ["gaming pc", "high-performance", "Acer"],
    createdAt: "2023-03-05T00:00:00Z"
  },
  {
    id: "pc-5",
    name: "NZXT H7 Flow Custom Build",
    description: "Custom gaming PC with AMD Ryzen 9 processor and NVIDIA RTX 4070 graphics",
    price: 219999,
    originalPrice: 239999,
    category: "gaming-pcs",
    brand: "Custom",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    specifications: {
      processor: "AMD Ryzen 9 7900X",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      cooling: "AIO Liquid cooling",
      graphics: "NVIDIA GeForce RTX 4070 12GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming pc", "custom build", "NZXT"],
    createdAt: "2023-03-10T00:00:00Z"
  },
  {
    id: "pc-6",
    name: "Corsair Vengeance i7400",
    description: "Gaming desktop with Intel Core i7 processor and NVIDIA RTX 4080 graphics",
    price: 299999,
    originalPrice: 319999,
    category: "gaming-pcs",
    brand: "Corsair",
    image: "https://images.unsplash.com/photo-1624705084902-1e57b3f76b20?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: false,
    specifications: {
      processor: "Intel Core i7-13700K",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      cooling: "Corsair H150i Elite Liquid cooling",
      graphics: "NVIDIA GeForce RTX 4080 16GB",
      os: "Windows 11 Pro"
    },
    tags: ["gaming pc", "high-performance", "Corsair"],
    createdAt: "2023-03-15T00:00:00Z"
  },

  // Smartphones
  {
    id: "phone-1",
    name: "ASUS ROG Phone 7 Ultimate",
    description: "Gaming smartphone with Snapdragon 8 Gen 2 processor and 165Hz AMOLED display",
    price: 109999,
    originalPrice: 119999,
    category: "smartphones",
    brand: "ASUS ROG",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Snapdragon 8 Gen 2",
      ram: "16GB LPDDR5X",
      storage: "512GB UFS 4.0",
      display: "6.78-inch AMOLED, 165Hz",
      battery: "6000mAh",
      camera: "50MP main + 13MP ultrawide + 5MP macro"
    },
    tags: ["gaming phone", "high-performance", "ASUS"],
    createdAt: "2023-04-01T00:00:00Z"
  },
  {
    id: "phone-2",
    name: "Samsung Galaxy S23 Ultra",
    description: "Flagship smartphone with Snapdragon 8 Gen 2 processor and 120Hz Dynamic AMOLED display",
    price: 124999,
    originalPrice: 134999,
    category: "smartphones",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB LPDDR5X",
      storage: "512GB UFS 4.0",
      display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
      battery: "5000mAh",
      camera: "200MP main + 12MP ultrawide + 10MP telephoto + 10MP periscope"
    },
    tags: ["flagship", "high-performance", "Samsung"],
    createdAt: "2023-04-05T00:00:00Z"
  },
  {
    id: "phone-3",
    name: "iPhone 15 Pro Max",
    description: "Apple flagship smartphone with A17 Pro chip and ProMotion display",
    price: 149999,
    originalPrice: 159999,
    category: "smartphones",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    specifications: {
      processor: "A17 Pro",
      ram: "8GB",
      storage: "512GB",
      display: "6.7-inch Super Retina XDR, 120Hz ProMotion",
      battery: "4441mAh",
      camera: "48MP main + 12MP ultrawide + 12MP telephoto"
    },
    tags: ["flagship", "high-performance", "Apple"],
    createdAt: "2023-04-10T00:00:00Z"
  },
  {
    id: "phone-4",
    name: "OnePlus 11",
    description: "Flagship smartphone with Snapdragon 8 Gen 2 processor and 120Hz AMOLED display",
    price: 69999,
    originalPrice: 79999,
    category: "smartphones",
    brand: "OnePlus",
    image: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      processor: "Snapdragon 8 Gen 2",
      ram: "16GB LPDDR5X",
      storage: "256GB UFS 4.0",
      display: "6.7-inch AMOLED, 120Hz",
      battery: "5000mAh",
      camera: "50MP main + 48MP ultrawide + 32MP portrait"
    },
    tags: ["flagship", "high-performance", "OnePlus"],
    createdAt: "2023-04-15T00:00:00Z"
  },
  {
    id: "phone-5",
    name: "Black Shark 5 Pro",
    description: "Gaming smartphone with Snapdragon 8 Gen 1 processor and 144Hz AMOLED display",
    price: 59999,
    originalPrice: 69999,
    category: "smartphones",
    brand: "Black Shark",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    specifications: {
      processor: "Snapdragon 8 Gen 1",
      ram: "12GB LPDDR5",
      storage: "256GB UFS 3.1",
      display: "6.67-inch AMOLED, 144Hz",
      battery: "4650mAh",
      camera: "108MP main + 13MP ultrawide + 5MP macro"
    },
    tags: ["gaming phone", "high-performance", "Black Shark"],
    createdAt: "2023-04-20T00:00:00Z"
  },

  // Headphones
  {
    id: "headphone-1",
    name: "SteelSeries Arctis Pro Wireless",
    description: "Premium wireless gaming headset with lossless audio and dual-battery system",
    price: 34999,
    originalPrice: 36999,
    category: "headphones",
    brand: "SteelSeries",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    featured: true,
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz Wireless + Bluetooth",
      batteryLife: "20+ hours (swappable batteries)",
      noiseIsolation: true,
      microphone: "ClearCast bidirectional",
      compatibility: "PC, PS5, PS4, Mobile"
    },
    tags: ["gaming headset", "wireless", "SteelSeries"],
    createdAt: "2023-05-01T00:00:00Z"
  },
  {
    id: "headphone-2",
    name: "Razer BlackShark V2 Pro",
    description: "Wireless gaming headset with TriForce Titanium drivers and HyperClear microphone",
    price: 19999,
    originalPrice: 21999,
    category: "headphones",
    brand: "Razer",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    featured: true,
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz Wireless",
      batteryLife: "24 hours",
      noiseIsolation: true,
      microphone: "HyperClear Supercardioid",
      compatibility: "PC, PS5, PS4, Switch, Mobile"
    },
    tags: ["gaming headset", "wireless", "Razer"],
    createdAt: "2023-05-05T00:00:00Z"
  },
  {
    id: "headphone-3",
    name: "HyperX Cloud Alpha Wireless",
    description: "Wireless gaming headset with DTS Headphone:X and up to 300 hours of battery life",
    price: 18999,
    originalPrice: 19999,
    category: "headphones",
    brand: "HyperX",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz Wireless",
      batteryLife: "300 hours",
      noiseIsolation: true,
      microphone: "Detachable noise-cancelling",
      compatibility: "PC, PS5, PS4"
    },
    tags: ["gaming headset", "wireless", "HyperX"],
    createdAt: "2023-05-10T00:00:00Z"
  },
  {
    id: "headphone-4",
    name: "Logitech G Pro X Wireless",
    description: "Professional wireless gaming headset with Blue VO!CE microphone technology",
    price: 19999,
    originalPrice: 22999,
    category: "headphones",
    brand: "Logitech G",
    image: "https://images.unsplash.com/photo-1606143712352-8210e023a234?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz Wireless",
      batteryLife: "20 hours",
      noiseIsolation: true,
      microphone: "Blue VO!CE detachable",
      compatibility: "PC, PS5, PS4"
    },
    tags: ["gaming headset", "wireless", "Logitech"],
    createdAt: "2023-05-15T00:00:00Z"
  },
  {
    id: "headphone-5",
    name: "ASUS ROG Delta S",
    description: "Gaming headset with quad DAC technology and AI noise-cancelling microphone",
    price: 17999,
    originalPrice: 19999,
    category: "headphones",
    brand: "ASUS ROG",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    specifications: {
      type: "Over-ear",
      connectivity: "Wired (USB-C)",
      batteryLife: "N/A",
      noiseIsolation: true,
      microphone: "AI noise-cancelling",
      compatibility: "PC, PS5, PS4, Switch, Mobile"
    },
    tags: ["gaming headset", "wired", "ASUS"],
    createdAt: "2023-05-20T00:00:00Z"
  },
  {
    id: "headphone-6",
    name: "Corsair Virtuoso RGB Wireless XT",
    description: "Premium gaming headset with Dolby Atmos and simultaneous dual-wireless connectivity",
    price: 24999,
    originalPrice: 27999,
    category: "headphones",
    brand: "Corsair",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: false,
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz Wireless + Bluetooth",
      batteryLife: "15 hours",
      noiseIsolation: true,
      microphone: "Broadcast-grade detachable",
      compatibility: "PC, PS5, PS4, Switch, Mobile"
    },
    tags: ["gaming headset", "wireless", "Corsair"],
    createdAt: "2023-05-25T00:00:00Z"
  },

  // Earbuds
  {
    id: "earbud-1",
    name: "Razer Hammerhead True Wireless Pro",
    description: "Gaming earbuds with active noise cancellation and low-latency connection",
    price: 14999,
    originalPrice: 17999,
    category: "earbuds",
    brand: "Razer",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=500&auto=format&fit=crop",
    rating: 4.5,
    inStock: true,
    featured: true,
    specifications: {
      type: "In-ear",
      connectivity: "Bluetooth 5.1",
      batteryLife: "20 hours (with case)",
      noiseIsolation: "Active Noise Cancellation",
      waterResistant: "IPX4",
      compatibility: "Mobile, PC, Consoles"
    },
    tags: ["gaming earbuds", "wireless", "Razer"],
    createdAt: "2023-06-01T00:00:00Z"
  },
  {
    id: "earbud-2",
    name: "Logitech G Fits",
    description: "True wireless gaming earbuds with custom-molding Lightform technology",
    price: 19999,
    originalPrice: 22999,
    category: "earbuds",
    brand: "Logitech G",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    featured: true,
    specifications: {
      type: "In-ear (custom molding)",
      connectivity: "2.4GHz Wireless + Bluetooth",
      batteryLife: "15 hours (with case)",
      noiseIsolation: "Passive (custom fit)",
      waterResistant: "IPX4",
      compatibility: "PC, Mobile, PS5, Switch"
    },
    tags: ["gaming earbuds", "wireless", "Logitech"],
    createdAt: "2023-06-05T00:00:00Z"
  },
  {
    id: "earbud-3",
    name: "JBL Quantum TWS",
    description: "True wireless gaming earbuds with adaptive noise cancellation and ambient aware",
    price: 9999,
    originalPrice: 12999,
    category: "earbuds",
    brand: "JBL",
    image: "https://images.unsplash.com/photo-1631176260017-9aca4728744b?q=80&w=500&auto=format&fit=crop",
    rating: 4.3,
    inStock: true,
    specifications: {
      type: "In-ear",
      connectivity: "2.4GHz Wireless + Bluetooth",
      batteryLife: "24 hours (with case)",
      noiseIsolation: "Adaptive Noise Cancellation",
      waterResistant: "IPX5",
      compatibility: "PC, Mobile, PS5, Switch"
    },
    tags: ["gaming earbuds", "wireless", "JBL"],
    createdAt: "2023-06-10T00:00:00Z"
  },
  {
    id: "earbud-4",
    name: "Sony WF-1000XM5",
    description: "Premium earbuds with industry-leading noise cancellation and high-resolution audio",
    price: 24999,
    originalPrice: 27999,
    category: "earbuds",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    specifications: {
      type: "In-ear",
      connectivity: "Bluetooth 5.3",
      batteryLife: "30 hours (with case)",
      noiseIsolation: "Adaptive Noise Cancellation",
      waterResistant: "IPX4",
      compatibility: "Mobile, PC"
    },
    tags: ["premium earbuds", "wireless", "Sony"],
    createdAt: "2023-06-15T00:00:00Z"
  },
  {
    id: "earbud-5",
    name: "Samsung Galaxy Buds2 Pro",
    description: "Premium earbuds with intelligent active noise cancellation and 3D audio",
    price: 17999,
    originalPrice: 19999,
    category: "earbuds",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1606741965509-717b9be07abb?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      type: "In-ear",
      connectivity: "Bluetooth 5.3",
      batteryLife: "29 hours (with case)",
      noiseIsolation: "Intelligent ANC",
      waterResistant: "IPX7",
      compatibility: "Mobile, PC"
    },
    tags: ["premium earbuds", "wireless", "Samsung"],
    createdAt: "2023-06-20T00:00:00Z"
  },

  // Accessories (additional products to reach 40 total)
  {
    id: "acc-1",
    name: "Logitech G Pro X Superlight",
    description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor",
    price: 12999,
    originalPrice: 14999,
    category: "accessories",
    brand: "Logitech G",
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    featured: true,
    specifications: {
      connectivity: "LIGHTSPEED Wireless",
      weight: "63g",
      sensor: "HERO 25K",
      batteryLife: "70 hours",
      buttons: "5 programmable",
      compatibility: "PC, Mac"
    },
    tags: ["gaming mouse", "wireless", "Logitech"],
    createdAt: "2023-06-25T00:00:00Z"
  },
  {
    id: "acc-2",
    name: "Razer BlackWidow V4 Pro",
    description: "Mechanical gaming keyboard with customizable dial and 8 dedicated macro keys",
    price: 14999,
    originalPrice: 17999,
    category: "accessories",
    brand: "Razer",
    image: "https://images.unsplash.com/photo-1617130584363-a3f785d56f39?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    featured: true,
    specifications: {
      type: "Mechanical",
      switches: "Razer Green",
      backlighting: "RGB per-key",
      extraFeatures: "Multi-function dial, 8 macro keys",
      wristRest: "Detachable plush leatherette",
      compatibility: "PC"
    },
    tags: ["gaming keyboard", "mechanical", "Razer"],
    createdAt: "2023-07-01T00:00:00Z"
  },
  {
    id: "acc-3",
    name: "SteelSeries QcK Prism XL RGB",
    description: "RGB gaming mousepad with 2-zone illumination and micro-woven cloth surface",
    price: 4999,
    originalPrice: 5999,
    category: "accessories",
    brand: "SteelSeries",
    image: "https://images.unsplash.com/photo-1611850697020-49a9f495adb3?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    inStock: true,
    specifications: {
      size: "900mm x 300mm x 4mm",
      surface: "Micro-woven cloth",
      base: "Non-slip rubber",
      lighting: "2-zone RGB",
      compatibility: "PC"
    },
    tags: ["mousepad", "RGB", "SteelSeries"],
    createdAt: "2023-07-05T00:00:00Z"
  },
  {
    id: "acc-4",
    name: "ASUS ROG Strix XG27UQ",
    description: "27-inch 4K gaming monitor with 144Hz refresh rate and NVIDIA G-SYNC",
    price: 69999,
    originalPrice: 79999,
    category: "accessories",
    brand: "ASUS ROG",
    image: "https://images.unsplash.com/photo-1567459169668-95d355371bda?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    specifications: {
      size: "27 inch",
      resolution: "4K UHD (3840 x 2160)",
      refreshRate: "144Hz",
      panelType: "IPS",
      responseTime: "1ms GTG",
      connectivity: "DisplayPort 1.4, HDMI 2.0"
    },
    tags: ["gaming monitor", "4K", "ASUS"],
    createdAt: "2023-07-10T00:00:00Z"
  },
  {
    id: "acc-5",
    name: "HyperX Cloud Flight S Charger",
    description: "Qi wireless charging pad designed for HyperX gaming peripherals",
    price: 3999,
    originalPrice: 4999,
    category: "accessories",
    brand: "HyperX",
    image: "https://images.unsplash.com/photo-1609692495550-a6096c2a5314?q=80&w=500&auto=format&fit=crop",
    rating: 4.5,
    inStock: true,
    specifications: {
      type: "Qi Wireless Charger",
      power: "10W fast charging",
      compatibility: "HyperX Qi-enabled devices",
      indicators: "LED charging indicator",
      cableMaterial: "Braided USB-C"
    },
    tags: ["wireless charger", "accessory", "HyperX"],
    createdAt: "2023-07-15T00:00:00Z"
  },
  {
    id: "acc-6",
    name: "NVIDIA Shield TV Pro",
    description: "4K HDR streaming media player with AI upscaling and gaming capabilities",
    price: 19999,
    originalPrice: 21999,
    category: "accessories",
    brand: "NVIDIA",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    specifications: {
      processor: "NVIDIA Tegra X1+",
      storage: "16GB",
      connectivity: "Wi-Fi 6, Bluetooth 5.0, Gigabit Ethernet",
      video: "4K HDR streaming, AI upscaling",
      gaming: "GeForce NOW cloud gaming",
      os: "Android TV"
    },
    tags: ["streaming device", "media player", "NVIDIA"],
    createdAt: "2023-07-20T00:00:00Z"
  },
  {
    id: "acc-7",
    name: "APC Back-UPS Pro Gaming UPS",
    description: "Uninterruptible power supply with sine wave output and RGB lighting",
    price: 24999,
    originalPrice: 29999,
    category: "accessories",
    brand: "APC",
    image: "https://images.unsplash.com/photo-1614968889732-0a3902d4d5fa?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      power: "1500VA/900W",
      outputWaveform: "Pure Sine Wave",
      outlets: "10 total (6 battery backup)",
      runtime: "Up to 15 minutes at full load",
      features: "RGB lighting, LCD display",
      connectivity: "USB, RJ45"
    },
    tags: ["power backup", "UPS", "APC"],
    createdAt: "2023-07-25T00:00:00Z"
  },
  {
    id: "acc-8",
    name: "NZXT Kraken Z73 RGB",
    description: "360mm AIO liquid CPU cooler with customizable LCD display",
    price: 29999,
    originalPrice: 34999,
    category: "accessories",
    brand: "NZXT",
    image: "https://images.unsplash.com/photo-1601548770588-86641cc36637?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    inStock: false,
    specifications: {
      radiatorSize: "360mm",
      fans: "3x 120mm Aer RGB",
      display: "2.36\" LCD screen",
      compatibility: "Intel and AMD sockets",
      pumpSpeed: "800-2,800 RPM",
      lighting: "RGB"
    },
    tags: ["CPU cooler", "liquid cooling", "NZXT"],
    createdAt: "2023-08-01T00:00:00Z"
  },
  {
    id: "acc-9",
    name: "Elgato Stream Deck MK.2",
    description: "Customizable LCD key controller for content creation and streaming",
    price: 14999,
    originalPrice: 17999,
    category: "accessories",
    brand: "Elgato",
    image: "https://images.unsplash.com/photo-1623520356485-0608949a2266?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    inStock: true,
    specifications: {
      keys: "15 customizable LCD keys",
      integration: "OBS, Twitch, YouTube, etc.",
      customization: "Interchangeable faceplates",
      connectivity: "USB-C",
      software: "Stream Deck software",
      compatibility: "Windows 10, macOS 10.13+"
    },
    tags: ["streaming", "content creation", "Elgato"],
    createdAt: "2023-08-05T00:00:00Z"
  },
  {
    id: "acc-10",
    name: "SteelSeries Arctis Nova Pro Wireless DAC",
    description: "Premium DAC and base station for SteelSeries Arctis Nova Pro Wireless headset",
    price: 9999,
    originalPrice: 12999,
    category: "accessories",
    brand: "SteelSeries",
    image: "https://images.unsplash.com/photo-1631175507116-c27fb559b96c?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    specifications: {
      type: "DAC/Base Station",
      connectivity: "USB, Optical, 3.5mm",
      features: "Hot-swappable battery system, OLED display",
      audioProcessing: "96kHz/24-bit",
      compatibility: "PC, PlayStation, Mobile",
      extraFeatures: "Dual audio mixing"
    },
    tags: ["audio", "accessory", "SteelSeries"],
    createdAt: "2023-08-10T00:00:00Z"
  }
];
