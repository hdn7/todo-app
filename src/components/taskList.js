import React, { useContext } from 'react';
import ClipboardGray from '../assets/images/clipboard-gray.png';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import { ReactComponent as CheckCircleIcon } from '../assets/icons/checkCircle.svg';
import { AppContext } from '../contexts/AppContext';
import tags from '../constants/tags';

const TaskCard = ({ text, time, color }) => (
  <div
    className={`relative flex items-center h-16 w-full p-2 bg-white shadow-md border-l-8 border-${color}-500 rounded-lg`}
  >
    <span>
      <CheckCircleIcon className="w-8 text-gray-200" />
    </span>
    <span className="ml-1 text-xs text-gray-400 tracking-wide font-base">{time}</span>
    <span className="ml-2 pr-6 text-base text-black font-medium truncate">{text}</span>
    <span className="absolute inset-y-0 right-0 flex items-center mr-2">
      <BellIcon className="w-5 text-gray-300" />
    </span>
  </div>
);

const TaskList = () => {
  const {
    tasks: [{ tasks }],
  } = useContext(AppContext);

  return tasks ? (
    <div className="container px-2 md:px-10 mx-auto">
      <div className="my-4 ml-2 text-gray-600 tracking-wide font-bold">Today</div>
      {tasks.map(({ id, description, date, tag }) => (
        <div className="mt-3">
          <TaskCard key={id} text={description} time={date} color={tags[tag]} />
        </div>
      ))}
      <div className="my-4 ml-2 text-gray-600 tracking-wide font-bold">Tomorrow</div>
      <div className="mt-2">
        <TaskCard text={'Dinner party'} time={'08:00PM'} color="blue" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-full">
      <img src={ClipboardGray} alt="" className="w-30 pointer-events-none" />
      <div className="block mt-12 text-center">
        <div className="text-xl tracking-tight text-blue-900 font-medium">No tasks</div>
        <div className="text-base text-gray-500 font-normal">You have no tasks to do.</div>
      </div>
    </div>
  );
};

export default TaskList;
