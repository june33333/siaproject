// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Index from "./page/Index";
import Subpage from "./page/SubPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/subpage" element={<Subpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
