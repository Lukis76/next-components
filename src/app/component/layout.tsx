

 import type { Metadata } from "next";
 import { FC } from "react";
 
 export const metadata: Metadata = {
   title: "Create Next Layout Page",
   description: "Generated by custom snippet",
 };
 
 interface DocumentLayoutPageProps {
   children: React.ReactNode;
 }
 
 const DocumentLayoutPage: FC<DocumentLayoutPageProps> = ({ children }) => {
   return (
     <>
     <header className="w-full border-b border-zinc-500/50 h-16 sticky z-10 top-0 left-0 right-0 bg-rose-500">
         <nav>
           
         </nav>
      </header>
         <div className="flex flex-row items-center justify-evenly" >
       {children}
     </div>
     </>
   );
 };
 
 export default DocumentLayoutPage;