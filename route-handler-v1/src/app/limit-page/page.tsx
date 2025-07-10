

interface Comment {
  id: string,
  text: string
}
export const getData = async (limit:number):Promise<Comment[] | null>=>{
    
    try {
        const res = await fetch('http://localhost:3000/api/limitpage?limit='+limit)
        if(!res.ok) {
            const errorBody = await res.text()
            throw new Error("Server error: " + errorBody)
        }
        return await res.json()
    } catch (error) {
        console.error(error)
        return null   
    }

}

const LimitPage = async () => {
       


        const datas = await getData(2)
    return ( <div>
        <h1>Comment with limit page</h1>
        <ul>
            {datas?.map(data=>(
                <li key={data.id}>{data.text}</li>
            ))}
        </ul>
    </div> );
}
 
export default LimitPage;