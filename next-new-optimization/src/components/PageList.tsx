import Link from "next/link";
const PageList = () => {
    return ( <div className="flex flex-col border mx-auto max-w-md p-5 h-screen">
        <ul className=" space-y-2">
            <li className="border-b"><Link href={`/post/articles`}>Post study about meta data (title)</Link></li>
            <li className="border-b"><Link href={`/post/feed`}>Intercepting basic</Link></li>
            <li className="border-b"><Link href={`/paraller-study`}>Paraller Page</Link></li>
            <li className="border-b"><Link href={`/paraller-intercepting-study`}>paraller intercepting page</Link></li>
            <li className="border-b"><Link href={`/paraller-photo/photo-feed`}>paraller photo</Link></li>
        </ul>
    </div> );
}
 
export default PageList;
