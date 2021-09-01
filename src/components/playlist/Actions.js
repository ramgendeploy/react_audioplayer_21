import React from 'react'
// import playerContext from '../../context/playerContext'

// // Hooks
const fav = () => {
  console.log('I like this one')
}

// Component
function Actions() {
  return (
    <div className="actions">
      <img src="https://freemusicarchive.org/image?file=images%2Falbums%2FSkidmore_College_Orchestra_-_Mussorgskys_Pictures_at_an_Exhibition_-_2009113013701972.jpg&width=290&height=290&type=image" />
      <div className="album_meta">
        <span className="alb_label">ALBUM</span>
        <h1>Mussorgsky's Pictures at an Exhibition</h1>
      </div>
      <div className="action_btns">
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-heart fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-arrow-alt-circle-down fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="fas fa-ellipsis-h fa-2x"></i>
        </button>
      </div>
    </div>
  )
}

export default Actions
