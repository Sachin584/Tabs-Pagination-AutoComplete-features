import { useEffect, useState } from "react";
import './Pagination.css';

const ProductCard = ({image, title}) => {
    return <div className="product-card">
        <img src = {image} alt = {title} className="product-img"/>
        <span>{title}</span>
    </div>
}

const PAGE_SIZE = 10;

const Pagination = () =>{
const [products, setProducts] = useState([]);
const [currPage, setCurrPage] = useState(0);

const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=200');
   const json = await data.json();
    setProducts(json.products);
}
  useEffect (()=>{
    fetchData();
  }, [])

  const handlePageChange = (pgNo)=>{
    setCurrPage(pgNo);
  }

  const totProducts = products.length;
  const noOfPages = Math.ceil(totProducts/PAGE_SIZE);
  const start = currPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !products.length ? <h1>No Products found</h1> : (
    <div className="App">
        <h1>Pagination</h1>
        
        <div className="container">
            {
            products.slice(start,end).map((p)=>(
                <ProductCard key={p.id} image={p.thumbnail} title={p.title}></ProductCard>
            ))
            }
        </div>
        <div className="pagination-container">{[...Array(noOfPages).keys()].map(n=> (
            <span className= "page-number" key={n} onClick={() => handlePageChange(n)}>{n}</span>
        ))}
        </div>
    </div>
  )
}

export default Pagination;
