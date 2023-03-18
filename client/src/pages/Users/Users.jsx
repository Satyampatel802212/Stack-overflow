import React from 'react';
import Leftsidebar from '../../component/LeftSidebar/LeftSidebar';
import { useLocation } from 'react-router-dom';
import './Users.css'
import UsersList from './UsersList'

const Users =()=>{
    const location=useLocation()
    console.log(location);
    return (
        <div className='home-container-1'>
           <Leftsidebar />
           <div className='home-container-2' style={{marginTop:"30px"}}>
            <h1 style={{fontWeight:"400"}}>Users</h1>
           <UsersList/>
           </div>
        </div>
    )
}
export default Users;