import { Routes, Route } from "react-router-dom";
import ClassCard from "./components/card/ClassCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ClassCard
              title={"Strength"}
              descriptionTime={"Weekdays at 6AM"}
              secondaryDescriptionTime={"Weekends and Holidays at 8AM"}
              mainDescription={
                "Build a foundation of raw power with our comprehensive weightlifting and strength training programs."
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
