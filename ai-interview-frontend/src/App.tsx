import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import DirectionsPage from "./pages/DirectionsPage";
import AboutPage from "./pages/AboutPage";
import AiPage from "./pages/AiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="directions" element={<DirectionsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="ai" element={<AiPage />} />
      </Route>
    </Routes>
  );
}

export default App;
