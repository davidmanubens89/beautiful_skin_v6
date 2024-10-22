import React from 'react';
import { Slider } from './Slider';

interface StoreFiltersProps {
  filters: {
    brand: string[];
    priceRange: [number, number];
    skinType: string[];
    concerns: string[];
  };
  onFilterChange: (filters: any) => void;
}

const StoreFilters: React.FC<StoreFiltersProps> = ({ filters, onFilterChange }) => {
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedBrands = checked
      ? [...filters.brand, value]
      : filters.brand.filter(brand => brand !== value);
    onFilterChange({ ...filters, brand: updatedBrands });
  };

  const handlePriceChange = (value: [number, number]) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  const handleSkinTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedSkinTypes = checked
      ? [...filters.skinType, value]
      : filters.skinType.filter(type => type !== value);
    onFilterChange({ ...filters, skinType: updatedSkinTypes });
  };

  const handleConcernChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedConcerns = checked
      ? [...filters.concerns, value]
      : filters.concerns.filter(concern => concern !== value);
    onFilterChange({ ...filters, concerns: updatedConcerns });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Brand</h4>
        {['SkinScience', 'NaturalGlow', 'DermaFix', 'PureBeauty'].map(brand => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`brand-${brand}`}
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleBrandChange}
              className="mr-2"
            />
            <label htmlFor={`brand-${brand}`}>{brand}</label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
        <Slider
          min={0}
          max={100}
          step={1}
          value={filters.priceRange}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Skin Type</h4>
        {['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'].map(type => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`skin-${type}`}
              value={type}
              checked={filters.skinType.includes(type)}
              onChange={handleSkinTypeChange}
              className="mr-2"
            />
            <label htmlFor={`skin-${type}`}>{type}</label>
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-medium text-gray-700 mb-2">Concerns</h4>
        {['Acne', 'Aging', 'Dullness', 'Uneven Texture', 'Dark Spots'].map(concern => (
          <div key={concern} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`concern-${concern}`}
              value={concern}
              checked={filters.concerns.includes(concern)}
              onChange={handleConcernChange}
              className="mr-2"
            />
            <label htmlFor={`concern-${concern}`}>{concern}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreFilters;