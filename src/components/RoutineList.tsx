import React from 'react';

interface RoutineListProps {
  routine: Array<{
    id: number;
    step: string;
    product: string;
    time: string;
  }>;
  icon: React.ReactNode;
  title: string;
}

const RoutineList: React.FC<RoutineListProps> = ({ routine, icon, title }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <ul className="space-y-4">
      {routine.map((item) => (
        <li key={item.id} className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-800 font-semibold mr-4">
            {item.id}
          </span>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{item.step}</h3>
            <p className="text-gray-600">{item.product}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RoutineList;