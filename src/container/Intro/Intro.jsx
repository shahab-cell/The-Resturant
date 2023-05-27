import React, { useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

import './Intro.css'

const Intro = () => {
  const [onScreen, setonScreen] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  const handleMouseOver = () => {
    // console.log('helol')
  }

  return (
    <div
      className='app__video'
      onMouseEnter={() => setonScreen(true)}
      onMouseLeave={() => setonScreen(false)}
    >
      <video
        src={meal}
        typeof='video/mp4'
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div
        className={`${
          playVideo ? 'app__video-overlaynot' : 'app__video-overlay'
        } flex__center`}
      >
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {onScreen &&
            (playVideo ? (
              <BsPauseFill color='#fff' fontSize={30} />
            ) : (
              <BsFillPlayFill color='#fff' fontSize={30} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Intro
