'use client';

import Link from 'next/link';
import { muses } from '@/public/constants';
import Image from 'next/image';
import { MapPin } from 'lucide-react';


export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-5 py-16 mt-10 sm:mt-20 font-futuraBook">
      <h1 className="text-4xl font-bold text-center sm:ml-7 sm:text-left mb-8">Muse</h1>


      <div className="h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-3xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            {
              muses.map((muse,index)=>{
                return (
                  <Link 
                    key={index}
                    href="#"
                    className={`group relative flex h-48 items-end 
                      overflow-hidden rounded-lg bg-gray-100 shadow-lg  
                       ${muse.space === 'col-span-2' ? 'md:col-span-2' : 'md:col-span-1'} 
                      md:h-80`}
                  >
                    <Image
                      src={muse.imageURL}
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      width={600}
                      height={600}
                      priority={true}
                    />
                    <span className="flex relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                    <MapPin/> {" "}{muse.des}
                    </span>
                  </Link>

                  


                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}