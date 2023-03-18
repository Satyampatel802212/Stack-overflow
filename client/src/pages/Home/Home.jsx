import React from 'react';
import Leftsidebar from '../../component/LeftSidebar/LeftSidebar';
import RightSidebar from '../../component/RightSidebar/RightSidebar';
import HomeMainbar from '../../component/HomeMainbar/HomeMainbar';
import '../../App.css'

const Home =()=>{
    return(
        <div className='home-container-1'> 
            <Leftsidebar/>
            
        <div className='home-container-2'>
            <HomeMainbar/>
           <RightSidebar/>
        </div>

        </div>
    ) 
    
}
export default Home;