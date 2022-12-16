import Navbar from "../components/navbar";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import ProtectedPage from "./protected";

const routes = [
  {
    path: "/",
    element: (
      //   <ProtectedPage needLogin={true}>
      <HomePage />
      //   </ProtectedPage>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
];

export default routes;
