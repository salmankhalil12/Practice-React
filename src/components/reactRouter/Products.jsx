import { Link,Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>Products Page List :
    <nav>
      <Link to="phone"><b className="me-3 ">Phone</b></Link>
      <Link to="laptop"><b className="me-3 ">Laptop</b></Link>
    </nav>
   <Outlet/>
    </div>
    
  )
}

export default Products;