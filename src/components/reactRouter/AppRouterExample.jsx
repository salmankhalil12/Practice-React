import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Phone from './Phone';
import Laptop from './Laptop';
const AppRouterExample = () => {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h1> User Profile for ID: {id}</h1>

  }
  function NotFound() {
    return <h2>404 -  Page Not Found</h2>
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"><b className="me-3  py-5">Home</b></Link> /
        <Link to="/about" ><b className="me-3  py-5">About</b></Link> /
        <Link to="/contact" ><b className="me-3  py-5">Contact</b></Link> /
        <Link to="/user/10" ><b className="me-3  py-5">Users</b></Link> /
        <Link to="/products" ><b className="me-3  py-5">Products</b></Link> /
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/products' element={<Products />}>
          <Route path='phone' element={<Phone />} />
          <Route path='laptop' element={<Laptop />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouterExample