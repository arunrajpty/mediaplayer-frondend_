import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deletevideo } from '../services/apimethods';

function Videocard({displayvideo,Del}) {

           const [show, setShow] = useState(false);

            const handleClose = () => setShow(false);
            const handleShow = async() => {
                          const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));
                          var options = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                            
                          }
                        const t=new Intl.DateTimeFormat("en-US", options).format(date)
                      console.log('.......time..............');
                      console.log(t);
                      const data={
                        url:displayvideo.youtubeliink,
                        caption:displayvideo.caption,
                        timestamp:t
                      }
                      await addhistory(data)                                        
                      setShow(true)
                      };

              const deletevideoitem=async(id)=>{
               const response=await deletevideo(id);
               if (response.status==200){
                        Del(response);
                        alert(`${displayvideo.caption} deleted successfully`)
               }else{
                        alert(`can't delete`)
               }
              }

              const draging=(e,id)=>{
                    console.log(`${id} draging started`);
                    e.dataTransfer.setData('KEY',id)
              }

            return (
    <div>
                  <Card style={{width:'14rem', backgroundColor:'yellow'}} draggable onDragStart={(e)=>draging(e,displayvideo.id)}>
                      <Card.Img variant="top" src={displayvideo.imageurl} height={'200px'} onClick={handleShow} />
                        <Card.Body>
                              <div className='d-flex justify-content-between'>
                                    <Card.Title>{displayvideo.caption}</Card.Title>
                                    <Button onClick={()=>deletevideoitem(displayvideo.id)} className='btn btn-danger'  variant="primary"><i className="fa-solid fa-trash "></i></Button>
                              </div>
                        </Card.Body>
              </Card>


               

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:'black'}}>
          <Modal.Title style={{color:'white'}}>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'black'}}>
            <iframe width="470" height="415" src={displayvideo.youtubeliink} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'black'}}>
         <button onClick={handleClose} className='btn btn-danger'>close</button>
        </Modal.Footer>
      </Modal>   
    </div>
  )
}

export default Videocard