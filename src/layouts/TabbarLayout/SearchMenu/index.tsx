import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';
import React from 'react';

// Render menu
const renderSidebarMenuItems = ({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}): JSX.Element => (
  <span>
    {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
  </span>
);

const reduceChildRoutes = ({
  ev,
  path,
  item
}: {
  ev: JSX.Element[];
  path: string;
  item: MenuItem;
}): Array<JSX.Element> => {
  const key = item.name;

  const exactMatch = item.link ? !!matchPath({
    path: item.link,
    end: true
  }, path) : false;

  if (item.items) {
    const partialMatch = item.link ? !!matchPath({
      path: item.link,
      end: false
    }, path) : false;

    ev.push(
      <SidebarMenuItem
        key={key}
        active={partialMatch}
        open={partialMatch}
        name={item.name}
        icon={item.icon}
        link={item.link}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        active={exactMatch}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
}

function SearchMenu() {
  const location = useLocation();
  // const isOpenSidebar: boolean = useSelector(selectorApp.sideBarSelector);
  // const { t } = useTranslation();
  /**
  * @nameF get menus by permission
  * @description 
  * @param {[]} arr list menu raw
  * @param {any} role 
  * @return listMenuByPermission
  */
  const getMenuByPermission = (arr: any[], role: any) => {
    return arr.reduce((a: any, o: any) => {
      if (o.role.includes(role)) {
        const _o = o?.items?.length
          ? { ...o, items: getMenuByPermission(o.items, role) }
          : { ...o };
        a.push(_o);
      }
      return a;
    }, [])
  }

  const menu = getMenuByPermission(menuItems, 'admin');

  return (
    <>
      {menu.map((section: any) => (
        // <MenuWrapper sx={{ marginBottom: 0 }} key={section.id}>
          <React.Fragment key={'search_menu' + section.id}>
            {renderSidebarMenuItems({
              items: section.items,
              path: location.pathname
            })}
          </React.Fragment>
        // </MenuWrapper>
      ))}
    </>
  );
}

export default SearchMenu;
