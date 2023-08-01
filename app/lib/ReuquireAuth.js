// import './globals.css'
"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { selectCurrentToken, selectCurrentUser } from '../redux/features/auth/authSlice';
import Loading from '../Components/Loader';

const authenticatedRoutes = [
    '/dashboard/home',
]

export default function RequireAuth({ children }) {
    const [user, setUser] = useState({})
    const currentuser = useSelector(selectCurrentUser)
    const pathname = usePathname();
    const { push } = useRouter()

    // console.log("currentuser : ", currentuser)
    useEffect(() => {
      if(!currentuser && authenticatedRoutes.includes(pathname)) push('/login')
      
      if(currentuser) setUser(currentuser)
    },[])

    if(!user?.email) return <Loading />

    return (
      <>
          {children}
      </>
    );
}
