import { List } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';
import { styled } from '@mui/material/styles';
import React from 'react';

//Styles
// const MenuWrapper = styled(List)(
//   ({ theme }) => `
//     margin-bottom: ${theme.spacing(1)};
//     padding: 0;
//     display: flex;
//     .MuiListSubheader-root {
//       text-transform: uppercase;
//       font-weight: bold;
//       font-size: ${theme.typography.pxToRem(12)};
//       color: ${theme.sidebar.menuItemHeadingColor};
//       padding: ${theme.spacing(0.8, 2)};
//       line-height: 1.4;
//     }
// `
// );

const SubMenuWrapper = styled(List)(
  ({ theme }) => `
    &.MuiList-root {
      padding: 0;
      .MuiList-root .MuiList-root .MuiListItem-root .MuiButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 2px 1px;
    
        .MuiButton-root {
          display: flex;
          color: ${theme.sidebar.menuItemColor};
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          justify-content: flex-start;
          font-size: ${theme.typography.pxToRem(13)};
          padding-top: ${theme.spacing(0.8)};
          padding-bottom: ${theme.spacing(0.8)};
          position: relative;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(4)};

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(9)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: ${theme.spacing(1.5)};
            color: ${theme.sidebar.menuItemIconColor};
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;
          background-color: ${theme.sidebar.menuItemBgActive};
        }
        .MuiCollapse-root {
          width: 100%;
          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }
          .MuiListItem-root {
            padding: 1px ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              &.Mui-active,
              &:hover {
                background-color: ${theme.sidebar.menuItemBg};
              }
            }
          }
        }
      }
    }
`
);

// Render menu
const renderSidebarMenuItems = ({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}): JSX.Element => (
  <SubMenuWrapper>
    {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
  </SubMenuWrapper>
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

function RightMenu() {
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
      {menu.map((section: any, index: number) => (
          <React.Fragment key={'sidebar_menu_' + index}>
            {renderSidebarMenuItems({
              items: section.items,
              path: location.pathname
            })}
          </React.Fragment>
      ))}
    </>
  );
}

export default RightMenu;
