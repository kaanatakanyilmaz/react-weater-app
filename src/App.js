import WeaterData from './components/WeatherData';
import './App.css';

function App() {
  return (
    <div className="bg-blue-400 	grid place-items-center h-screen  font-family: ui-monospace text-3xl font-medium  bg-custom">
     <div className=' border-y-green-800'>
     <WeaterData/>
     </div>
    </div>
  );
}

export default App;
