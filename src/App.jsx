import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';
import Login from './pages/auth/login'
import Register from './pages/auth/register'

import Layout from './components/layout/layout';
import NotFound from './pages/notFound';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App;
