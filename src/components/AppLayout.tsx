import { Outlet } from 'react-router-dom';
import NavHeader from './NavHeader';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className='logged-in-body'>
      <NavHeader />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
