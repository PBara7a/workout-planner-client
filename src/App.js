import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <main>
        <Header />
      </main>
      <Footer />
    </div>
  );
}

export default App;
