import React from 'react';

const Finalpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        </div>

        {/* Profile Info */}
        <div className="flex items-start p-6">
          <div className="relative">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://via.placeholder.com/150" // replace with your real image
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Text Info */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
              Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-32 border-t border-dashed"></div>
      </div>
    </div>
  );
};

export default Finalpage;
