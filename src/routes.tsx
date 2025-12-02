import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GamePage } from './pages/GamePage';
import { RulesPage } from './pages/RulesPage';
import { AddPlayersPage } from './pages/AddPlayersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/game', element: <GamePage /> },
      { path: '/rules', element: <RulesPage /> },
      { path: '/add-players', element: <AddPlayersPage /> },
    ],
  },
]);
//Här ska vi ha fler element. sedan också en loader
