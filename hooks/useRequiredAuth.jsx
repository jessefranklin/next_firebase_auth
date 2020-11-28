import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useRequiredAuth = () => {
   const auth = useAuth();
   const router = useRouter();
   console.log('mount')
   useEffect(() => {
      console.log(auth.user)
   if (!auth.user) {
      router.push('/login');
   }
   }, [auth, router]);
 
 return auth;
};