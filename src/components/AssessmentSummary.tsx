import React from 'react';

interface AssessmentSummaryProps {
  answers: Record<string, string>;
}

const AssessmentSummary: React.FC<AssessmentSummaryProps> = ({ answers }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-12">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assessment Answers</h2>
    <ul className="space-y-2">
      {Object.entries(answers).map(([key, value]) => (
        <li key={key} className="text-gray-700">
          <span className="font-medium">{key}:</span> {value}
        </li>
      ))}
    </ul>
  </div>
);

export default AssessmentSummary;