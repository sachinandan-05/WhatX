import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import IpChecker from "./pages/IpChecker.jsx";
import "./index.css";
import { ScreenResolution } from "./pages/ScreenResolution.jsx";
import {BrowserInfo} from "./pages/BrowserInfo.jsx"
import { UserAgent } from "./pages/UserAgent.jsx";
import { ToolGrid } from "./components/ToolGrid.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* Use Vite's BASE_URL as the router basename so encoded repo names (e.g. ß -> %C3%9F) are handled */}
  <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tools/ip-checker" element={<IpChecker />} />
        <Route path="/tools/screen-resolution" element={<ScreenResolution/>}/>
        <Route path="/tools/browser-info" element={<BrowserInfo/>}/>
        <Route path="/tools/user-agent" element={<UserAgent/>}/>
        <Route path="/tools" element={<ToolGrid/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);