"use client";
import Image from "next/image";
import { photos } from "@/lib/data";
import Link from "next/link";
import defailtImage from "../../../../public/images/defailtImage.webp";

const ParallerPhoto = () => {
  return (
    <div className=" columns-2 gap-3 space-y-3">
      {photos.map(({id,src,local}) => (
          <Link key={id} href={`/paraller-photo/photo-feed/${id}`}>
            <Image
              src={src || defailtImage}
              width={600}
              height={0}
              objectFit="cover"
              alt="province"
            />
            <div>{local}</div>
          </Link>
          
      ))}
    </div>
  );
};

export default ParallerPhoto;




/*





*/