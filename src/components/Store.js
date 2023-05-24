import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import StoreItem from './StoreItem'

const Store = () => {
  return (
    <>
     <h1>Store</h1>
     <Row md={2} xs={1} lg={3} className='g-3'>
    {
      storeItems.map((item)=>(
       <Col key={item.id}>
        {/* here we will craete new components for the item , and we will ad to this component image ,price,etc ... , and we will pass all properyes that exist in JSON file   as props  */}
         <StoreItem {...item}/>
       </Col> 
      ))
    }
     </Row>
    
    </>
  )
}

export default Store