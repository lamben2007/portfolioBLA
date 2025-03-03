import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home.jsx';
import MyProjects from "./pages/MyProjects/MyProjects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from './pages/Error/Error.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.scss'

//
function App() {

  //
  return (

    <BrowserRouter basename="/portfolioBLA">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App
