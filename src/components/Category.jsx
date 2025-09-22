import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addcategory, deletecategory, getcategory, getvideobyid, putvideo } from '../services/apimethods';



function Category() {
        const [cname,Setname]=useState(' ');
        const [cat,Setcat]=useState([]);

         console.log(cname);
         const [loadcat,Setloadcat]=useState()
                  const [ide,Setide]=useState()
         
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
       
  const addCategory=async()=>{
          console.log(cname);
          
          if (cname==""){
                        alert('please enter category name')
                  }else{
                      var data= {
                        cat_name:cname,
                        display:[]
                      }
                                
                        const result=await addcategory(data);
                        Setloadcat(result)
                        alert('sucessfully added')
                        handleClose();    
                        Setname('')
          } 
        }

        const getcat=async()=>{
           const respo=await getcategory()
           console.log(respo);
           const {data}=respo
           Setcat(data)

        }

        const deletecat=async(id)=>{
          Setide(id)
           await deletecategory(id)
          Setide(id);
        }

          cat.map((item)=>{
            console.log(item.cat_name);
          })
     
     
       useEffect(()=>{
        getcat();
       },[loadcat,ide])
     
       const dragover=(e)=>{
        e.preventDefault()
        console.log('drag over........');
       }

       const _ondrop=async(e,id)=>{
        console.log('on drop........');
        console.log(`category id----- ${id}`);
        const key=e.dataTransfer.getData('KEY')
        console.log(key);
        console.log(`key is-----${key}`);
        const result=await getvideobyid(key)
        console.log('.....drag details........');
        console.log(result.data);
      console.log(`...cat......`,cat);//////////////
        
        const dragcat=cat.find((item)=>(item.id===id))
        console.log(`selected category`,dragcat);
        dragcat.display.push(result.data)
       console.log(`new selected category`,dragcat);
       await putvideo(dragcat,id)
        
        
        
        
       }

     return (
    <div>
        <div>
            <button className='btn btn-warning' onClick={handleShow}>Add new category</button>
                   
                     {
                    cat.length >0 ?
                      cat.map((item)=>(
                        <div>
                             <div className='m-3 border border-secondary rounded p-3'
                              droppable onDragOver={(e)=>{dragover(e)}}
                              onDrop={(e)=>{_ondrop(e,item.id)}}
                              >
                              
                                  <div className=' d-flex justify-content-between align-items-center'>

                                      <p style={{color:'white'}}> {item.cat_name} </p>
                                      <button onClick={()=>deletecat(item.id)} className='btn btn-danger'><i class="fa-solid fa-trash "></i></button>
                                  </div>

                             </div>
                        </div>
                      )):
                      <p style={{color:'white'}}> no category</p>
                  }
               
             <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                  <Modal.Title>Categoty</Modal.Title>
                </Modal.Header >
                        <Modal.Body className='bg-dark'>
                         <Form>
                                <Form.Group className="mb-3" controlId="formBasicPassword"> 
                                  <Form.Control type="text" placeholder="Enter category name"  onChange={(e)=>Setname(e.target.value)}/>
                                </Form.Group>
                        </Form>
                        </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button className='btn btn-warning' variant="primary" onClick={addCategory}>
                    Upload
                  </Button>
                </Modal.Footer>
              </Modal>
        </div>
    </div>
  )
}

export default Category