import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ellipse from '../assets/images/ellipse.png';
import { ReactComponent as LightBulbIcon } from '../assets/icons/lightbulb.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as GridIcon } from '../assets/icons/grid.svg';
import { ReactComponent as PlusCircleIcon } from '../assets/icons/plusCircle.svg';
import TaskCreator from './taskCreator';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 1, y: '+200%' },
};

const blurVariants = {
  open: {
    backdropFilter: 'grayscale(0.3) blur(2px)',
    display: 'block',
  },
  closed: { display: 'none' },
};

const TabLink = ({ Icon }) => (
  <button className="h-full w-full flex justify-center items-center text-gray-500 active:text-gray-700 focus:outline-none">
    <Icon className="h-8 w-8 ml-4 opacity-75" />
  </button>
);

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-200 items-between">
      <header className="fixed w-full overflow-hidden shadow">
        <nav
          className="relative h-32"
          style={{
            background: 'linear-gradient(90deg, rgba(38,104,205,1) 0%, rgba(114,240,255,1) 100%)',
          }}
        >
          <img
            src={ellipse}
            alt=""
            className="h-32 w-32 absolute -top-8 -right-8 pointer-events-none"
          />
          <img
            src={ellipse}
            alt=""
            className="h-48 w-48 absolute -top-16 -left-16 pointer-events-none"
          />
          <div className="flex flex-row justify-between h-full p-4">
            <div className="flex flex-col justify-end">
              <div className="text-xl tracking-wide text-white font-bold">Hello, User!</div>
              <div className="text-sm font-hairline text-white">Today you have 0 tasks</div>
            </div>
            <div className="flex items-end">
              <button className="p-1 rounded-full bg-blue-400 active:bg-blue-500 bg-opacity-50 focus:outline-none">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="mt-32 pb-20 w-screen">{children}</main>
      <footer className="flex justify-around items-center fixed inset-x-0 bottom-0 bg-white h-20 w-full shadow-2xl">
        <motion.div
          className="fixed h-full w-full top-0 z-20"
          animate={isOpen ? 'open' : 'closed'}
          variants={blurVariants}
          onClick={() => setIsOpen(false)}
        />
        <motion.div
          className="fixed w-full inset-x-0 bottom-0 z-30"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <TaskCreator onClose={() => setIsOpen(false)} />
        </motion.div>
        <TabLink Icon={HomeIcon} />
        <button
          className="absolute -mt-8 top-0 text-purple-500 active:text-purple-700 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <PlusCircleIcon className="h-16 w-16" />
        </button>
        <TabLink Icon={GridIcon} />
      </footer>
    </div>
  );
};

export default Layout;
