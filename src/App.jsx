
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'
import Home from './Pages/Home';
import Shop from './Pages/Shop';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
