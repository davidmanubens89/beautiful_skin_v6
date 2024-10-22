import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  isFromAssessment: boolean;
  recommendedProducts: any[];
  recommendedSelectedProducts: string[];
  standardRoutineProducts: any[];
  selectedProducts: string[];
  onAddToRoutine: (productName: string) => void;
  onGenerateRoutine: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  isFromAssessment,
  recommendedProducts,
  recommendedSelectedProducts,
  standardRoutineProducts,
  selectedProducts,
  onAddToRoutine,
  onGenerateRoutine
}) => (
  <div className="mb-12">
    {isFromAssessment ? (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Recommended and Selected Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProducts
            .filter(product => recommendedSelectedProducts.includes(product.name))
            .map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                hideRecommendation={true} 
                buttonText="Buy in Store"
                isSelected={true}
                onAddToRoutine={() => onAddToRoutine(product.name)}
              />
            ))
          }
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Standard Routine Suggested Products</h2>
          <div className="flex items-center">
            <p className="text-sm text-gray-600 mr-4">Select the products you want to include in your routine and click "Generate Routine" button.</p>
            <button
              onClick={onGenerateRoutine}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Generate Routine
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardRoutineProducts.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              hideRecommendation={true} 
              buttonText="Buy in Store"
              isSelected={selectedProducts.includes(product.name)}
              onAddToRoutine={() => onAddToRoutine(product.name)}
            />
          ))}
        </div>
      </>
    )}
  </div>
);

export default ProductList;