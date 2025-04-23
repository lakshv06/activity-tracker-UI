import { Outlet } from 'react-router-dom';
import NavHeader from './NavHeader';

function AppLayout() {
  return (
    <div className='logged-in-body'>
      <NavHeader />
      <div id="page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
