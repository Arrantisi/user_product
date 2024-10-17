import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./common/themeProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import Product from "./pages/Product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
