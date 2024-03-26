import { Outlet } from "react-router-dom"
import Navbar from './comps/Navbar';
import Footer from "./comps/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
