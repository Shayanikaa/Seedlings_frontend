import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const Authguard = () => {
    return(
      sessionStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" />
    )
  };

export default Authguard