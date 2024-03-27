import { Outlet, useLoaderData } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import Navbar from './comps/Navbar';
import Footer from "./comps/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from "react";

export const BooksContext = createContext()

function App() {
  const books = useLoaderData()
  
  return (
    <BooksContext.Provider value={books}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />

        <ToastContainer />
      </div>
    </BooksContext.Provider>
  )
}

export default App
