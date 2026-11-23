import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { PortfolioProvider } from "./context/PortfolioContext";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
