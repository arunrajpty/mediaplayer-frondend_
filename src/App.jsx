import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/home'
import { Routes, Route } from "react-router-dom"
import Landingpage from './pages/landingpage'
import Watchhistory from './pages/Watchhistory'

function App() {
  return (
    
<div >
 <Header/>
   <Routes>
    <Route path='/homepage' element={<Home/>} />
    <Route path='/' element={<Landingpage/>} />
     <Route path='/landingpage' element={<Landingpage/>} />
     <Route path='/watchhistorypage' element={<Watchhistory/>} />

   </Routes>

   <Footer/>
</div>       
   
  )}

export default App
 