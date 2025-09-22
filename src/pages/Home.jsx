import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'



function Home() {
      const [lift,Setlift]=useState();
      
      
      
   
  return (
    <div >
          <div className='container mt-5 d-flex justify-content-between align-iems-center'>
                      <div className='add_vedio'>                       
                              <Add set={Setlift}/>
                      </div>
                      <div>
                              <Link to='/watchhistorypage' style={{textDecoration:'none',color:'white'}}>Watch History</Link>
                        
                      </div>
          </div>

         <div className='container mt-5 d-flex justify-content-between align-iems-center'>
                    <div className='All_videos mb-5 mt-3'>
                         <h2 style={{color:'white'}}>All Videos</h2>
                          <View set={lift} />
                    </div>
                    <div className='category'>
                         <Category/>
                    </div>
         </div>
    </div>
  ) 
}

export default Home