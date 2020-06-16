import React from 'react';
// import OnBoarding from './components/onBoarding';
import Layout from './components/layout';
import TaskList from './components/taskList';
import TaskStats from './components/taskStats';

function App() {
  return (
    <div>
      <Layout>
        <TaskStats />
      </Layout>
    </div>
  );
}

export default App;
