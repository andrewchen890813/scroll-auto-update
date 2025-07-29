import React from "react";
import "./App.css";
import Layout from "./components/layout";
import Scroll from "./pages/Scroll";
import { Observer } from "./pages/Observer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* 預設導向 /Observer */}
            <Route path="/" element={<Navigate to="/Observer" replace />} />

            {/* Observer 版 */}
            <Route path="/observer" element={<Observer />} />

            {/* Scroll 監聽版 */}
            <Route path="/scroll" element={<Scroll />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
