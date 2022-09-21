// import React from 'react';
import { IMenuItems, IOptionMenu, IUserMenu } from 'types/Sidebar';
import ResponsiveSidebar from 'react-responsive-sidebar-menu';
// import { useAppSelector } from 'stores/Stores';

export type IProps = {
  menuItems: IMenuItems[];
  options: IOptionMenu;
  user: IUserMenu;
};

const SidebarComponents = ({ menuItems, options, user }: IProps) => {
  // const { theme } = useAppSelector(state => state.theme);

  // useEffect(() => {
  //   const side = document.getElementsByClassName('sidebar');
  //   theme && side[0].classList.add('black');
  // }, [theme]);

  return (
    <ResponsiveSidebar
      style={{ background: 'red' }}
      menuItems={menuItems}
      options={options}
      user={user}
    />
  );
};

export default SidebarComponents;
