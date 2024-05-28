import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseProvider from "./context/ExpenseContext";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </>
  );
}

export default App;
