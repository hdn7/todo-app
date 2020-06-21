import React, { useContext } from 'react';
// import OnBoarding from './components/onBoarding';
import Layout from './components/layout';
import TaskList from './components/taskList';
import TaskStats from './components/taskStats';
import { PageContext } from './contexts/PageContext';

function App() {
  const [currentPage] = useContext(PageContext);

  return <Layout>{currentPage === 'home' ? <TaskList tasks={['as']} /> : <TaskStats />}</Layout>;
}

export default App;
