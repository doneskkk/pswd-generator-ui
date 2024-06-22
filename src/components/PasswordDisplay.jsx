import React from 'react';

function PasswordDisplay({ password }) {
  return (
    <div className="mt-10 p-4 border-2 border-blue-500 rounded-lg bg-gray-100 shadow-md text-center font-roboto">
      {password && <p className="text-lg text-gray-800 font-medium">Generated Password: {password}</p>}
    </div>
  );
}

export default PasswordDisplay;
