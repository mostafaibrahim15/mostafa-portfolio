
import './App.css'
import { createBrowserRouter } from 'react-router'
import Layout from './Componants/Layout/Layout'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import { RouterProvider } from 'react-router/dom'
import Login from './Pages/Login/Login'
import '@fontsource/kalam';
import { Helmet } from 'react-helmet'
function App() {
  const router= createBrowserRouter([
    {path:"/",
      element:<Layout/> ,
      children:[
        {index:true , element:<Home/>},
        {path:"/project" , element:<Projects/>},
        {path:"/about" , element:<About/>},
        {path:"/login" , element:<Login/>},
        
      ]
    }
  ]) 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
