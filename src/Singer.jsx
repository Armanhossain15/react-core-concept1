export default function Singer({singer}){
    console.log(singer)
 return (
    <div>
        <h2>Singer Name is : {singer.name}</h2>
        <h4>Singer's age is : {singer.age}</h4>
    </div>
 )
}