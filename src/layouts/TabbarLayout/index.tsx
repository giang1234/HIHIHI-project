import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { GuardAuth } from 'src/router/guard';
import { RouteConfigs } from 'src/router/route.config';
import { selectors as selectorApp } from '../../store/app';
import { useSelector } from 'react-redux';
import Footer from 'src/components/Footer';
import TabBar from './TabBar';
import Loading from '../../components/Loading';
interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<any>(({ theme, open }) => ({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    paddingLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - ${theme.sidebar.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: 113px;
        padding-top: 30px;
        flex: 1 1 auto;
        overflow: auto;
        @media (min-width: 1280px) {
          max-width: unset;
      }
`
);

const TabbarLayout: FC<SidebarLayoutProps> = () => {
  const isOpenSidebar: boolean = useSelector(selectorApp.sideBarSelector);
  return (
    <>
      <GuardAuth settings={RouteConfigs}>
        <MainWrapper open={!isOpenSidebar}>
          <TabBar />
          <MainContent>
            <Outlet />
          </MainContent>
          <Footer />
          <Loading/>
        </MainWrapper>
      </GuardAuth>
    </>
  );
};

export default TabbarLayout;
