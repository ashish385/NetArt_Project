import "./App.css";
import Award from "./components/Award";
import Header from "./components/Header";
import Materiles from "./components/Materiles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Award />
        <Materiles />
        <Footer />
        <div className="h-2"></div>
      </div>
    </>
  );
}

export default App;
