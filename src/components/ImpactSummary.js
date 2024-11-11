import React from 'react';

const ImpactSummary = ({ totalCO2Reduction, actions, handleClearActions }) => {
  return (
    <div className="impact-summary">
      <h3>Impact Summary</h3>
      <p>Total CO2 Reduction: {totalCO2Reduction} kg</p>
      <button onClick={handleClearActions}>Clear All Actions</button>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>
            {action.name} (x{action.count}) - {action.totalCO2Reduction} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactSummary;
