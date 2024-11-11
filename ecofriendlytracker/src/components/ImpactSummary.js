import React from 'react';
import Action from './Action';

function ImpactSummary({ actions, onClearActions, onRemoveAction }) {
  // Calculate the total carbon reduction considering count of actions
  const totalCarbonReduction = actions.reduce((total, action) => total + (action.carbonReduction * action.count), 0);

  // Calculate the equivalent trees planted
  const treesPlanted = totalCarbonReduction / 10;

  // Determine the color based on the total carbon reduction
  let impactColor = 'green';
  if (totalCarbonReduction < 0.5) {
    impactColor = 'red';
  } else if (totalCarbonReduction < 1) {
    impactColor = 'orange';
  }

  return (
    <div>
      <h2>Impact Summary</h2>
      <p>Total Carbon Reduction: {isNaN(totalCarbonReduction) ? '0.00' : totalCarbonReduction.toFixed(2)} kg</p>
      <p style={{ color: impactColor }}>
        You've saved the equivalent of {isNaN(treesPlanted) ? '0' : treesPlanted.toFixed(0)} tree{treesPlanted !== 1 ? 's' : ''} planted!
      </p>
      {actions.length === 0 ? (
        <p>No actions tracked yet.</p>
      ) : (
        <div>
          <ul>
            {actions.map((action, index) => (
              <Action 
                key={index} 
                action={action} 
                onRemove={() => onRemoveAction(index)} // Call the remove action handler
              />
            ))}
          </ul>
          <button onClick={onClearActions}>Clear All Actions</button>
        </div>
      )}
    </div>
  );
}

export default ImpactSummary;
