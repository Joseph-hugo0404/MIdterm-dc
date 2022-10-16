import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllVenues from "./pages/AllVenues";
import ViewVenue from "./pages/ViewVenue";
 
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllVenues />} />
            <Route path="/venues" element={<AllVenues />} />
            <Route path="/sis.materdeicollege.com/api/venues/:id" element={<ViewVenue />} />
          </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
