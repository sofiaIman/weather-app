
import './App.css';
import Inputs from './components/Inputs';
import TopButton from './components/TopButton';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButton />
    <Inputs />
    </div>
  );
}

export default App;
