import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Landing from "./components/pages/Landing"

// Entry point for routes
export default function App() {
  return (
    <main className="bg-dark">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}