import { createHashRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import LayoutContainer from "../components/Layout";
import Preview from "../components/Preview";

const router = createHashRouter([
  {
    path: "",
    element: <LayoutContainer />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "preview/:id",
        element: <Preview />,
      },
    ],
  },
]);

export default router;
