import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';
import './App.css'; // Ensure you have the styles defined in App.css

function App() {
  const [actions, setActions] = useState([]);

  // Load actions from localStorage on page load
  useEffect(() => {
    const savedActions = JSON.parse(localStorage.getItem('ecoActions')) || [];
    setActions(savedActions);
  }, []);

  // Save actions to localStorage whenever actions change
  useEffect(() => {
    localStorage.setItem('ecoActions', JSON.stringify(actions));
  }, [actions]);

  // Handle adding new action
  const handleAddAction = (action) => {
    setActions(prevActions => [...prevActions, action]);
  };

  // Handle removing action by index
  const handleRemoveAction = (index) => {
    const updatedActions = actions.filter((_, i) => i !== index);
    setActions(updatedActions);
  };

  // Handle clearing all actions
  const handleClearActions = () => {
    setActions([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Eco Action Tracker</h1>
      </header>
      <main>
        <ActionList onAddAction={handleAddAction} />
        <ImpactSummary 
          actions={actions}
          onClearActions={handleClearActions}
          onRemoveAction={handleRemoveAction} // Pass the remove handler to ImpactSummary
        />
      </main>
    </div>
  );
}

export default App;
