import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';

interface StoreProductCardProps {
  product: {
    name: string;
    image: string;
    brand: string;
    price: number;
    originalPrice?: number;
  };
}

const StoreProductCard: React.FC<StoreProductCardProps> = ({ product }) => {
  const { addToWishlist } = useWishlist();

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">{product.price.toFixed(2)}€</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.originalPrice.toFixed(2)}€
              </span>
            )}
          </div>
          <button
            onClick={() => addToWishlist(product.name)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreProductCard;