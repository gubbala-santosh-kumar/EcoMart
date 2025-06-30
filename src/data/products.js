export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: 129.99,
    category: "Electronics",
    rating: 4.5,
    reviews: 142,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge - 5 minutes for 2 hours",
      "Premium comfort padding",
      "Built-in microphone",
      "Wireless & wired connectivity"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz", 
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack"
    },
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 299.99,
    category: "Wearables",
    rating: 4.7,
    reviews: 89,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Advanced fitness tracking watch with heart rate monitoring, GPS, and comprehensive health insights. Track your workouts and stay connected on the go.",
    features: [
      "GPS tracking",
      "Heart rate monitoring",
      "Sleep tracking",
      "Waterproof design",
      "Smart notifications",
      "7-day battery life"
    ],
    specifications: {
      "Display": "1.4-inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "50 meters",
      "Sensors": "Heart rate, GPS, Accelerometer",
      "Compatibility": "iOS & Android",
      "Storage": "4GB"
    },
    inStock: true,
    badge: "New"
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 999.99,
    category: "Photography",
    rating: 4.9,
    reviews: 67,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/162829/lens-camera-photography-equipment-162829.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Professional-grade camera lens with exceptional image quality, fast autofocus, and weather-sealed construction. Perfect for portrait and landscape photography.",
    features: [
      "f/1.4 maximum aperture",
      "Weather-sealed construction",
      "Ultra-fast autofocus",
      "Image stabilization",
      "Professional-grade optics",
      "Silent focusing motor"
    ],
    specifications: {
      "Focal Length": "85mm",
      "Maximum Aperture": "f/1.4",
      "Minimum Focus": "0.8m",
      "Filter Size": "77mm",
      "Weight": "950g",
      "Mount": "Canon EF/Nikon F"
    },
    inStock: true,
    badge: "Pro"
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 159.99,
    originalPrice: 199.99,
    category: "Gaming",
    rating: 4.6,
    reviews: 203,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "High-performance mechanical gaming keyboard with customizable RGB lighting, programmable keys, and premium tactile switches for the ultimate gaming experience.",
    features: [
      "Mechanical tactile switches",
      "RGB backlighting", 
      "Programmable keys",
      "Anti-ghosting technology",
      "Detachable cable",
      "Gaming mode"
    ],
    specifications: {
      "Switch Type": "Cherry MX Blue",
      "Key Layout": "Full-size (104 keys)",
      "Backlighting": "RGB",
      "Connection": "USB-C",
      "Dimensions": "440 × 135 × 35mm",
      "Weight": "1.2kg"
    },
    inStock: true,
    badge: "Gaming"
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    category: "Audio",
    rating: 4.4,
    reviews: 156,
    image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Compact and powerful Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures and home use.",
    features: [
      "360-degree sound",
      "Waterproof IPX7 rating",
      "12-hour battery life",
      "Voice assistant compatible",
      "Compact portable design",
      "Multiple device pairing"
    ],
    specifications: {
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Bluetooth Version": "5.0",
      "Water Resistance": "IPX7",
      "Dimensions": "180 × 65mm",
      "Weight": "600g"
    },
    inStock: true,
    badge: "Portable"
  },
  {
    id: 6,
    name: "Wireless Phone Charger",
    price: 39.99,
    originalPrice: 49.99,
    category: "Accessories",
    rating: 4.3,
    reviews: 94,
    image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Fast wireless charging pad with LED indicator, universal compatibility, and sleek design. Charge your devices effortlessly without cables.",
    features: [
      "Fast wireless charging",
      "Universal compatibility",
      "LED charging indicator",
      "Non-slip surface",
      "Overheat protection",
      "Case-friendly design"
    ],
    specifications: {
      "Charging Power": "15W fast charge",
      "Compatibility": "Qi-enabled devices",
      "Input": "USB-C",
      "Dimensions": "100 × 100 × 8mm",
      "Weight": "150g",
      "Certification": "Qi certified"
    },
    inStock: false,
    badge: "Eco-Friendly"
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};