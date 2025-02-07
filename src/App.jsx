import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import Layout from './components/Layout/Layout.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/:slug' element={<ProductDetailsPage/>}/>
      </Route>


    </Routes>

    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
