import React from 'react';
import { Layers, Clock, Droplet, Repeat } from 'lucide-react';
import TipCard from './TipCard';

const routineTips = [
  { icon: Layers, title: "Layer Products", description: "Apply products from thinnest to thickest consistency." },
  { icon: Clock, title: "Timing Matters", description: "Wait about 1 minute between each step for better absorption." },
  { icon: Droplet, title: "Patch Test", description: "Always patch test new products before adding them to your routine." },
  { icon: Repeat, title: "Consistency is Key", description: "Stick to your routine for best results!" }
];

const RoutineTips: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Daily Routine Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {routineTips.map((tip, index) => (
        <TipCard key={index} icon={tip.icon} title={tip.title} description={tip.description} />
      ))}
    </div>
  </div>
);

export default RoutineTips;