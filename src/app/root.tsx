import { App } from "./app";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => await import("../pages/home"),
      },
      {
        path: "board/:id",
        lazy: async () => await import("board/entry"),
      },
    ],
  },
]);
