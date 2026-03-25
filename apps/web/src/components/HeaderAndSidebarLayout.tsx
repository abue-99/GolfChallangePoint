
"use client";
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import type { ReactNode } from "react";

export default function HeaderAndSidebarLayout({
  children,
}: {
  children: ReactNode;
}) {
 const [expanded,setExpanded]=useState(true);
 return (
  <div className='flex flex-col h-screen'>
    <Header user={{firstName:'Andy',lastName:'Büch'}} toggleSidebar={()=>setExpanded(p=>!p)}/>
    <div className='flex flex-row flex-1 overflow-hidden'>
      <Sidebar expanded={expanded}/>
      <main className='flex-1 overflow-auto bg-gray-50 p-4'>{children}</main>
    </div>
  </div>
 );
}
