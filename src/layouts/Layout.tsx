import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        {' '}
        <p>Frejas coola icon bland annat</p>
      </header>
      <Outlet />
      <footer style={{ left: 0, bottom: 0, right: 0 }}>
        {' '}
        Made by me, Freja Edberg
      </footer>
    </>
  );
};
