import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Page2 from './Page2';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pb-10">
      <div className="w-[30%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h6 className="text-3xl font-semibold">Welcome to Popx</h6>
          <p className="text-gray-500 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet sint exercitationem?
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link to="/CreateAccount">
            <button className="px-4 py-2 bg-blue-800 cursor-pointer text-white rounded hover:bg-blue-900">
              Create Account
            </button>
          </Link>
          <Link to="/page2">
            <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
