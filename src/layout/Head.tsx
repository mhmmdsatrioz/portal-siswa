import SidebarComponents from 'components/Sidebar.components';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { IMenuItems, IUserMenu } from 'types/Sidebar';
import { BsMoonStars } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';
import { changeThemes } from 'stores/Themes';
import { useAppDispatch, useAppSelector } from 'stores/Stores';

function Head() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  // ==== START SIDEBAR MENU =====
  const Titles = () => (
    <div className="flex items-center gap-14">
      <p>Hello</p>
      <div>
        {theme ? (
          <BsMoonStars
            className="cursor-pointer"
            onClick={() => dispatch(changeThemes())}
          />
        ) : (
          <BiSun onClick={() => dispatch(changeThemes())} />
        )}
      </div>
    </div>
  );

  const menuItems: IMenuItems[] = [
    {
      path: '/',
      text: 'Dashboard',
      tooltip: 'Dashboard',
      icon: 'bx bx-grid-alt',
    },
    {
      path: '/',
      text: 'Siswa',
      tooltip: 'Siswa',
      icon: 'bx bx-chat',
    },
  ];

  const options = {
    title: <Titles />,
    icon: 'bx bxl-react icon',
    logo: 'https://lucassenarj.github.io/favicon.ico',
  };
  const user: IUserMenu = {
    name: 'Lucas Sena',
    avatar: 'https://lucassenarj.github.io/images/author.jpg',
    status: 'Frontend developer',
    onLogout: () => console.log('logout'),
  };
  // ==== END SIDEBAR MENU =====

  return (
    <>
      <div style={{ width: 256 }} className="flex-row flex">
        <div className="w-[200px]">
          <SidebarComponents
            menuItems={menuItems}
            options={options}
            user={user}
          />
        </div>
      </div>
      <div className="flex-auto pl-24 pt-6 dark:bg-gray-600 bg-slate-100 min-h-screen ">
        <Outlet />
      </div>
    </>
  );
}

export default Head;
