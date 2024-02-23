import { Suspense, lazy, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { CountContext } from "./context";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider
        value={{
          count,
          setCount,
        }}
      >
        <Count />
      </CountContext.Provider>
    </>
    // <>
    //   <BrowserRouter>
    //     <Appbar />
    //     <Routes>
    //       <Route
    //         path="/dashboard"
    //         element={
    //           <Suspense fallback={"loading..."}>
    //             {" "}
    //             <Dashboard />
    //           </Suspense>
    //         }
    //       />
    //       <Route
    //         path="/"
    //         element={
    //           <Suspense fallback={"loading.."}>
    //             <Landing />
    //           </Suspense>
    //         }
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  const { count, setCount } = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons() {
  const { count, setCount } = useContext(CountContext);
  // const setCount = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing page
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard page
      </button>
    </div>
  );
}

export default App;
