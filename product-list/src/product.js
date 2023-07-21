import React,{useState,useEffects, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Product =() => {

    const [product,setProduct] = useState([]);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>setProduct(result))
    },[]);

    const cards = product.map(item =>{
         return <div className="col-md-3" style={{marginBottom:'10px'}}>
        <Card style={{ width: '18rem'}}>
        <div className='text-center'>
        <Card.Img variant="top" src={item.image}  style={{width:'100px',height:'130px'}}/>
        </div>
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text>
            Price:{item.price}
          </Card.Text>
          <Button variant="primary">click</Button>
        </Card.Body>
      </Card>
      </div>
    })


  return (
    <>
        <h1>Product Dashboard</h1>
        <div className="row">
        {cards}
        </div>
        
    </>
  )
};

export default Product
