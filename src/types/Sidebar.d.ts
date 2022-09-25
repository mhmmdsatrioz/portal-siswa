export interface IMenuItems {
  path: string;
  text: string;
  tooltip: string;
  icon: string;
}

export interface IOptionMenu {
  title: any;
  icon: string;
  logo: string;
}

export interface IUserMenu {
  name: any;
  avatar: any;
  status: any;
  onLogout: () => void;
}
