import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './componenets/home/home.jsx'
import About from './componenets/about/about.jsx'
import Contact from './componenets/Contact/Contact.jsx'

//const router =createBrowserRouter([
  //{
   // path:"/",
   // element:<Layout/>,
   // children:[
     // {
      //  path:"",
      //  element:<Home/>
    //  },
   // {
    //  path:"about",
    //  element:<About/>
   // },
  //  {
     // path:"contact",
     // element:<Contact/>
   // }
    //]
  //}
//])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />    {/* Using 'index' for default route */}
      <Route path="about" element={<About />} /> {/* Correct JSX for About */}
      <Route path="contact" element={<Contact/>} /> {/* Correct JSX for About */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
