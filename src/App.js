import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GaleriePage from "./pages/GaleriePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/galerie" element={<GaleriePage />}/>
      </Routes>
  );
}

export default App;
