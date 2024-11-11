import React from 'react';
import './Action.css';

const Action = ({ action, addAction }) => (
  <li className="action-item">
    {action.name} - CO₂ Reduction: {action.co2Reduction} kg
    <button onClick={() => addAction(action)}>Add</button>
  </li>
);

export default Action;
