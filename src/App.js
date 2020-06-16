import React from 'react';
// import OnBoarding from './components/onBoarding';
import Layout from './components/layout';
import TaskList from './components/taskList';

function App() {
  return (
    <div>
      <Layout>
        <TaskList tasks={['a']} />
      </Layout>
    </div>
  );
}

export default App;
