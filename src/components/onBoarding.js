import React from 'react';
import clipboard from '../assets/images/clipboard-colors.png';

const OnBoarding = () => (
  <div className="flex flex-col items-center justify-around h-full bg-white">
    <div className="flex flex-col items-center mt-10">
      <img src={clipboard} className="w-48 h-48" />
      <div className="text-xl tracking-tight text-blue-900 font-medium mt-20">
        Reminders made simple...
      </div>
    </div>
    <button className="py-3 px-16 bg-green-500 text-white rounded-lg focus:outline-none active:bg-green-700 shadow-xl">
      Get Started
    </button>
  </div>
);

export default OnBoarding;
