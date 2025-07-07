import Link from "next/link";
const Feed = () => {
    return (<div>
        <h1>Gallery</h1>
        <Link href={`/post/photo/12`}>Open Photo</Link>
    </div>  );
}
 
export default Feed;