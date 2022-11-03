import React from 'react'
import { FcElectroDevices } from 'react-icons/fc'
export default function ErrorPage() {
  return (
    <div className='flex w-full h-screen items-center flex-col justify-center space-y-6'>
      <div className='text-[6rem]'>
        <FcElectroDevices />
      </div>
      <h2 className='text-4xl capitalize font-semibold'>
        This Page is Lost in the Wind
      </h2>
    </div>
  )
}
