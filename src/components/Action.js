import React from 'react';

const Action = ({ action, handleDeleteAction }) => {
  return (
    <div className="action">
      <span>
        {action.name} (x{action.count}) - {action.totalCO2Reduction * action.count} kg CO2
      </span>
      <button onClick={() => handleDeleteAction(action.name)}>Delete</button>
    </div>
  );
};

export default Action;
