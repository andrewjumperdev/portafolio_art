import React from 'react'
import ReactPlayer from 'react-player'

const videos = 'https://vimeo.com/241495043'

const Hearder = () => {
  return (
      <div className="container__player">
          <ReactPlayer className="player" playing muted url={videos} />
      </div>
    )
}

export default Hearder