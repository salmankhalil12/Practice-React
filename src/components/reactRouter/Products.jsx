import { Link,Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div className='font-bold py-4'>Products Page List :
    <nav>
      <Link to="phone"><b className="me-3 className='font-bold py-4'">Phone</b></Link>
      <Link to="laptop"><b className="me-3 className='font-bold py-4'">Laptop</b></Link>
    </nav>
   <Outlet/>
    </div>
    
  )
}

export default Products;