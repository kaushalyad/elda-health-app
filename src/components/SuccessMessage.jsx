import React from 'react';

const SuccessMessage = () => {
  const checkmarkStyle = {
    color: '#9ABC66',
    fontSize: '200px',
    lineHeight: '200px',
    marginLeft: '-15px',
  };

  return (
    <div className="bg-lime-50 h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-md text-center">
        <div className="rounded-full h-72 w-72 bg-[#F8FAF5] mx-auto mb-6 flex items-center justify-center">
          <i className="checkmark" style={checkmarkStyle}>✓</i>
        </div>
        <h1 className="text-[#9ABC66] font-bold text-6xl mb-2">Success</h1>
        <p className="text-gray-700 text-lg">Congratulations on purchasing a yoga plan!<br/> Get ready to embark on a journey of health and well-being. We'll be sending you class details shortly.</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
