import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Playlist() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)

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
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
                <i className="far fa-heart fa-lg"></i>
              </button>
              <button className="options_song playlist_btn">
                <i class="fas fa-ellipsis-v fa-lg"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
