import React from 'react';
import './ActionList.css';
import Action from './Action';

const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

const ActionList = ({ addAction }) => (
  <div className="action-list">
    <h2>Eco Actions</h2>
    <ul>
      {ecoActions.map(action => (
        <Action key={action.id} action={action} addAction={addAction} />
      ))}
    </ul>
  </div>
);

export default ActionList;
