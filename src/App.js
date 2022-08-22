import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
