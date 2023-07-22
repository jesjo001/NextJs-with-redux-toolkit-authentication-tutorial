// import './globals.css'
"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { selectCurentToken } from '../redux/features/auth/authSlice';


export default function RequireAuth({ children }) {
    const token = useSelector(selectCurentToken)
    const pathname = usePathname();
    const router = useRouter()

    const authenticatedRoutes = [
      '/dashboard/home',
    ]

    useEffect(() => {
      if(!token ){
        if(authenticatedRoutes.includes(pathname)){
            router.push('/login')
        }
      }
    },[])

    return (
    <>
        {children}
    </>
    );
}
