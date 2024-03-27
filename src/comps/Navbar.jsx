import { useState } from "react"
import { List } from "react-bootstrap-icons"
import { NavLink } from "react-router-dom"

const navLinks = [
  {id: 1, text: 'Home', path: '/'},
  {id: 2, text: 'Listed Books', path: '/listed-books'},
  {id: 3, text: 'Pages to Read', path: '/pages-to-read'},
]

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav className="px-4 border-b">
      <div className="max-w-screen-xl py-4 mx-auto grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4">
        <h1 className='text-2xl'>BookReveal</h1>

        <div className="flex items-center justify-end md:order-1 gap-4">
          <button className="px-3 py-1 rounded-md text-white bg-green-600 hover:opacity-85">Sign In</button>
          <button className="px-3 py-1 rounded-md text-white bg-sky-600 hover:opacity-85">Sign Up</button>

          <button className="md:hidden border p-0.5 text-2xl hover:scale-95" onClick={() => setShowLinks(!showLinks)}>
            <List />
          </button>
        </div>

        <ul className={`${showLinks ? 'block': 'hidden'} relative md:flex justify-center col-span-2 md:col-span-1 animate-fadeDown`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <NavLink to={link.path} className={({isActive}) => 
                `block px-4 py-2 rounded-md md:bg-transparent hover:underline  
                ${isActive ? 'border border-green-600 text-green-600 font-bold' : ''}`
              }>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}