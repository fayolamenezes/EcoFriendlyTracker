import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';
import './App.css';

const App = () => {
  const [actions, setActions] = useState(JSON.parse(localStorage.getItem('actions')) || []);
  const [totalCO2, setTotalCO2] = useState(0);

  useEffect(() => {
    const total = actions.reduce((sum, action) => sum + action.co2Reduction * action.count, 0);
    setTotalCO2(total);
    localStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  const addAction = (newAction) => {
    setActions((prevActions) => {
      const actionExists = prevActions.find(action => action.id === newAction.id);
      return actionExists
        ? prevActions.map(action => action.id === newAction.id ? { ...action, count: action.count + 1 } : action)
        : [...prevActions, { ...newAction, count: 1 }];
    });
  };

  const clearActions = () => setActions([]);

  return (
    <div className="app">
      <h1>Eco-Friendly Tracker</h1>
      <ActionList addAction={addAction} />
      <ImpactSummary actions={actions} totalCO2={totalCO2} clearActions={clearActions} />
    </div>
  );
};

export default App;
