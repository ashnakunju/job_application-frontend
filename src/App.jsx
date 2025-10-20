import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Home from './Component/Home'
import Add_new from './Component/Add_new'
import Form from './Component/Form'
import Edit from './Component/Edit'

function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add_new/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
