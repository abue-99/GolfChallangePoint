
"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
type HeaderProps = { user:{firstName:string;lastName:string}; toggleSidebar:()=>void };
export default function Header({user, toggleSidebar}:HeaderProps){
 return (
  <header className='flex items-center bg-green-700 text-white h-14 px-4 gap-4'>
    <button onClick={toggleSidebar}><Menu/></button>
    <Image src='/GolfChallengePoint_Logo40.png' alt='Logo' width={40} height={40} priority unoptimized/>
    <span className='font-bold text-lg'>Golf Challenge Point</span>
    <div className='ml-auto flex items-center gap-2'>
      <span>{user.firstName} {user.lastName}</span>
    </div>
  </header>
 );
}
