import React from 'react';

function Action({ action, onRemove }) {
  return (
    <li>
      <span>{action.name}</span> - {action.carbonReduction} kg CO2 reduced
      <button onClick={onRemove}>Delete</button>
    </li>
  );
}

export default Action;
