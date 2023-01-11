import {useEffect} from 'react'
const Prueba=()=>{
    const Clickear=()=>{
        console.log('click')
    }
useEffect(() => {
window.addEventListener('click',Clickear)
return ()=>{window.removeEventListener('click',Clickear)
 }
}, [])
    return(
        <div>
        <button onClick={Clickear}>click me</button>
        </div>
    )
}

export default Prueba