import "./styles/index.scss";

import { createRoot } from "react-dom/client";

import Router from "./Router.tsx";

createRoot(document.getElementById("root")!).render(<Router />);
