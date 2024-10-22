import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentCTA: React.FC = () => (
  <div className="relative mb-12 h-64 rounded-lg overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      alt="Skin care"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-white mb-2 px-4">
        Get Your Personalized Skincare Routine
      </h2>
      <p className="text-xl italic text-white mb-4 px-4">
        Because no two skins are alike, your skin deserves a personalized assessment
      </p>
      <Link
        to="/skin-assessment"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Start Skin Assessment
      </Link>
    </div>
  </div>
);

export default AssessmentCTA;