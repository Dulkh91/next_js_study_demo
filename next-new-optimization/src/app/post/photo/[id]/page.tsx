const Photo = ({params}:{params:{id:string}}) => {
    return (<div>
        <h1>Photo id {params.id}</h1>
    </div>);
}
 
export default Photo;