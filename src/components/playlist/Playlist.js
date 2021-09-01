import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Playlist() {
  const { SetCurrent, currentSong, songs, songslist } = useContext(
    playerContext,
  )

  return (
    <div className="playlist no_drag">
      {/* <div className="header">
        <h4 className="pltext">Songs by artist</h4>
      </div> */}
      <ul className="loi">
        {songslist.map((song, i) => (
          <li
            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
            <div className="tmbn_song">
              <i className="fas fa-play"></i>
            </div>
            <div className="songmeta">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            {/* <span className="song_duration">{song[3]}</span> */}
            <button className="fav_song">
              <i className="far fa-heart fa-lg"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
