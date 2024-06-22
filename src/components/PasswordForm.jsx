// PasswordForm.js
import React, { useState } from 'react';

function PasswordForm({ onGenerate }) {
  const [length, setLength] = useState(10);
  const [special, setSpecial] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(length, special);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label htmlFor="length" className="block text-gray-700 text-sm font-bold mb-2 font-roboto">Password Length: {length}</label>
        <input
          type="range"
          id="length"
          name="length"
          className="block appearance-none w-full bg-gray-200 h-2 rounded-full focus:outline-none"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="6"
          max="20"
        />
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="special"
          name="special"
          className="mr-2 leading-tight"
          checked={special}
          onChange={(e) => setSpecial(e.target.checked)}
        />
        <label htmlFor="special" className="text-gray-700 text-sm font-roboto">Allow Special Characters</label>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-roboto py-2 px-4 rounded">Generate Password</button>
    </form>
  );
}

export default PasswordForm;
