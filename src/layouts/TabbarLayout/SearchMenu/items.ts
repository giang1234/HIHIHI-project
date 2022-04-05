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
        id: '0_0',
        parent: '0',
        name: 'other',
        link: '/orther',
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
        id: '1_0',
        parent: '1',
        name: 'take_care_of_life',
        link: '/take_care_of_life',
        icon: '',
        role: ["admin"]
      }
    ],
  },
  {
    id: '2',
    heading: '',
    role: ["admin"],
    items: [
      {
        id: '2_0',
        parent: '2',
        name: 'household_utensi',
        link: '/household_utensi',
        icon: '',
        role: ["admin"]
      }
    ],
  },
  {
    id: '3',
    heading: '',
    role: ["admin"],
    items: [
      {
        id: '3_0',
        parent: '3',
        name: 'mother_baby',
        link: '/mother_and_baby',
        icon: '',
        role: ["admin"]
      }
    ],
  },
];

export default menuItems;
