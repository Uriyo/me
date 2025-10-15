'use client';

// import { muses } from '@/public/constants';
import Image from 'next/image';
// import { MapPin } from 'lucide-react';
import { useState } from 'react';
import GlassLoader from '@/components/glassLoader';
import InfiniteMenu from '@/components/ui/InfiniteMenu';
const items = [
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img11_k6yaas.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'Shimla '
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307513/folioassets/image5_bh7ub6.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307494/folioassets/image6_nidc3p.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307535/folioassets/image3_cqzb8p.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307535/folioassets/image1_p3dob9.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307514/folioassets/image7_nhtfs9.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307497/folioassets/img9_jvn59s.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307492/folioassets/image4_ioidqv.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307495/folioassets/img8_tfzvup.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img11_k6yaas.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307499/folioassets/img10_iibu3s.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img12_sxrtx7.jpg',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  }

];
export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-9xl px-5 py-16 mt-10 sm:mt-20 font-futuraBook">
      <div className="h-full py-6 sm:py-8 lg:py-12">
        {/* <div className="mx-auto max-w-screen-9xl px-4 md:px-8"> */}
          {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8"> */}
            {/* {
              muses.map((muse,index)=>{
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [isLoading, setIsLoading] = useState(true);
                return (
                  <div
                    key={index}
                    
                    className={`group relative flex h-48 items-end 
                      overflow-hidden rounded-lg bg-gray-100 shadow-lg  
                       ${
                         muse.space === "col-span-2"
                           ? "md:col-span-2"
                           : "md:col-span-1"
                       } 
                      md:h-80`}
                  >
                    {isLoading && <GlassLoader />}
                    <Image
                      src={muse.imageURL}
                      alt="Photo by kushagra"
                      className={`absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                      ${
                        isLoading ? "opacity-0" : "opacity-100"
                      } group-hover:scale-110`}
                      width={600}
                      height={600}
                      onLoadingComplete={() => setIsLoading(false)} // Removes loader when image is loaded
                    />
                    <span className="flex relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                      <MapPin /> {muse.des}
                    </span>
                  </div>
                );
              })
            } */}
            
            <div style={{ height: '600px', position: 'relative' }}>
              <InfiniteMenu items={items}/>
            </div>


          {/* </div> */}
        </div>
      {/* </div> */}
    </div>
  );
}