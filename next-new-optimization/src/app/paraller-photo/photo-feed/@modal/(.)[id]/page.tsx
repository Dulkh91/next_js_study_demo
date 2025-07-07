
import { photos } from "@/lib/data";
import Image from "next/image";
import defaultImage from '../../../../../../public/images/defailtImage.webp'

const PhotoModal = async({params}:{params:Promise<{id: string}>}) => {
    const {id} = await params
    const photoFeed = photos.find(photo=>photo.id === id)

    const modalBg ={
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "30"
    }

    return ( <div className=" fixed  flex top-0 right-0  w-full h-full justify-center items-center" style={modalBg} >
        <div className=" flex ">
            <Image src={photoFeed?.src || defaultImage } width={500} height={500} alt="feedPhoto" />
        </div>
    </div> );
}
 
export default PhotoModal;