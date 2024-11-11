import React from 'react';
import Action from './Action';

function ImpactSummary({ actions, onClearActions, onRemoveAction }) {
  const totalCarbonReduction = actions.reduce((total, action) => total + (action.carbonReduction * action.count), 0);
  const treesPlanted = totalCarbonReduction / 10;

  let impactColor = 'green';
  if (totalCarbonReduction < 0.5) impactColor = 'red';
  else if (totalCarbonReduction < 1) impactColor = 'orange';

  return (
    <div>
      <h2>Impact Summary</h2>
      <p>Total Carbon Reduction: {totalCarbonReduction.toFixed(2)} kg</p>
      <p style={{ color: impactColor }}>
        Equivalent to {treesPlanted.toFixed(0)} tree{treesPlanted !== 1 ? 's' : ''} planted!
      </p>
      {actions.length === 0 ? (
        <p>No actions tracked yet.</p>
      ) : (
        <div>
          <ul>
            {actions.map((action, index) => (
              <Action key={index} action={action} onRemove={() => onRemoveAction(index)} />
            ))}
          </ul>
          <button onClick={onClearActions}>Clear All Actions</button>
        </div>
      )}
    </div>
  );
}

export default ImpactSummary;
