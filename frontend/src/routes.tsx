import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GamePage } from './pages/GamePage';
import { RulesPage } from './pages/RulesPage';
import { AddPlayersPage } from './pages/AddPlayersPage';
import { AppLayout } from './layouts/AppLayout';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/game', element: <GamePage /> },
      { path: '/rules', element: <RulesPage /> },
      { path: '/add-players', element: <AddPlayersPage /> },
    ],
  },
]);
