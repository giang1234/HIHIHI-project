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
        name: 'order',
        link: '/order',
        icon: '/static/images/icon/order.png',
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
        name: 'likes',
        link: '/likes',
        icon: '/static/images/icon/likes.png',
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
        name: 'card',
        link: '/card',
        icon: '/static/images/icon/card.png',
        badge: '2',
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
        name: 'notice',
        link: '/notice',
        badge: '10',
        icon: '/static/images/icon/notice.png',
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
        name: 'user',
        link: '/user',
        icon: '/static/images/icon/user.png',
        role: ["admin"]
      }
    ],
  },
];

export default menuItems;
