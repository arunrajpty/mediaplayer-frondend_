import React, { useEffect, useState } from 'react'
import Videocard from './Videocard';
import { getallvideos } from '../services/apimethods';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function View({set}) {
    
      const [allvideos,Setallvideos]=useState([])
      const [dellift,Setdellift]=useState();
      
  

    const getvideo=async()=>{
    const response= await getallvideos();
    const {data}=response;
     Setallvideos(data)
   }
   
          useEffect(()=>{
                  getvideo();
          },[set,dellift])
  return (
    <div>
        <Row>
                {
                allvideos.length > 0 ?
                allvideos?.map((videos)=>(
                  <Col sm={3}>
                    <Videocard Del={Setdellift} displayvideo={videos} />
                    
                  </Col>
                )):
                <p>nothing to display</p>
              
               }
        </Row>
       
    </div>
  )
}

export default View