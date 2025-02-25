import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/information/home";
import { CrisisResources } from "./pages/getHelp/crisisResources";




function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crisis-resources/" element={<CrisisResources />} />
          </Routes>

        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
