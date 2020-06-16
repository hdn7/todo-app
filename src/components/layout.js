import React from 'react';
import ellipse from '../assets/images/ellipse.png';
import { ReactComponent as LightBulbIcon } from '../assets/icons/lightbulb.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as GridIcon } from '../assets/icons/grid.svg';
import { ReactComponent as PlusCircleIcon } from '../assets/icons/plusCircle.svg';

const Layout = ({ children }) => (
  <div className="flex h-full bg-gray-200 items-between">
    <header className="fixed w-full overflow-hidden shadow">
      <nav
        className="relative h-32"
        style={{
          background: 'linear-gradient(90deg, rgba(38,104,205,1) 0%, rgba(114,240,255,1) 100%)',
        }}
      >
        <img src={ellipse} alt="" className="h-32 w-32 absolute -top-8 -right-8" />
        <img src={ellipse} alt="" className="h-48 w-48 absolute -top-16 -left-16" />
        <div className="flex flex-row justify-between h-full p-4">
          <div className="flex flex-col justify-end">
            <div className="text-xl tracking-wide text-white font-bold">Hello, User!</div>
            <div className="text-sm font-hairline text-white">Today you have 0 tasks</div>
          </div>
          <div className="flex items-end z-10">
            <button className="p-1 rounded-full bg-blue-400 active:bg-blue-500 bg-opacity-50 focus:outline-none">
              <LightBulbIcon className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </nav>
    </header>
    <main className="min-h-screen">{children}</main>
    <footer>
      <div className="flex justify-around items-center fixed inset-x-0 bottom-0 bg-white h-20 w-full shadow-2xl">
        <button className="h-full w-full flex justify-center items-center text-gray-500 active:text-gray-700 focus:outline-none">
          <HomeIcon className="h-8 w-8 ml-4 opacity-75" />
        </button>
        <button className="focus:outline-none">
          <PlusCircleIcon className="h-16 w-16 top-0 text-purple-500" />
        </button>
        <button className="h-full w-full flex justify-center items-center text-gray-500 active:text-gray-700 focus:outline-none">
          <GridIcon className="h-8 w-8 mr-4 opacity-75" />
        </button>
      </div>
    </footer>
  </div>
);

export default Layout;
