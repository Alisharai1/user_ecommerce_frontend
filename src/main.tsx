import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { Login, SignUpPage } from './pages'
import { Redirect } from './pages/Redirect.tsx'
import { Home } from './pages/Home.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/", element: <Redirect /> }

      // { path: "/forgot-password", element: <ForgotPassword /> },
      // { path: "/reset-password", element: <ResetPassword /> }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
