export default function Book({book}){
    const bookStyle={
        border: '2px solid #ddd',
        padding: '20px', 
        margin: '20px',
        borderRadius: '20px'
    }
    const {id, name, price} = book;
    return (
        <div style={bookStyle}> 
            <h2>Id :{id}</h2>
            <h3>Book Name: {name}</h3>
            <h4>Price : {price}</h4>
        </div>
    )
}