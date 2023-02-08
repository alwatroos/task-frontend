/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import "./extensions";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// After
const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
