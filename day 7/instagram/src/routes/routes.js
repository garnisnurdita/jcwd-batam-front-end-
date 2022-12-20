import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import ProtectedPage from "./protected";
import ProfilePage from "../pages/profile";
import RegisterPage from "../pages/register";
import RegisterPage2 from "../pages/register2";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedPage needLogin={true}>
        <HomePage />
      </ProtectedPage>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedPage guestOnly={true}>
        <LoginPage />
      </ProtectedPage>
    ),
  },
  {
    path: "/register2",
    element: (
      <ProtectedPage guestOnly={true}>
        <RegisterPage2 />
      </ProtectedPage>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedPage guestOnly={true}>
        <RegisterPage />
      </ProtectedPage>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/:slug",
    element: (
      <ProtectedPage needLogin={true} guestOnly={false}>
        <ProfilePage />
      </ProtectedPage>
    ),
  },
];

export default routes;
