"use client"

import Link from 'next/link'
import { FiUser, FiLogOut, FiLoader, FiLock } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto bg-blue-700 rounded h-20">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-white m-11">SYSTEM</span> CONTROLE
          </h1>
        </Link>


        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#4b5563" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button className='flex m-11' onClick={handleLogin}>
            <FiLock size={26} color="#fff" />
            <h1 className='text-white m-3'>Faça Login para acessar</h1>
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-3">
            <Link href="/dashboard">
              <button className='text-white'  >ACESSAR DASHBOARD</button>
              
            </Link>

            <button className='text-white m-11' onClick={handleLogout}>
              SAIR 
            </button>
          </div>
        )}


      </div>
    </header>
  )
}