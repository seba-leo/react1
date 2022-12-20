export const MiComponente =({titulo,text,tel =5511} )=>{
    //const {titulo,text,tel}=props //descestructuracion
    return(
        <div>
        <h2>{titulo}</h2>
        <p>{text}</p>
        <small>{tel} </small>
        </div>
    )
}