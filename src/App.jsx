import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import { useState } from 'react';
import CartTab from './components/CartTab/CartTab.jsx';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
      function toggleSideBar(){
          setSidebarOpen((prev) => !prev)
         
      }

  return (
    <>
    <BrowserRouter>
    {!isSidebarOpen  && <Header toggleSideBar={toggleSideBar}/>}

      {isSidebarOpen && (
      <div className="sideBar">
          <SideBar toggleSideBar={toggleSideBar} />
      </div>
     )}
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:slug' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<CartTab/>} />

             

    </Routes>

    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
