import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailKos from "./pages/KosDetail";
import TambahKos from "./pages/TambahKos";
import DashboardOwner from "./pages/DashboardOwner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardOwner />} />
      <Route path="/kos/:id" element={<DetailKos />} />
      <Route path="/tambah-kos" element={<TambahKos />} />
    </Routes>
  )
}

export default App;