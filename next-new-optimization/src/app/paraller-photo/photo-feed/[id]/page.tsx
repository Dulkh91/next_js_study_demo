import { photos } from "@/lib/data";
import Image from "next/image";
import defailtImage from "../../../../../public/images/defailtImage.webp"

const PhotoFeed = async ({params}:{params:Promise<{id: string}>}) => {
    const {id} = await params
    const photoFeed = photos.find(photo=>photo.id === id)
    return ( <div>
        <div>
            <h1>Detail Image</h1>
            <Image src={photoFeed?.src || defailtImage} width={500} height={500} alt="feed" />
        </div>
    </div> );   
}
 
export default PhotoFeed;