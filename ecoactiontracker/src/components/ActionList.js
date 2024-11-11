import React from 'react';
import Action from './Action'; // Import the Action component

const ActionList = ({ actions, handleAddAction, handleDeleteAction }) => {
  // Predefined eco-friendly actions with CO2 reductions
  const predefinedActions = [
    { name: "Recycle Paper", totalCO2Reduction: 0.1 },
    { name: "Use Public Transport", totalCO2Reduction: 0.5 },
    { name: "Plant a Tree", totalCO2Reduction: 1.0 },
    { name: "Switch to LED Bulbs", totalCO2Reduction: 0.3 },
    { name: "Compost Food Waste", totalCO2Reduction: 0.4 },
    { name: "Use Reusable Bags", totalCO2Reduction: 0.2 },
    { name: "Unplug Devices When Not in Use", totalCO2Reduction: 0.15 },
    { name: "Eat Less Meat", totalCO2Reduction: 0.7 }
  ];

  return (
    <div className="action-list">
      <h3>Eco-Friendly Actions</h3>
      <ul>
        {predefinedActions.map((action, index) => (
          <li key={index}>
            <button onClick={() => handleAddAction(action)}>
              Add {action.name} - ({action.totalCO2Reduction} kg CO2)
            </button>
          </li>
        ))}
      </ul>

      <h4>Tracked Actions:</h4>
      {actions.length === 0 ? (
        <p>No actions tracked yet!</p>
      ) : (
        <ul className="tracked-actions">
          {actions.map((action, index) => (
            <Action
              key={index}
              action={action}
              handleDeleteAction={handleDeleteAction}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActionList;
