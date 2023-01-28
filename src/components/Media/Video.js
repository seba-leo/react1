import React from 'react'
import ReactPlayer from 'react-player'
import './Video.scss'
const Video=()=>{
    return(
<div className="container">
    <div className='player-wrapper'>
        <ReactPlayer url='https://www.youtube.com/watch?v=Bv-3Wx2UdbI'
        controls
        width='100%'
        height='500px'
        />
    </div>
</div>
    )
}
export default Video