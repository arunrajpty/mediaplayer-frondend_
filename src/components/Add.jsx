import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { eassyuploadvideo } from '../services/apimethods';

function Add({set}) {
     
    
    const [videodetails,Setvideodetails]=useState({
                            videoid:'',
                            caption:'',
                            imageurl:'',
                            youtubeliink:''
                         }) 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


                   const getembeddedLink=(data)=>{
                    
                    const link=`https://www.youtube.com/embed/${data.slice(-11)}`
                    
                    Setvideodetails({...videodetails,youtubeliink:link})
                    
                   }


                  const addVideodetails=async ()=>{
                    const {videoid,caption,imageurl,youtubeliink}=videodetails;
                    if(!videoid || !caption || !imageurl || !youtubeliink){
                      alert('please enter all input fields.')
                    }
                    else
                    {
                      
                       const response=await eassyuploadvideo(videodetails)
                       console.log('.........response..........');
                      console.log(response);
                      if(response.status=201){
                       alert(`${response.data.caption} is successfully updated`)
                       handleClose();
                       set(response)
                      }
                      else{
                        alert('something went wrong')
                      }
                      
                    }
                  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <h3 style={{color:'white'}}>Upload New Video</h3>
        <button onClick={handleShow} className='btn btn-primary ms-3'><i className="fa-solid fa-cloud-arrow-up"></i></button>

         <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                  <Modal.Title><span><i class="fa-solid fa-film"> </i></span>Upload Vedio</Modal.Title>
                </Modal.Header >
                <Modal.Body className='bg-dark'>
                         <Form>
                                <Form.Group className="mb-3" >
                                  <Form.Control type="text" placeholder="Enter video id" onChange={(e)=>Setvideodetails({...videodetails,videoid:e.target.value})} />
                                </Form.Group>
                                <Form.Group className="mb-3" > 
                                  <Form.Control type="text" placeholder="Enter video caption" onChange={(e)=>Setvideodetails({...videodetails,caption:e.target.value})} />
                                </Form.Group>
                                <Form.Group className="mb-3" > 
                                  <Form.Control type="text" placeholder="Enter image url" onChange={(e)=>Setvideodetails({...videodetails,imageurl:e.target.value})} />
                                </Form.Group>
                                <Form.Group className="mb-3" > 
                                  <Form.Control type="text" placeholder="Enter youtube link" onChange={(e)=>getembeddedLink(e.target.value)}  />
                                </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button className='btn btn-warning' variant="primary" onClick={addVideodetails}>
                    Upload
                  </Button>
                </Modal.Footer>
              </Modal>

      </div>
    </div>
  )
}

export default Add