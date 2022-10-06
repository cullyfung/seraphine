import React, { FC } from 'react'
import Image from 'next/image'
import logoLight from '@/public/logo_light.png'

export interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  return (
    <div>
      <a href="http://localhost:3000"></a>
      <Image src={logoLight} alt="Demo" width={70} height={20} />
    </div>
  )
}
