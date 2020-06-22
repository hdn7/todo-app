import React, { useContext } from 'react';
// import OnBoarding from './components/onBoarding';
import Layout from './components/layout';
import TaskList from './components/taskList';
import TaskStats from './components/taskStats';
import { AppContext } from './contexts/AppContext';

function App() {
  const {
    page: [currentPage],
  } = useContext(AppContext);

  return <Layout>{currentPage === 'home' ? <TaskList /> : <TaskStats />}</Layout>;
}

export default App;
