import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';
import './App.css'; // Import specific styles for App component

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

  const handleAddAction = (action) => {
    setActions(prevActions => [...prevActions, action]);
  };

  const handleRemoveAction = (index) => {
    const updatedActions = actions.filter((_, i) => i !== index);
    setActions(updatedActions);
  };

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
          onRemoveAction={handleRemoveAction}
        />
      </main>
    </div>
  );
}

export default App;
