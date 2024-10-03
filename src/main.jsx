import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResumeProvider } from './contexts/ResumeContext.jsx';
import Write from './pages/Write.jsx';
import ResumeContents from './pages/ResumeContents.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create',
    element: <Write />,
  },
  {
    path: '/print',
    element: <ResumeContents />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeProvider>
      <RouterProvider router={router} />
    </ResumeProvider>
  </StrictMode>
);
