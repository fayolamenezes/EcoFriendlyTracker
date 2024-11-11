// src/App.js
import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';

function App() {
  const [actions, setActions] = useState([]);
  
  // Load saved actions from localStorage on first render
  useEffect(() => {
    const savedActions = JSON.parse(localStorage.getItem('actions')) || [];
    setActions(savedActions);
  }, []);

  // Save actions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  const handleAddAction = (action) => {
    setActions([...actions, action]);
  };

  const handleClearActions = () => {
    setActions([]);
  };

  const handleRemoveAction = (index) => {
    const updatedActions = actions.filter((_, i) => i !== index);
    setActions(updatedActions);
  };

  return (
    <div>
      <h1>EcoAction Tracker</h1>
      <ActionList onAddAction={handleAddAction} />
      <ImpactSummary 
        actions={actions} 
        onClear={handleClearActions} 
        onRemoveAction={handleRemoveAction} 
      />
    </div>
  );
}

export default App;
