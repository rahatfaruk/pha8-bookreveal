import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import Navbar from './comps/Navbar';
import Footer from "./comps/Footer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App
