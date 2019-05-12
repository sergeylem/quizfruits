import React from 'react';
import Sound from 'react-sound';

const playSound = (props) => {
    // return <div>
    //           <audio src = { props.urlStr} autoPlay />
    //         </div>
    return <Sound  //Sound must be in the same string where is RETURN
        url = {props.urlStr}
        playStatus = {Sound.status.PLAYING} />        
};

export default playSound;