import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import History from "./pages/History";
import Contact from "./pages/Contact";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dadada;
    margin: 0;
  }

  h2, h4 {
    margin: 5%;
  }

h2 {
  font-size: 1.7rem;
}

h4 {
  font-size: 110%;
}
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
