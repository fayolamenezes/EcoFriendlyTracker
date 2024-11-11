import React from 'react';

const ImpactSummary = ({ totalCO2Reduction, actions, handleClearActions }) => {
  // Calculate trees saved (1 tree = 10 kg CO2)
  const treesSaved = Math.floor(totalCO2Reduction / 10);
  
  // Determine the color for the message based on CO2 saved
  const getImpactColor = (totalCO2) => {
    if (totalCO2 < 0.5) return 'red';
    if (totalCO2 >= 0.5 && totalCO2 < 1) return 'orange';
    return 'green';
  };

  return (
    <div className="impact-summary">
      <h3>Impact Summary</h3>
      <p>Total CO2 Reduction: {totalCO2Reduction} kg</p>
      <p
        style={{
          color: getImpactColor(totalCO2Reduction),
          fontWeight: 'bold',
        }}
      >
        You've saved the equivalent of {treesSaved} tree{treesSaved !== 1 ? 's' : ''} planted!
      </p>
      <button onClick={handleClearActions}>Clear All Actions</button>

      <h4>Tracked Actions Breakdown:</h4>
      {actions.map((action, index) => (
        <p key={index}>
          {action.name} (x{action.count}): {action.totalCO2Reduction * action.count} kg CO2 reduced
        </p>
      ))}
    </div>
  );
};

export default ImpactSummary;
