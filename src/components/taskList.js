import React from 'react';
import ClipboardGray from '../assets/images/clipboard-gray.png';

const TaskCard = () => {};

const TaskList = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed w-full h-screen">
      <img src={ClipboardGray} alt="" className="w-30 mt-10 pointer-events-none" />
      <div className="block mt-12 text-center">
        <div className="text-xl tracking-tight text-blue-900 font-medium">No tasks</div>
        <div className="text-base text-gray-500 font-normal">You have no tasks to do.</div>
      </div>
    </div>
  );
};

export default TaskList;
