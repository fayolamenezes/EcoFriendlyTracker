import React from 'react';

const Action = ({ action, handleDeleteAction }) => {
  return (
    <div className="action">
      <h4>{action.name}</h4>
      <p>Total CO2 Reduction: {action.totalCO2Reduction} kg</p>
      <button onClick={() => handleDeleteAction(action.name)}>Delete</button>
    </div>
  );
};

export default Action;
