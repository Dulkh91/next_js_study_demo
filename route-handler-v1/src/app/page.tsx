
interface Comment {
  id: string,
  text: string
}

export async function getData():Promise<Comment[]>{
  const res = await fetch('http://localhost:3000/api/comments')
  return await res.json()
}


export default  async function Home() {
  const datas = await getData()

  return (<div>
    <h1>Home page use comments</h1>
    <ul>
      {datas.map(data=>(
        <li key={data.id}>{data.text}</li>
      ))}
    </ul>
  </div> )
}
