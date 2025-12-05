import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
