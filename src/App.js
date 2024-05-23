import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import UpcomingEvents from "./Components/UpcomingEvents";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import ErrorPage from "./Components/ErrorPage";
import EventForm from "./Components/EventForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<UpcomingEvents />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<EventForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
