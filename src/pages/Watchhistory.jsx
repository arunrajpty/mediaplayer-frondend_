import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deletehistory, gethistory } from '../services/apimethods';


function Watchhistory() {
         
           const [his,Sethis]=useState([])
           const [a,Seta]=useState();
           const delhistory=async(id)=>{
            await deletehistory(id)
            alert('deleted sucessfully')
           }
          const getwatchhistory=async()=>{
                      const result=await gethistory()
                        
                        const {data}=result
                        Sethis(data)
                        Seta(data)
                      
                    }
                    console.log('........history........');
                    console.log(his);
                   useEffect(()=>{
                      getwatchhistory()
                    },[a])
    return (
    <div>
      <div className='container d-flex justify-content-between mt-5'>
             <div><h3 style={{color:'white'}}>Watch History</h3></div>
             <div><Link to='/homepage' style={{textDecoration:'none', color:'white'}}><button className='btn btn-primary'><i class="fa-solid fa-arrow-left"></i> back to home</button></Link></div>
      </div>
      <table className='table container mb-5 mt-5'>
        <thead>
                <tr>
                     <th>#</th>
                     <th>CAPTION</th>
                     <th>URL</th>
                     <th>TIME</th>
                     <th>ACTION</th>
                </tr>
         </thead>       
                <tbody>
                  {
                    his.length>0 ?
                    his.map((item)=>(
                       <tr>
                        <td>{item.id}</td>
                        <td>{item.caption}</td>
                        <td>{item.url}</td>
                        <td>{item.timestamp}</td>
                        <td><button className='btn btn-danger' onClick={()=>delhistory(item.id)}><i class="fa-solid fa-trash" ></i></button></td>
                      </tr>
                    )):
                    <p style={{color:'white'}}>No History</p>
                  }
                     
                </tbody>    

      </table>
    </div>
  )
}

export default Watchhistory;
