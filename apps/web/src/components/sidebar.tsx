
"use client";
import Link from 'next/link';
import { Home, Calendar, CheckSquare, BarChart, Settings } from 'lucide-react';
export default function Sidebar({expanded}:{expanded:boolean}){
 return (
  <aside className={`bg-white border-r h-full ${expanded? 'w-64':'w-16'} transition-all`}> 
    <nav className='flex flex-col py-4'>
      <Link href='/' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-100'><Home/> {expanded && 'Dashboard'}</Link>
      <Link href='/today' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-100'><Calendar/> {expanded && 'Today'}</Link>
      <Link href='/tasks' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-100'><CheckSquare/> {expanded && 'Tasks'}</Link>
      <Link href='/stats' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-100'><BarChart/> {expanded && 'Stats'}</Link>
      <Link href='/settings' className='flex items-center gap-3 px-4 py-2 hover:bg-gray-100'><Settings/> {expanded && 'Settings'}</Link>
    </nav>
  </aside>
 );
}
