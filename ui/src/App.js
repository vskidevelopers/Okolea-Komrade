import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./Pages/Auth";
import HowItWorks from "./Pages/HowItWorks";
import Komrades from "./Pages/Komrades";
import LandingPage from "./Pages/LandingPage";
import ProfilePage from "./Pages/ProfilePage";
import SplashPage from "./Pages/SplashPage";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/komrades" element={<Komrades />} />
        <Route path="/splash" element={<SplashPage />} />
      </Routes>
    </div>
  );
}

export default App;
