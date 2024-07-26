import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/dashboard";
import { Landing } from "./components/landing";

export default function App() {
  return (
    <div>
      <div style={{ background: "black", color: "white" }
      }>
        This is the navbar
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div >

  )
}