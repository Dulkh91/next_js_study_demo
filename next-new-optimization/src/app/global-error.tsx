'use client'
const GlobalError = ({error, reset}:{erorr:Error, reset:()=>void}) => {
    return ( <html>
        <body>
            <h1>Having problem</h1>
            <button onClick={()=>reset()}>Try again</button>
        </body>
    </html> );
}
 
export default GlobalError;