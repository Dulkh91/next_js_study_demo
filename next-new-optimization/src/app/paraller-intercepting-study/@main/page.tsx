import Link from "next/link";
const MainPage = () => {
    return ( <div className="border p-5 rounded">
        <h1>Hellle main page</h1>
        <Link href={'/paraller-intercepting-study/login'}>Login</Link>
    </div> );
}
 
export default MainPage;