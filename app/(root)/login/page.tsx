import React from 'react'
import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { redirect } from 'next/navigation';
import { X } from 'lucide-react';

const page = () => {

  return (
    <>
     
      <section className=' flex justify-center item-center '>
     
        <div className='border-4 rounded-lg p-2 py-7 flex flex-col gap-9 justify-center items-center border-black shadow-200  translate-y-48'>
        <div className='flex justify-center items-center'>
            <h1 className='sm:text-26-semibold  text-20-medium uppercase'>Begin Your journey With US</h1>
          </div>
          <div className='flex flex-col gap-2.5'>
          <form action={async () => {
            "use server"
            await signIn('github')
          } }>
          <Button className='sm:text-2xl  text-white shadow-200 uppercase '>Sign In with GITHUB <span className='px-0.5'><GitHubLogoIcon/></span> </Button>
          </form>
         
         
        </div>
         </div>
      </section>

    </>
  )
}

export default page
