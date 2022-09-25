import SidebarComponents from 'components/Sidebar';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { IMenuItems, IUserMenu } from 'types/Sidebar';
import { BsMoonStars } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';
import { changeThemes } from 'stores/Themes';
import { useAppDispatch, useAppSelector } from 'stores/Stores';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import API from 'api/API';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { generateAvatar } from 'hooks/GenerateAvatar';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function Head() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);
  const [avatar, setAvatar] = useState('');

  const fetchAvatar = async () => {
    const res = await API.HTTP.get(
      'https://ui-avatars.com/api/?name=Elon+Musk',
    );
    setAvatar(res.data);
    console.log(res);
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  const Username = () => (
    <>
      <p className="cursor-pointer" onClick={() => alert('Clicked')}>
        Username
      </p>
    </>
  );

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
    name: <Username />,
    avatar:
      'https://www.m2i.nl/wp-content/uploads/2018/11/blank-profile-picture-973460_1280-e1559726803294.png',
    status: 'Frontend developer',
    onLogout: () => console.log('logout'),
  };
  // ==== END SIDEBAR MENU =====

  return (
    <>
      <div className="App">
        <SidebarComponents />
      </div>
    </>
  );
}

export default Head;
