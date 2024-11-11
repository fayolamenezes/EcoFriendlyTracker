import React from 'react';
import ActionItem from './ActionItem';

const ActionList = ({ actions, handleAddAction }) => {
  return (
    <div className="action-list">
      <h3>Eco-Friendly Actions</h3>
      <ul>
        {actions.map((action, index) => (
          <ActionItem key={index} action={action} handleAddAction={handleAddAction} />
        ))}
      </ul>
    </div>
  );
};

export default ActionList;
