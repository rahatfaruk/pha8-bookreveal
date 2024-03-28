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
import PagesToRead from './comps/PagesToRead';
import EventsPage from './comps/EventsPage/index.jsx';
import ConnectPage from './comps/ConnectPage/index.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} errorElement={<ErrorPage />} loader={() => fetch('/books.json')} >
    <Route index element={<HomePage />} />
    <Route path='book-details/:id' element={<BookDetails />} />
    <Route path='listed-books' element={<ListedBooks />} />
    <Route path='pages-to-read' element={<PagesToRead />} />
    <Route path='events' element={<EventsPage />} />
    <Route path='connect' element={<ConnectPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
