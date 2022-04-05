import { FC, ReactNode, useState, useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { SidebarContext } from 'src/contexts/SidebarContext';

import PropTypes from 'prop-types';
import { Button, Badge, ListItem, Box } from '@mui/material';

import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { selectors as selectorApp } from '../../../store/app';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
  role?: []
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  role,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(openParent);
  const isOpenSidebar: boolean = useSelector(selectorApp.sideBarSelector);
  const { t } = useTranslation();
  const { toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  if (children) {
    return (
      <ListItem component="li" className="Mui-children" key={name} {...rest}>
        <Button
          className={clsx({ 'Mui-active': menuToggle })}
          startIcon={Icon && <Icon />}
          endIcon={
            menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
          }
          onClick={toggleMenu}
        >
          {isOpenSidebar ? t(`trans_menu.${name}`) : null}
        </Button>
        {/* <Collapse in={menuToggle}>{children}</Collapse> */}
      </ListItem>
    );
  }

  return (
    <ListItem component="li" key={name} {...rest}>
      <Box className='' sx={{textAlign: 'center'}}>
        <Box sx={{height: '40px'}}>
          {badge ? <Badge badgeContent={badge} color="warning">
            <img src={Icon} alt=""/>
          </Badge> : <img src={Icon} alt=""/>}
        </Box>
        <Button
          className={active ? "Mui-active" : ""}
          component={RouterLink}
          onClick={toggleSidebar}
          to={link}
        >
          {isOpenSidebar ? t(`trans_menu.${name}`) : null}
        </Button>
      </Box>
    </ListItem>
  );
};

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired,
  role: PropTypes.any
};

SidebarMenuItem.defaultProps = {
  open: false,
  active: false,
};

export default SidebarMenuItem;
