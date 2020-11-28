import React from 'react'
import Link from 'next/link'
import { useAuth } from '@hooks/useAuth'

const Layout = ({ title, children }) => {
    const auth = useAuth()
    return (
        <div className="root">
            <nav className="navbar">
                <span>Welcome, {auth.user && auth.user.email}</span>
                <div>
                    <Link href='/'><a>Home</a></Link>
                    {(auth.user && auth.user.email) ? (
                        <>
                        <Link href='/profile'><a>Profile</a></Link>
                        <button
                            onClick={() => auth.signOut()}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                            Sign out
                        </button>
                        </>
                    ) : (
                        <>
                            <Link href='/login'><a>Login</a></Link>
                            <Link href='/signup'><a>Sign up</a></Link>
                        </>
                    )}
                    

                    
   
                  
                </div>
            </nav>
            <h1>{title}</h1>
            {children}
            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                .navbar {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                }
                a {
                    margin-right: 0.5rem;
                }
                button {
                    text-decoration: underline;
                    passing: 0;
                    font: inherit;
                    background: transparent;
                    border-style: none; 
                    color: rgb(0,0, 238);
                }
            `}</style>
        </div>
    )
}

export default Layout;
