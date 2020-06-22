import React from 'react';
import { ReactComponent as XCircleIcon } from '../assets/icons/xCircle.svg';
import { ReactComponent as CircleIcon } from '../assets/icons/circle.svg';
import useTags from '../hooks/useTags';
import tags from '../constants/tags';

const LineSeparator = () => (
  <div className="w-full px-4 py-2">
    <div className="border-b border-gray-400" />
  </div>
);

const TaskTag = ({ children, color, selected, onClick }) => {
  return (
    <button
      className={`relative inline-flex items-center px-3 py-2 ml-3 focus:outline-none rounded ${
        selected ? `bg-${color}-500 text-white` : 'text-gray-600'
      }`}
      onClick={onClick}
    >
      {!selected && (
        <CircleIcon className={`absolute inset-x-0 left-0 -ml-1 text-${color}-500 w-3 h-3`} />
      )}
      <span className="text-base sm:text-lg">{children}</span>
    </button>
  );
};

const TaskCreator = ({ onClose }) => {
  const tagStates = useTags(tags);

  return (
    <div className="relative h-80 bg-white shadow-xl">
      <div className="container mx-auto">
        <button
          className="-mt-8 absolute mx-auto inset-x-0 top-0 text-purple-500 active:text-purple-700 focus:outline-none"
          onClick={onClose}
        >
          <XCircleIcon className="w-16 h-16 top-0" />
        </button>
        <div className="text-center pt-8 text-sm sm:text-base font-medium tracking-tight">
          Add a new task
        </div>
        <textarea
          className="p-4 h-28 w-full text-base sm:text-xl focus:outline-none"
          placeholder="Task description..."
        />
        <LineSeparator />
        <div className="overflow-hidden">
          <div className="flex items-center overflow-auto h-12  ">
            {tagStates.map(({ name, selected, setSelected }) => (
              <TaskTag
                selected={selected}
                onClick={() => setSelected(!selected)}
                color={tags[name]}
              >
                {name}
              </TaskTag>
            ))}
          </div>
        </div>
        <LineSeparator />
        <div className="flex justify-start items-center p-4">
          <span className="text-base sm:text-xl text-gray-600 mr-4">Choose date</span>
          <input type="date" />
        </div>
        <div className="max-w-sm sm:max-w-md mx-auto p-4">
          <button
            className="w-full p-4 bg-blue-500 text-lg sm:text-xl text-white font-bold rounded-lg shadow-xl 
            focus:outline-none focus:shadow-outline active:bg-blue-700"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCreator;
