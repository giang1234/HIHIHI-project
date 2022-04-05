import { FC, ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@mui/material';

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
  const isOpenSidebar: boolean = useSelector(selectorApp.sideBarSelector);
  const { t } = useTranslation();
  return (
    <ListItem component="li" key={name} {...rest}>
      <Button
        component={RouterLink}
        to={link}
        color='primary'
        sx={{ padding: '0 10px!important', fontSize: '12px!important' }}
      >
        {isOpenSidebar ? t(`trans_menu.${name}`) : null}
      </Button>
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
