 
import './App.css'
import Contact from './components/Contact/Contact'
import Courses from './components/Course/Courses'
import Home from './components/Home/Home' 
import {Routes, Route} from "react-router-dom"

function App() {
   

  return (
    <>
   {/* <Home/>
    */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      {/* <Route path='/' element={<Home/>}/> */}
    </Routes>
     {/* <Contact/>  */}
       
     </>
  )
}

export default App
