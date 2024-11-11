import React from 'react';
import './ImpactSummary.css';

const ImpactSummary = ({ actions, totalCO2, clearActions }) => {
  const impactColor = totalCO2 > 1 ? 'green' : totalCO2 > 0.5 ? 'orange' : 'red';

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      <p style={{ color: impactColor }}>
        You've saved the equivalent of {Math.floor(totalCO2 / 0.01)} trees planted!
      </p>
      <ul>
        {actions.map(action => (
          <li key={action.id}>
            {action.name}: {action.count} times, Total CO₂ Reduction: {action.co2Reduction * action.count} kg
          </li>
        ))}
      </ul>
      <p>Total CO₂ Reduction: {totalCO2} kg</p>
      <button onClick={clearActions}>Clear All</button>
    </div>
  );
};

export default ImpactSummary;
