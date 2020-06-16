import React from 'react';
import ClipboardGray from '../assets/images/clipboard-gray.png';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import { ReactComponent as CheckCircleIcon } from '../assets/icons/checkCircle.svg';

const TaskCard = ({ text, time, color }) => (
  <div
    className={`relative flex items-center h-16 w-full p-2 bg-white shadow-md border-l-8 border-${color}-500 rounded-lg`}
  >
    <span>
      <CheckCircleIcon className="w-8 text-gray-200" />
    </span>
    <span className="ml-2 text-sm text-gray-400 tracking-wide font-base">{time}</span>
    <span className="ml-2 pr-6 text-lg text-black font-medium truncate">{text}</span>
    <span className="absolute inset-y-0 right-0 flex items-center mr-2">
      <BellIcon className="w-6 text-gray-300" />
    </span>
  </div>
);

const TaskList = ({ tasks }) => {
  return tasks ? (
    <div className="mt-32 py-1 px-4 w-screen">
      <div className="my-3 text-gray-600 tracking-wide font-bold">Today</div>
      <div className="mt-3">
        <TaskCard text={'Send email'} time={'07:00AM'} color="yellow" />
      </div>
      <div className="mt-3">
        <TaskCard text={'Groceries'} time={'07:00AM'} color="green" />
      </div>
      <div className="my-3 text-gray-600 tracking-wide font-bold">Tomorrow</div>
      <div className="mt-2">
        <TaskCard text={'Study'} time={'07:00AM'} color="blue" />
      </div>
    </div>
  ) : (
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
