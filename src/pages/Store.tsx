import React, { useState } from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import StoreProductCard from '../components/StoreProductCard';
import KeyFactsSection from '../components/KeyFactsSection';
import StoreFilters from '../components/StoreFilters';

export const Store: React.FC = () => {
  const { wishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [0, 100],
    skinType: [],
    concerns: [],
  });

  const categories = [
    { name: 'Cleansers', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
    { name: 'Moisturizers', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
    { name: 'Serums', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
    { name: 'Sunscreens', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
    { name: 'Exfoliators', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
    { name: 'Night Creams', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  ];

  const products = [
    // Cleansers
    { id: 1, name: "Gentle Foaming Cleanser", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 24.99, category: "Cleansers" },
    { id: 2, name: "Hydrating Cream Cleanser", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 22.99, category: "Cleansers" },
    { id: 3, name: "Clarifying Gel Cleanser", brand: "DermaFix", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 19.99, category: "Cleansers" },
    
    // Moisturizers
    { id: 4, name: "Hydrating Moisturizer", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 29.99, category: "Moisturizers" },
    { id: 5, name: "Oil-Free Moisturizer", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 27.99, category: "Moisturizers" },
    { id: 6, name: "Rich Cream Moisturizer", brand: "PureBeauty", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 34.99, category: "Moisturizers" },
    
    // Serums
    { id: 7, name: "Vitamin C Serum", brand: "DermaFix", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 39.99, category: "Serums" },
    { id: 8, name: "Hyaluronic Acid Serum", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 36.99, category: "Serums" },
    { id: 9, name: "Niacinamide Serum", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 32.99, category: "Serums" },
    
    // Sunscreens
    { id: 10, name: "Broad Spectrum SPF 50", brand: "SunShield", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 19.99, category: "Sunscreens" },
    { id: 11, name: "Tinted Sunscreen SPF 30", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 24.99, category: "Sunscreens" },
    { id: 12, name: "Sport Sunscreen SPF 70", brand: "DermaFix", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 21.99, category: "Sunscreens" },
    
    // Exfoliators
    { id: 13, name: "AHA/BHA Exfoliating Toner", brand: "PureBeauty", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 34.99, category: "Exfoliators" },
    { id: 14, name: "Gentle Scrub Exfoliator", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 28.99, category: "Exfoliators" },
    { id: 15, name: "Enzyme Peel Exfoliator", brand: "DermaFix", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 39.99, category: "Exfoliators" },
    
    // Night Creams
    { id: 16, name: "Retinol Night Cream", brand: "AgelessSkin", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 49.99, category: "Night Creams" },
    { id: 17, name: "Hydrating Night Cream", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 39.99, category: "Night Creams" },
    { id: 18, name: "Repairing Night Cream", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 44.99, category: "Night Creams" },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const wishlistProducts = filteredProducts.filter(product => wishlist.includes(product.name));

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Apply filters to products (you'll need to implement this logic)
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Store</h1>
      
      {/* Categories section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skin Care Product Categories</h2>
        <div className="flex justify-between items-center">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`cursor-pointer text-center ${selectedCategory === category.name ? 'scale-110' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 mx-auto">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <p className={`text-sm ${selectedCategory === category.name ? 'font-semibold text-indigo-600' : 'text-gray-600'}`}>
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {selectedCategory && <KeyFactsSection category={selectedCategory} />}
      
      {/* Wishlist section */}
      {wishlistProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8">
          <StoreFilters filters={filters} onFilterChange={handleFilterChange} />
        </aside>
        
        <section className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory ? `${selectedCategory}` : 'All Products'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;