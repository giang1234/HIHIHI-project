import { ReactNode } from 'react';

export interface MenuItem {
  id: string
  parent: string;
  name: string;
  role: any[];
  items?: MenuItem[];
  link?: string;
  icon?: ReactNode;
  badge?: string;
}

export interface MenuItems {
  id: string,
  heading: string;
  role: any[]
  items: MenuItem[];
}

const menuItems: MenuItems[] = [
  {
    id: '0',
    heading: '',
    role: ["admin"],
    items: [
      {
        id: '0_1',
        parent: '0',
        name: 'recruit',
        link: '/recruit',
        icon: '',
        role: ["admin"]
      }
    ],
  },
  {
    id: '1',
    heading: '',
    role: ["admin"],
    items: [
      {
        id: '0_1',
        parent: '0',
        name: 'download_application',
        link: '/download_application',
        icon: '',
        role: ["admin"]
      }
    ],
  },
  {
    id: '1',
    heading: '',
    role: ["admin"],
    items: [
      {
        id: '0_1',
        parent: '0',
        name: 'connect',
        link: '/connect',
        icon: '',
        role: ["admin"]
      }
    ],
  },
];

export default menuItems;
