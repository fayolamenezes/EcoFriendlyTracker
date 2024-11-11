import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';
import './App.css';

const App = () => {
  const [actions, setActions] = useState([]);
  const [totalCO2Reduction, setTotalCO2Reduction] = useState(0);

  useEffect(() => {
    const savedActions = JSON.parse(localStorage.getItem('actions')) || [];
    const savedCO2Reduction = savedActions.reduce(
      (acc, action) => acc + action.totalCO2Reduction,
      0
    );
    setActions(savedActions);
    setTotalCO2Reduction(savedCO2Reduction);
  }, []);

  const handleAddAction = (newAction) => {
    const updatedActions = [...actions, { ...newAction, count: 1, totalCO2Reduction: newAction.totalCO2Reduction }];
    setActions(updatedActions);
    setTotalCO2Reduction(
      updatedActions.reduce((acc, action) => acc + action.totalCO2Reduction, 0)
    );
    localStorage.setItem('actions', JSON.stringify(updatedActions));
  };

  const handleClearActions = () => {
    setActions([]);
    setTotalCO2Reduction(0);
    localStorage.removeItem('actions');
  };

  const handleDeleteAction = (actionName) => {
    const updatedActions = actions.filter(action => action.name !== actionName);
    setActions(updatedActions);
    setTotalCO2Reduction(
      updatedActions.reduce((acc, action) => acc + action.totalCO2Reduction, 0)
    );
    localStorage.setItem('actions', JSON.stringify(updatedActions));
  };

  return (
    <div className="App">
      <h1>Eco-Friendly Tracker</h1>
      <ActionList actions={actions} handleAddAction={handleAddAction} handleDeleteAction={handleDeleteAction} />
      <ImpactSummary
        totalCO2Reduction={totalCO2Reduction}
        actions={actions}
        handleClearActions={handleClearActions}
      />
    </div>
  );
};

export default App;
