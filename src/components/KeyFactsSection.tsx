import React from 'react';
import { Fingerprint, Target, Beaker, Sparkles } from 'lucide-react';

interface KeyFactsSectionProps {
  category: string;
}

const KeyFactsSection: React.FC<KeyFactsSectionProps> = ({ category }) => {
  const keyFacts = {
    Cleansers: [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Gentle Formulation", description: "Look for pH-balanced cleansers that don't strip natural oils." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Skin Type Specific", description: "Choose cleansers formulated for your specific skin type." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Key Ingredients", description: "Consider ingredients like salicylic acid for oily skin or ceramides for dry skin." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Cleansing Efficiency", description: "Ensure it effectively removes dirt, oil, and makeup without harsh scrubbing." }
    ],
    Moisturizers: [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Hydration Level", description: "Choose between light lotions, creams, or heavy ointments based on your skin's needs." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Skin Concerns", description: "Look for ingredients that address specific issues like anti-aging or acne." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Key Ingredients", description: "Hyaluronic acid, glycerin, and ceramides are excellent for hydration." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Non-comedogenic", description: "Ensure the product won't clog pores, especially for acne-prone skin." }
    ],
    Serums: [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Concentrated Formula", description: "Serums contain higher concentrations of active ingredients." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Targeted Treatment", description: "Choose based on specific skin concerns like brightening or anti-aging." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Key Ingredients", description: "Look for vitamin C, retinol, niacinamide, or hyaluronic acid." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Layering", description: "Apply serums before moisturizer for maximum absorption." }
    ],
    Sunscreens: [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Broad Spectrum", description: "Ensure protection against both UVA and UVB rays." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "SPF Level", description: "Choose at least SPF 30 for daily use, higher for extended sun exposure." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Formula Type", description: "Consider chemical vs. physical sunscreens based on skin sensitivity." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Water Resistance", description: "Important for activities involving water or sweating." }
    ],
    Exfoliators: [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Exfoliation Type", description: "Choose between physical (scrubs) or chemical (AHAs/BHAs) exfoliants." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Frequency", description: "Determine how often to exfoliate based on skin type and product strength." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Key Ingredients", description: "Look for glycolic acid, lactic acid, or salicylic acid in chemical exfoliants." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Gentleness", description: "Avoid harsh scrubs that can damage skin barrier." }
    ],
    "Night Creams": [
      { icon: <Fingerprint className="w-8 h-8 text-indigo-600" />, title: "Rich Texture", description: "Night creams are typically thicker for intense overnight hydration." },
      { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Reparative Ingredients", description: "Look for ingredients that support skin repair and regeneration." },
      { icon: <Beaker className="w-8 h-8 text-indigo-600" />, title: "Key Ingredients", description: "Retinol, peptides, and antioxidants are common in night creams." },
      { icon: <Sparkles className="w-8 h-8 text-indigo-600" />, title: "Skin Type Consideration", description: "Choose formulations suitable for your skin type to avoid congestion." }
    ]
  };

  const facts = keyFacts[category as keyof typeof keyFacts] || [];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Facts: {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              {fact.icon}
              <h3 className="text-lg font-semibold text-gray-900 ml-3">{fact.title}</h3>
            </div>
            <p className="text-gray-600">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFactsSection;