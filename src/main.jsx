import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './index.css'
// comps
import App from './App.jsx'
import HomePage from './comps/HomePage';
import ErrorPage from './comps/ErrorPage';
import BookDetails from './comps/BookDetails';
import ListedBooks from './comps/ListedBooksPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} errorElement={<ErrorPage />} >
    <Route index element={<HomePage />} loader={() => fetch('/books.json')} />
    <Route path='book-details/:id' element={<BookDetails />} />
    <Route path='listed-books' element={<ListedBooks />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
