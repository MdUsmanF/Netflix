import React, { useState } from 'react';

const EmailInput = () => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  return (
    <div className='relative w-2/5'>
      <label
        className={`absolute transition-all duration-300 ${
          isFocused ? 'text-xs top-1 text-gray-600 left-0' : 'top-1/2 text-base left-0'
        } ${
          isFocused ? 'text-gray-600' : ''
        } px-2`}
        htmlFor='email'
      >
        Enter your Email
      </label>
      <input
        type='email'
        id='email'
        className={`w-full py-4 px-3 mr-2 border border-gray-800 rounded-md transition-all duration-300 focus:outline-none ${
          isFocused ? 'border-blue-500' : 'border-gray-800'
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default EmailInput;
