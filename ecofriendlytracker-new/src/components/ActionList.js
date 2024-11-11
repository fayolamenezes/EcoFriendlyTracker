import React from 'react';
import './ActionList.css';

const predefinedActions = [
  { name: 'Recycle Waste', carbonReduction: 0.2 },
  { name: 'Walk or Bike', carbonReduction: 0.5 },
  { name: 'Use Reusable Bags', carbonReduction: 0.1 },
  { name: 'Turn off Lights', carbonReduction: 0.3 },
  { name: 'Plant Trees', carbonReduction: 1 },
];

function ActionList({ onAddAction }) {
  return (
    <div className="action-list">
      <h2>Choose Eco-Friendly Actions</h2>
      <ul>
        {predefinedActions.map((action, index) => (
          <li key={index} className="action-item">
            <span>{action.name} (CO2 Reduction: {action.carbonReduction} kg)</span>
            <button onClick={() => onAddAction({ ...action, count: 1 })}>
              Add Action
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionList;
