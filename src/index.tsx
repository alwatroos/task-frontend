/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import "./extensions";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
