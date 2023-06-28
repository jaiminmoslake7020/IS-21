import React from 'react';
import FeedbackSystem from './components/app/FeedbackSystem';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App" >
      <div className="app-wrapper" >
        <FeedbackSystem />
        <Routes />
      </div>
    </div>
  );
}

export default App;
