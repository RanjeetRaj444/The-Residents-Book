import { lazy, Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
const HomePage = lazy(() => import("./pages/HomePage"));
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3> Loading...</h3>
          </div>
        }
      >
        <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
      </Suspense>
    </>
  );
}

export default App;
