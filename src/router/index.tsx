import { createHashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainContent from "../components/MainContent";
import Collection from "../components/Collection";
import Contact from "../components/Contact";
import GalleryModal from "../components/GalleryModal";

const router = createHashRouter([
  {
    path: "",
    element: <LandingPage />,
    children: [
      {
        path: "",
        element: <MainContent />,
      },
      {
        path: "collection",
        element: <Collection />,
        children: [
          {
            path: ":id",
            element: <GalleryModal />, // nuevo modal
          },
        ],
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
