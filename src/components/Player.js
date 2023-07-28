import React from 'react'
import ReactPlayer from 'react-player'

const player = () => {

    const externalSource = 'https://www.youtube.com/watch?v=kiB9qk4gnt4&list=RDQMKuqK6mE0KNA&start_radio=1'


    return (
        <div>
            <ReactPlayer
                url={externalSource}
                width="100%"
                lenght="20px"
                controls
                playing
                muted />
        </div>
    );
};

export default player;


