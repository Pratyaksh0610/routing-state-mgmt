// import { Suspense, lazy, useContext, useState } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { countAtom, evenSelector } from "./store/atoms/count";
// import { CountContext } from "./context";
// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Count />
    </>
    // <>
    //   <CountContext.Provider
    //     value={{
    //       count,
    //       setCount,
    //     }}
    //   >
    //     <Count />
    //   </CountContext.Provider>
    // </>
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
    // <div>
    <div>
      {/* <h1>Hello</h1>
      <h1>Hello</h1> */}
      <RecoilRoot>
        <CountRenderer />
        <EvenRenderer />
        <Buttons />
      </RecoilRoot>
    </div>
    // </div>
  );
}

function EvenRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : null}</div>;
}

function CountRenderer() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  // const { count, setCount } = useContext(CountContext);
  // const setCount = useContext(CountContext);
  // const count = useRecoilValue(countAtom);
  // const setCount = useSetRecoilState
  // (countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
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
