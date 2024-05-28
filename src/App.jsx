import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  // const [expenses, setExpenses] = useState(data);
  const [expenses, setExpenses] = useState();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
