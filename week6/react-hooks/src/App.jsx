import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Dashboard } from "./components/dashboard";
import { Landing } from "./components/landing";

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div >

  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div >
        <button onClick={() => { navigate("/") }}>Landing</button>
        <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>

      </div >
    </div>
  )
}