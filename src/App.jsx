import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {


  return (
    <>
   
    <Routes>
    <Route  path="/" element={<Home/>}></Route>
    <Route path="*" element = {<NotFound/>}></Route>

    </Routes>
    

      
    </>
  )
}

export default App
