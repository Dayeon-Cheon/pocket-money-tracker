import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import fakeData from "./data/fakeData.js";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const savedMonth = localStorage.getItem("month");
    return savedMonth ? Number(savedMonth) : 1;
  });
  const [expenses, setExpenses] = useState(fakeData);

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
                expenses={expenses}
                setExpenses={setExpenses}
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
