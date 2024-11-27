import React from 'react'
import Link from 'next/link'
import { auth, signOut,signIn } from '@/auth'
import {  BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'


const Navbar = async() => {
    const session = await auth()
  return (
 <>
 <header>
  <nav className='flex bg-white text-black font-bold justify-between px-10 py-4 items-center'>
    <Link href="/"> <label className='text-xl'><span className='text-2xl text-red-400'>Next</span>project</label></Link>
 
        <div className='flex lg:gap-10 sm:gap-4 justify-center items-center'>
          {session && session?.user?(
            <>
            <Link href="/startup/create">
                  <span className='max-sm:hidden px-4 py-2 
                  rounded-full sm:hover:bg-gray-100 '>Create</span>
                  <BadgePlus className='size-6 sm:hidden'/>
            </Link>
            <form
                            action={async () => {
                              "use server";
                              await signOut();
                            }}
                          >
                            <button
                              type="submit"
                              className="w-full px-4 py-2 text-left rounded-full sm:hover:bg-gray-100"
                            >
                             <span className='max-sm:hidden'>LogOut</span>
                             <LogOut className='size-6 sm:hidden text-red-500' />
                  </button>
                  </form>

                <Link href={`/user/${session?.id}`}>
                  <Avatar className='size-16 hover:border-2 border-primary'>
                    <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
                    <AvatarFallback>AV</AvatarFallback> 
                </Avatar>
                </Link>
              
            </>
          ) : (
                        <div className="relative inline-block">
                        {/* Login Button */}
                        <form
                          action={async () => {
                            "use server";
                            await signIn('github');
                          }}
                        >
                          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                            Login
                          </button>
                      </form>
                        
                      </div>
            
           )
          }
        </div>

  </nav>
 </header>
 </>
  )
}

export default Navbar
