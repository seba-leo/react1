import './footer.scss'
import {IconContext} from 'react-icons'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
export const Footer = () => {
    return (
        <IconContext.Provider value={{ size: "2em", className: "global-class-name" ,title:"facebook" }}>
        <div className='footer'>
            <p>Seguinos en</p>
            <br/>
            <div className='Icon'>
            <AiFillFacebook/>
            <AiFillInstagram/>
            <AiFillYoutube/>
            </div>
        </div>
        </IconContext.Provider>
    )
}