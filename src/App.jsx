import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ExpenseProvider from "./context/ExpenseContext";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        {/* <ExpenseProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
        {/* </ExpenseProvider> */}
      </Provider>
    </>
  );
}

export default App;
