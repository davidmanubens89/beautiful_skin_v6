import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useSkinAssessment } from '../contexts/SkinAssessmentContext';
import RoutineTips from '../components/RoutineTips';
import AssessmentSummary from '../components/AssessmentSummary';
import AssessmentCTA from '../components/AssessmentCTA';
import ProductList from '../components/ProductList';
import RoutineList from '../components/RoutineList';

export const DailyRoutine: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showRoutines, setShowRoutines] = useState(false);
  const { recommendedProducts, selectedProducts: recommendedSelectedProducts, answers } = useSkinAssessment();
  const location = useLocation();
  const [isFromAssessment, setIsFromAssessment] = useState(false);

  useEffect(() => {
    setIsFromAssessment(location.state?.fromAssessment || false);
    if (location.state?.fromAssessment) {
      setSelectedProducts(recommendedSelectedProducts);
      setShowRoutines(true);
    }
  }, [location, recommendedSelectedProducts]);

  const handleAddToRoutine = (productName: string) => {
    setSelectedProducts(prevSelected => 
      prevSelected.includes(productName)
        ? prevSelected.filter(name => name !== productName)
        : [...prevSelected, productName]
    );
  };

  const handleGenerateRoutine = () => {
    setShowRoutines(true);
  };

  const generateRoutine = (products: string[]) => {
    const morningProducts = products.slice(0, Math.ceil(products.length / 2));
    const eveningProducts = products.slice(Math.ceil(products.length / 2));

    return {
      morning: morningProducts.map((product, index) => ({
        id: index + 1,
        step: `Step ${index + 1}`,
        product: product,
        time: "1-2 minutes"
      })),
      evening: eveningProducts.map((product, index) => ({
        id: index + 1,
        step: `Step ${index + 1}`,
        product: product,
        time: "1-2 minutes"
      }))
    };
  };

  const routines = generateRoutine(selectedProducts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Daily Skincare Routine</h1>
      
      <RoutineTips />

      {isFromAssessment ? (
        <AssessmentSummary answers={answers} />
      ) : (
        <AssessmentCTA />
      )}
      
      <ProductList
        isFromAssessment={isFromAssessment}
        recommendedProducts={recommendedProducts}
        recommendedSelectedProducts={recommendedSelectedProducts}
        standardRoutineProducts={standardRoutineProducts}
        selectedProducts={selectedProducts}
        onAddToRoutine={handleAddToRoutine}
        onGenerateRoutine={handleGenerateRoutine}
      />
      
      {showRoutines && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Routines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoutineList routine={routines.morning} icon={<Sun className="w-6 h-6 text-yellow-500" />} title="Morning Routine" />
            <RoutineList routine={routines.evening} icon={<Moon className="w-6 h-6 text-indigo-500" />} title="Evening Routine" />
          </div>
        </>
      )}
    </div>
  );
};

const standardRoutineProducts = [
  {
    name: "Gentle Cleanser",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "A mild, soap-free cleanser suitable for all skin types.",
    benefits: "Removes impurities without stripping the skin's natural oils.",
    monthlyPrice: 20,
    importance: "High"
  },
  {
    name: "Hydrating Moisturizer",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "A lightweight, non-greasy moisturizer to keep skin hydrated.",
    benefits: "Improves skin hydration, softness, and overall appearance.",
    monthlyPrice: 25,
    importance: "High"
  },
  {
    name: "Broad Spectrum Sunscreen",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "A daily sunscreen with at least SPF 30 for sun protection.",
    benefits: "Protects against UV damage, prevents premature aging and skin cancer.",
    monthlyPrice: 30,
    importance: "High"
  }
];

export default DailyRoutine;