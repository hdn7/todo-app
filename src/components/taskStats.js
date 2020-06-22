import React, { useContext } from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as BookIcon } from '../assets/icons/book.svg';
import { ReactComponent as FireIcon } from '../assets/icons/fire.svg';
import { ReactComponent as BriefCaseIcon } from '../assets/icons/briefcase.svg';
import { AppContext } from '../contexts/AppContext';

const TaskCategory = ({ category, Icon, color, tasksCount }) => (
  <div className="flex flex-col items-center justify-center m-2 h-full w-full bg-white shadow-lg">
    <div className={`bg-${color}-300 bg-opacity-25 rounded-full p-3`}>
      <Icon className={`w-16 text-${color}-500`} />
    </div>
    <span className="text-blue-900 text-lg font-medium mt-2">{category}</span>
    <span className="text-gray-500 text-xs mt-2">{tasksCount} Tasks</span>
  </div>
);

const TaskStats = () => {
  const {
    tasks: [{ tasks }],
  } = useContext(AppContext);

  const tagFreq = (target) => tasks.reduce((acc, { tag }) => (target === tag ? acc + 1 : acc), 0);
  return (
    <div className="container mx-auto pt-4 px-2 md:px-10">
      <span className="ml-4 text-gray-600 tracking-wide font-bold">Tasks</span>
      <div className="flex flex-row justify-between h-48 mt-4">
        <TaskCategory
          Icon={UserIcon}
          color="yellow"
          category="Personal"
          tasksCount={tagFreq('Personal')}
        />
        <TaskCategory
          Icon={BriefCaseIcon}
          color="green"
          category="Work"
          tasksCount={tagFreq('Work')}
        />
      </div>
      <div className="flex flex-row justify-between h-48 mt-4">
        <TaskCategory
          Icon={CalendarIcon}
          color="purple"
          category="Meeting"
          tasksCount={tagFreq('Meeting')}
        />
        <TaskCategory Icon={CartIcon} color="pink" category="Shop" tasksCount={tagFreq('Shop')} />
      </div>
      <div className="flex flex-row justify-between h-48 mt-4 mb-10">
        <TaskCategory Icon={FireIcon} color="blue" category="Party" tasksCount={tagFreq('Party')} />
        <TaskCategory
          Icon={BookIcon}
          color="orange"
          category="Study"
          tasksCount={tagFreq('Study')}
        />
      </div>
    </div>
  );
};

export default TaskStats;
