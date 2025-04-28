import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Signin to your <br />
          <span>PopX account</span>
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-xs font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Wrap only the button with Link */}
          <Link to="/Finalpage">
            <button
              type="button" // <-- Important: type="button" not "submit"
              className="w-full py-2 mt-2 bg-gray-300 text-white font-semibold rounded-md hover:bg-gray-400 transition-colors"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page2;
