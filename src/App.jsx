import './App.css';

import StatefulForm from './components/StatefulForm/StatefulForm';

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Input master</h1>
      {/* <SimpleForm></SimpleForm> */}
      <div className="flex flex-col justify-center items-center">
        <StatefulForm></StatefulForm>
      </div>
    </div>
  );
}

export default App;
